package com.assignment.springBoot.registrationAndLogin.controller;

//import com.assignment.springBoot.registrationAndLogin.entity.User;

import com.assignment.springBoot.registrationAndLogin.entity.User;
import com.assignment.springBoot.registrationAndLogin.exception.EmailAlreadyExistsException;
import com.assignment.springBoot.registrationAndLogin.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;

@Controller
public class RegisterController {

    Logger logger = LoggerFactory.getLogger(RegisterController.class);

    @Autowired
    private UserService userService;

    @GetMapping({"/", "/register"})
    public String register(Model model) {
        model.addAttribute("user", new User());
        return "register";
    }

    @PostMapping("/register")
    public String registerUser(@ModelAttribute("user") @Valid User user, BindingResult bindingResult) throws Exception, EmailAlreadyExistsException {

        User existing = userService.findByEmail(user.getEmail());
        if (existing != null) {
            bindingResult.rejectValue("email", null, "There is already an account registered with that email");
//            throw new EmailAlreadyExistsException("There is already an account registered with that email");
        }
        if (bindingResult.hasErrors()) {
            return "register";
        }
        logger.info(">>>>>>>>>>>>>>>>>>>>>>>>>");
        logger.info("name : " + user.getName());
        logger.info("email : " + user.getEmail());
        logger.info("userName : " + user.getUserName());
        logger.info("password : " + user.getPassword());
        logger.info(">>>>>>>>>>>>>>>>>>>>>>>>>");

        userService.saveUser(user);
        return "redirect:/register?success";
    }

}

