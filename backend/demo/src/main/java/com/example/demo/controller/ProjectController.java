package com.example.demo.controller;

import com.example.demo.model.Project;
import com.example.demo.model.UserProject;
import com.example.demo.repository.ProjectRepository;
import com.example.demo.repository.UserProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "http://localhost:3000")
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepo;

    @Autowired
    private UserProjectRepository userProjectRepo;

    @GetMapping
    public List<Project> getAllProjects() {
        return projectRepo.findAll();
    }

    @PostMapping("/select")
    public UserProject selectProject(@RequestParam String username,
                                     @RequestParam String projectId) {
        UserProject userProject = new UserProject();
        userProject.setUsername(username);
        userProject.setProjectId(projectId);
        userProject.setStartTime(LocalDateTime.now());
        userProject.setEndTime(null);
        userProject.setTotalAmount(0);
        return userProjectRepo.save(userProject);
    }

    @GetMapping("/user/{username}")
    public List<UserProject> getUserProjects(@PathVariable String username) {
        return userProjectRepo.findByUsername(username);
    }

    @PostMapping("/complete")
    public UserProject completeProject(@RequestParam String userProjectId,
                                       @RequestParam double pricePerHour) {
        UserProject userProject = userProjectRepo.findById(userProjectId)
                .orElseThrow(() -> new RuntimeException("UserProject not found"));

        userProject.setEndTime(LocalDateTime.now());

        double duration = java.time.Duration.between(userProject.getStartTime(), userProject.getEndTime()).toMinutes() / 60.0;
        userProject.setTotalAmount(duration * pricePerHour);

        return userProjectRepo.save(userProject);
    }
}