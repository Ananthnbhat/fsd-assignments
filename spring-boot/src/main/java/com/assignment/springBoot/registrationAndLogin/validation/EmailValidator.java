package com.assignment.springBoot.registrationAndLogin.validation;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class EmailValidator
        implements ConstraintValidator<ValidEmail, String> {
    Logger logger = LoggerFactory.getLogger(EmailValidator.class);

//    private static final String EMAIL_PATTERN = "^[\\w!#$%&’*+/=?`{|}~^-]+(?:\\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$";
    private static final String EMAIL_PATTERN = "^[_A-Za-z0-9-+](.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(.[A-Za-z0-9]+)*(.[A-Za-z]{2,6})$";

    @Override
    public void initialize(ValidEmail constraintAnnotation) {
    }

    @Override
    public boolean isValid(String email, ConstraintValidatorContext context) {
        if (email == null) {
            logger.info("Do not validate if email does not exist");
            return false;
        }

        return (validateEmail(email));
    }

    private boolean validateEmail(String email) {
        Pattern pattern = Pattern.compile(EMAIL_PATTERN);
        Matcher matcher = pattern.matcher(email);
        logger.info(">>>>>>>>>>>>>>>>>>>>>>>>>>");
        logger.info("The given email matches with the email pattern");
        logger.info(String.valueOf(matcher.matches()));
        logger.info(">>>>>>>>>>>>>>>>>>>>>>>>>>");
        return matcher.matches();
    }
}