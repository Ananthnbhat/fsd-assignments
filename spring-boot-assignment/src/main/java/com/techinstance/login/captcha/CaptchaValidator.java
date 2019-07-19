package com.techinstance.login.captcha;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.web.WebAttributes;
import org.springframework.stereotype.Component;

import com.captcha.botdetect.web.servlet.Captcha;

@Component
public class CaptchaValidator {

	public static final String SPRING_SECURITY_FORM_CAPTCHA_CODE = "captchaCode";

	private final static Logger logger = LoggerFactory.getLogger(CaptchaValidator.class);

	/**
	 * @param request
	 */
	public boolean validateCaptchaCode(HttpServletRequest request) {
		// validate the Captcha to check we're not dealing with a bot
		Captcha captcha = Captcha.load(request, "basicExample");
		String captchaCode = obtainCaptchaCode(request);
		logger.info("Input Captchacode from User : "+captchaCode);
		boolean isHuman = captcha.validate(captchaCode);

		if (isHuman) {
			logger.info("Correct captcha code!");
		} else {
			logger.info("Incorrect captcha code!");
			request.setAttribute("captchaIncorrect", "Incorrect Captcha!");
			request.getSession().setAttribute(WebAttributes.AUTHENTICATION_EXCEPTION, "Incorrect Captcha!");
		}

		return isHuman;
	}

	private String obtainCaptchaCode(HttpServletRequest request) {
		return request.getParameter(SPRING_SECURITY_FORM_CAPTCHA_CODE);
	}
}
