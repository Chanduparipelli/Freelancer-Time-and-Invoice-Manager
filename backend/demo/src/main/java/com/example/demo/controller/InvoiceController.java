package com.example.demo.controller;

import com.example.demo.model.Project;
import com.example.demo.model.UserProject;
import com.example.demo.repository.ProjectRepository;
import com.example.demo.repository.UserProjectRepository;
import com.example.demo.util.PdfGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/invoices")
@CrossOrigin(origins = "http://localhost:3000")
public class InvoiceController {

    @Autowired
    private UserProjectRepository userProjectRepo;

    @Autowired
    private ProjectRepository projectRepo;

    @GetMapping("/download/{userProjectId}")
    public byte[] downloadInvoice(@PathVariable String userProjectId) {
        UserProject up = userProjectRepo.findById(userProjectId)
                .orElseThrow(() -> new RuntimeException("Project not found with ID: " + userProjectId));

        Project project = projectRepo.findById(up.getProjectId())
                .orElseThrow(() -> new RuntimeException("Project not found"));

        return PdfGenerator.generateInvoice(up, project.getName());
    }
}