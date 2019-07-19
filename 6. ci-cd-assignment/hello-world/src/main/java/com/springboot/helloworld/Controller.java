package com.springboot.helloworld;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;

@RestController
@EnableAutoConfiguration
public class Controller {

    @RequestMapping("/")
    String home() {
        return "Hello Docker World!";
    }

    public static void main(String[] args) {
        SpringApplication.run(Controller.class, args);
    }

}