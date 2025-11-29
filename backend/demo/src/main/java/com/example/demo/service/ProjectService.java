package com.example.demo.service;

import com.example.demo.model.Project;
import com.example.demo.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepo;

    public List<Project> getAllProjects() {
        return projectRepo.findAll();
    }

    public Project getProjectById(String id) {
        return projectRepo.findById(id).orElse(null);
    }
}
