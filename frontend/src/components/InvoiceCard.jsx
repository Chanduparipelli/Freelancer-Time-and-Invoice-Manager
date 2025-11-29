
import React from "react";

const InvoiceCard = ({ invoice, onDownload }) => {
  return (
    <div className="invoice-card">
      <h3>{invoice.projectName}</h3>
      <p>Hours Worked: {invoice.hours}</p>
      <p>Rate: ${invoice.rate}</p>
      <p>Total: ${invoice.total}</p>
      <button onClick={() => onDownload(invoice)}>Download PDF</button>
    </div>
  );
};

export default InvoiceCard;
