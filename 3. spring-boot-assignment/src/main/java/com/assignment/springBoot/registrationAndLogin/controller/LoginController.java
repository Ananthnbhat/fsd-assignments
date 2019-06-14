package com.assignment.springBoot.registrationAndLogin.controller;

//import com.assignment.springBoot.registrationAndLogin.entity.User;

import com.assignment.springBoot.registrationAndLogin.pojo.LoginUser;
import com.assignment.springBoot.registrationAndLogin.entity.User;
import com.assignment.springBoot.registrationAndLogin.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class LoginController {

    Logger logger = LoggerFactory.getLogger(LoginController.class);

    @Autowired
    private UserService userService;


    @GetMapping("/login")
    public String login(Model model) {
        model.addAttribute("loginUser", new LoginUser());

        return "login";
    }

//    @PostMapping("/login")
//    public String loginUser() {
//        return "redirect:/welcome";
//    }

    @GetMapping("/welcome")
    public String welcome(Model model) {
        return "welcome";
    }

    @GetMapping("/logout")
    public String loggedOut() {
        return "redirect:/login?logoutSuccess";
    }

    @PostMapping("/login")
    public String loginUser(@ModelAttribute("loginUser") LoginUser loginUser, BindingResult bindingResult) {
        User validUser = userService.validateUser(loginUser.getUserName(), loginUser.getPassword());
        if (validUser != null) {
            return "redirect:/welcome";
        }
        return "redirect:/login?loginFailure";
    }

}

