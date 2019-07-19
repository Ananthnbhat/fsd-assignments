package com.techinstance.login.service;

import com.techinstance.login.model.User;

public interface UserService {
    void save(User user);
    
    void update(User user); 

    User findByUsername(String username);
}
