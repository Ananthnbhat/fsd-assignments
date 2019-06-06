package com.assignment.springBoot.registrationAndLogin.exception;

import org.springframework.validation.BindingResult;

public class EmailAlreadyExistsException extends Exception {
    public EmailAlreadyExistsException(String s) {
        super(s);

    }
}
