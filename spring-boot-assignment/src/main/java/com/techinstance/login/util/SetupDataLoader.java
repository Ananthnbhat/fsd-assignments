package com.techinstance.login.util;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.techinstance.login.model.Role;
import com.techinstance.login.model.User;
import com.techinstance.login.repository.RoleRepository;
import com.techinstance.login.repository.UserRepository;


@Component
public class SetupDataLoader implements ApplicationListener<ContextRefreshedEvent> {

	private boolean alreadySetup = false;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	// API

	@Override
	@Transactional
	public void onApplicationEvent(final ContextRefreshedEvent event) {
		if (alreadySetup) {
			return;
		}

		final Role adminRole = createRoleIfNotFound("ROLE_ADMIN");
		final Role userRole = createRoleIfNotFound("ROLE_USER");

		Set<Role> superUser = new HashSet<>();
		superUser.add(adminRole);
		superUser.add(userRole);

		// == create initial user
		createUserIfNotFound("Arun S", "arun@gmail.com", "arun", "Arun@123", superUser);

		Set<Role> normalUser = new HashSet<>();
		normalUser.add(userRole);
		createUserIfNotFound("Arvind", "arvi@gmail.com", "arvi", "Arvi@123", normalUser);

		alreadySetup = true;
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

	@Transactional
	private final User createUserIfNotFound(final String name, final String email, final String userName,
			final String password, final Set<Role> roles) {
		User user = userRepository.findByUsername(email);
		if (user == null) {
			user = new User();
			user.setName(name);
			user.setEmail(email);
			user.setUsername(userName);
			user.setPassword(passwordEncoder.encode(password));
		}
		user.setRoles(roles);
		user = userRepository.save(user);
		return user;
	}

}