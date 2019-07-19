package com.techinstance.login.web;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.techinstance.login.captcha.CaptchaValidator;
import com.techinstance.login.model.User;
import com.techinstance.login.service.SecurityService;
import com.techinstance.login.service.UserService;
import com.techinstance.login.validator.UserValidator;

@Controller
public class UserController {
	@Autowired
	private UserService userService;

	@Autowired
	private SecurityService securityService;

	@Autowired
	private UserValidator userValidator;

	@Autowired
	CaptchaValidator captchaValidator;

	private final static Logger logger = LoggerFactory.getLogger(UserController.class);

	@GetMapping("/registration")
	public String registration(Model model) {
		model.addAttribute("userForm", new User());

		return "jsp/registration";
	}

	@PostMapping("/registration")
	public String registration(@ModelAttribute("userForm") User userForm, BindingResult bindingResult,
			final HttpServletRequest request) {
		
        if (userService.findByUsername(userForm.getUsername()) != null) {
        	bindingResult.rejectValue("username", "Duplicate.userForm.username");
        }
		
		userValidator.validate(userForm, bindingResult);
		
		if (bindingResult.hasErrors()) {
			return "jsp/registration";
		}

		if (captchaValidator.validateCaptchaCode(request)) {
			userService.save(userForm);

			securityService.autoLogin(userForm.getUsername(), userForm.getPasswordConfirm());

			logger.info("Registration success # ");

		} else {
			return "registration";
		}

		return "redirect:/welcome";
	}

	@GetMapping("/accountUpdate")
	public String viewAccount(Model model) {
		logger.info("# View Account #");
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String currentUserName = authentication.getName();
		User user = userService.findByUsername(currentUserName);
		if (null != user) {
			model.addAttribute("userForm", user);

		}

		return "jsp/accountUpdate";
	}
	
	
	@PostMapping("/accountUpdate")
	public String accountUpdate(@ModelAttribute("userForm") User userForm, BindingResult bindingResult,
			final HttpServletRequest request) {
		logger.info("# Account Update #");
		userValidator.validate(userForm, bindingResult);
		
		if (bindingResult.hasErrors()) {
			return "accountUpdate";
		}

		if (captchaValidator.validateCaptchaCode(request)) {
			userService.save(userForm);
			logger.info("Account Update Success #");
			request.setAttribute("message", "Your account details updated successfully!.");
			request.getSession().setAttribute("statusMessage", "Your account details updated successfully!.");
		} 

		return "redirect:/accountUpdate";
	}
}
