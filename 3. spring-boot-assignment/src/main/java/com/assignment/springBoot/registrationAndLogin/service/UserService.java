package com.assignment.springBoot.registrationAndLogin.service;

import com.assignment.springBoot.registrationAndLogin.dao.UserRepository;
import com.assignment.springBoot.registrationAndLogin.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public void saveUser(User user) {
        userRepository.save(user);
    }

    public User validateUser(String username, String password) {
        return userRepository.login( username, password);
    }
}
