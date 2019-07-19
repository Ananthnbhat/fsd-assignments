package com.techinstance.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techinstance.login.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{
	 Role findByName(String name);
}
