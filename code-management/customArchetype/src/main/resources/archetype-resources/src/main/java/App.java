package com.asgmnt;
import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
//import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
//import org.springframework.boot.web.servlet.support.ServletException;
//import org.springframework.boot.web.servlet.ServletException;

@SpringBootApplication
public class App{

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
        System.out.println("Hello world");
    }

}