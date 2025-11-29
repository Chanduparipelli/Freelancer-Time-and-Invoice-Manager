package com.example.demo.controller;

import com.example.demo.model.UserProject;
import com.example.demo.service.UserProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/user-projects")
@CrossOrigin(origins = "http://localhost:3000")
public class UserProjectController {

    @Autowired
    private UserProjectService userProjectService;
    @PostMapping("/start")
    public UserProject startProject(@RequestParam String username, @RequestParam String projectId) {
        UserProject up = new UserProject();
        up.setUsername(username);
        up.setProjectId(projectId);
        return userProjectService.startProject(up);
    }

    
    @PostMapping("/end")
    public UserProject endProject(@RequestParam String username, @RequestParam String projectId, @RequestParam double pricePerHour) {
        UserProject up = userProjectService.findActiveProject(username, projectId);
        return userProjectService.endProject(up, pricePerHour);
    }

    @GetMapping
    public List<Map<String, Object>> getUserProjects(@RequestParam String username) {
        return userProjectService.getUserProjectsWithDetails(username);
    }

    @GetMapping("/completed")
    public List<Map<String, Object>> getCompletedUserProjects(@RequestParam String username) {
        return userProjectService.getCompletedUserProjectsWithDetails(username);
    }
}