package com.techinstance.login.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

	private final static Logger logger = LoggerFactory.getLogger(LoginController.class);

	@GetMapping("/login")
	public String login(Model model, String error, String logout) {
		logger.info("Login controller method # " + error);
		if (error != null)
			model.addAttribute("error", "Your username and password is invalid.");

		if (logout != null)
			model.addAttribute("message", "You have been logged out successfully.");

		return "jsp/login";
	}

	@GetMapping({ "/", "/welcome" })
	public String welcome(Model model) {
		return "thymeleaf/welcome";
	}
}
