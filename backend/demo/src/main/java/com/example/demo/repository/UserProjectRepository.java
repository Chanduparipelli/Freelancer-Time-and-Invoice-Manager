package com.example.demo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.UserProject;

@Repository
public interface UserProjectRepository extends MongoRepository<UserProject, String> {
    List<UserProject> findByUsername(String username);
    List<UserProject> findByUsernameAndEndTimeIsNotNull(String username);
}