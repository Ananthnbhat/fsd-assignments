package com.assignment.springBoot.registrationAndLogin;

import com.assignment.springBoot.registrationAndLogin.dao.UserRepository;
import com.assignment.springBoot.registrationAndLogin.entity.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class RegistrationAndLoginApplication {

	public static void main(String[] args) {
		SpringApplication.run(RegistrationAndLoginApplication.class, args);
	}
//	@Bean
//	CommandLineRunner runner(UserRepository repository){
//
//		return args -> {
//			repository.save(new User("Ananth","ananth@gmail.com", "anb","123"));
//		};
//	}

}
