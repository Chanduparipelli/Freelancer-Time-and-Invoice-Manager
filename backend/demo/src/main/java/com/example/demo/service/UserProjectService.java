package com.example.demo.service;

import com.example.demo.model.UserProject;
import com.example.demo.model.Project;
import com.example.demo.repository.UserProjectRepository;
import com.example.demo.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.stream.Collectors;

@Service
public class UserProjectService {

    @Autowired
    private UserProjectRepository userProjectRepo;

    @Autowired
    private ProjectRepository projectRepo;

    // Start a project for a user
    public UserProject startProject(UserProject up) {
        up.setStartTime(LocalDateTime.now());
        up.setEndTime(null);
        up.setTotalAmount(0);
        return userProjectRepo.save(up);
    }

    // End a project and calculate total amount
    public UserProject endProject(UserProject up, double pricePerHour) {
        up.setEndTime(LocalDateTime.now());
        long hours = Duration.between(up.getStartTime(), up.getEndTime()).toHours();
        up.setTotalAmount(hours * pricePerHour);
        return userProjectRepo.save(up);
    }

    // Find all projects of a user, with project details, and return as a list of maps
    public List<Map<String, Object>> getUserProjectsWithDetails(String username) {
        List<UserProject> userProjects = userProjectRepo.findByUsername(username);

        return userProjects.stream().map(up -> {
            Map<String, Object> projectDetails = new HashMap<>();
            projectDetails.put("id", up.getId());
            projectDetails.put("startTime", up.getStartTime());
            projectDetails.put("endTime", up.getEndTime());
            projectDetails.put("totalAmount", up.getTotalAmount());

            // Find the project name and add it to the map
            projectRepo.findById(up.getProjectId()).ifPresent(project -> {
                projectDetails.put("projectName", project.getName());
            });

            return projectDetails;
        }).collect(Collectors.toList());
    }

    // NEW: Find all completed projects of a user, with project details
    public List<Map<String, Object>> getCompletedUserProjectsWithDetails(String username) {
        List<UserProject> userProjects = userProjectRepo.findByUsernameAndEndTimeIsNotNull(username);

        return userProjects.stream().map(up -> {
            Map<String, Object> projectDetails = new HashMap<>();
            projectDetails.put("id", up.getId());
            projectDetails.put("startTime", up.getStartTime());
            projectDetails.put("endTime", up.getEndTime());
            projectDetails.put("totalAmount", up.getTotalAmount());
            
            projectRepo.findById(up.getProjectId()).ifPresent(project -> {
                projectDetails.put("projectName", project.getName());
            });
            return projectDetails;
        }).collect(Collectors.toList());
    }

    // Find active (ongoing) project of a user
    public UserProject findActiveProject(String username, String projectId) {
        return userProjectRepo.findByUsername(username).stream()
                .filter(p -> p.getProjectId().equals(projectId) && p.getEndTime() == null)
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Active project not found for user"));
    }
}