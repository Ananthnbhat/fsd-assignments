package com.techinstance.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techinstance.login.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
