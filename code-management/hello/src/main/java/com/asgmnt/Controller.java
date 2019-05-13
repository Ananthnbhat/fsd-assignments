package com.asgmnt;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@RestController
public class Controller {

    @RequestMapping("/app")
    @ResponseBody
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @RequestMapping("/welcome")
    @ResponseBody
    public String index() {
        return "Welcome!!!";
    }

}