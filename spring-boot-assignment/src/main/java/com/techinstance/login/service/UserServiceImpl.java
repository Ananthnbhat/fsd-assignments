package com.techinstance.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.techinstance.login.model.Role;
import com.techinstance.login.model.User;
import com.techinstance.login.repository.RoleRepository;
import com.techinstance.login.repository.UserRepository;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public void save(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        final Role userRole = createRoleIfNotFound("ROLE_USER");
        Set<Role> role = new HashSet<>();
        role.add(userRole);
        user.setRoles(role);
        userRepository.save(user);
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
    
    @Override
    public void update(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    } 
    
    
	@Transactional
	private final Role createRoleIfNotFound(final String name) {
		Role role = roleRepository.findByName(name);
		if (role == null) {
			role = new Role(name);
		}
		role = roleRepository.save(role);
		return role;
	}
}
