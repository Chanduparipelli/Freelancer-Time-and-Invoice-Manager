import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/InvoicePage.css";

export default function InvoicePage() {
  const [completedProjects, setCompletedProjects] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const username = localStorage.getItem("username") || "guest";

  useEffect(() => {
    axios.get(`http://localhost:8081/api/user-projects/completed?username=${username}`)
      .then((res) => {
        setCompletedProjects(res.data);
      })
      .catch((err) => console.error(err));
  }, [username]);

  const handleDownload = (userProjectId) => {
    axios.get(`http://localhost:8081/api/invoices/download/${userProjectId}`, {
      responseType: 'blob'
    })
    .then((res) => {
      const fileURL = window.URL.createObjectURL(new Blob([res.data]));
      const fileLink = document.createElement('a');
      fileLink.href = fileURL;
      fileLink.setAttribute('download', `invoice_${userProjectId}.pdf`);
      document.body.appendChild(fileLink);
      fileLink.click();
      fileLink.remove();
    })
    .catch((err) => console.error(err));
  };
  
  const handleViewInvoice = (project) => {
    setSelectedInvoice(project);
  };
  
  const handleCloseInvoice = () => {
    setSelectedInvoice(null);
  };

  return (
    <div className="page-container invoice-container">
      <div className="hero-content">
        <h1>Generate Your Invoices</h1>
        <p>Select a completed project to view and download your professional invoice.</p>
      </div>

      <div className="invoice-list">
        {completedProjects.length === 0 ? (
          <p>No completed projects to invoice yet.</p>
        ) : (
          completedProjects.map((project) => (
            <div 
              key={project.id} 
              className="invoice-card" 
              onClick={() => handleViewInvoice(project)}
            >
              <h3>Project: {project.projectName}</h3>
              <p>Amount: ${project.totalAmount.toFixed(2)}</p>
              <p>Completed: {new Date(project.endTime).toLocaleDateString()}</p>
            </div>
          ))
        )}
      </div>

      {selectedInvoice && (
        <div className="invoice-modal-overlay">
          <div className="invoice-modal">
            <button className="close-btn" onClick={handleCloseInvoice}>×</button>
            <div className="invoice-header">
              <h1>INVOICE</h1>
            </div>
            <div className="invoice-details">
              <div className="client-info">
                <h4>ISSUED TO:</h4>
                <p>Richard Sanchez</p>
                <p>Thyme Unlimited</p>
                <p>123 Anywhere St., Any City</p>
              </div>
              <div className="invoice-numbers">
                <p>Invoice No: <strong>{selectedInvoice.id.substring(0, 8)}</strong></p>
                <p>Date: <strong>{new Date(selectedInvoice.endTime).toLocaleDateString()}</strong></p>
                <p>Due Date: <strong>{new Date(selectedInvoice.endTime).toLocaleDateString()}</strong></p>
              </div>
            </div>

            <div className="invoice-table">
              <table>
                <thead>
                  <tr>
                    <th>DESCRIPTION</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{selectedInvoice.projectName}</td>
                    <td>${selectedInvoice.totalAmount.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="invoice-summary">
              <div className="summary-item">
                <p>SUBTOTAL</p>
                <p>${selectedInvoice.totalAmount.toFixed(2)}</p>
              </div>
              <div className="summary-item">
                <p>TAX (10%)</p>
                <p>${(selectedInvoice.totalAmount * 0.10).toFixed(2)}</p>
              </div>
              <div className="summary-item total-amount">
                <p>TOTAL</p>
                <p>${(selectedInvoice.totalAmount * 1.10).toFixed(2)}</p>
              </div>
            </div>

            <div className="signature-section">
              <img src="https://placehold.co/200x50/FFFFFF/000000?text=Signature" alt="Signature" />
              <p>Authorized Signature</p>
            </div>

            <button className="download-btn" onClick={() => handleDownload(selectedInvoice.id)}>
              Download PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}