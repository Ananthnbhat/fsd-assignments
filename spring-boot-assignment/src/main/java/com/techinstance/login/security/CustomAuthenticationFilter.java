package com.techinstance.login.security;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.techinstance.login.captcha.CaptchaValidator;

public class CustomAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

	private final static Logger logger = LoggerFactory.getLogger(CustomAuthenticationFilter.class);

	@Autowired
	CaptchaValidator captchaValidator;

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {

		logger.info("CustomAuthenticationFilter #######");

		if (!request.getMethod().equals("POST")) {
			throw new AuthenticationServiceException("Authentication method not supported: " + request.getMethod());
		}

		createCaptchaValidator(request);

		if(!captchaValidator.validateCaptchaCode(request)) {
			throw new AuthenticationServiceException("Incorrect Captcha!");
		}

		UsernamePasswordAuthenticationToken authRequest = getAuthRequest(request);
		setDetails(request, authRequest);

		Authentication authentication = this.getAuthenticationManager().authenticate(authRequest);

		return authentication;
	}

	/**
	 * @param request
	 */
	private void createCaptchaValidator(HttpServletRequest request) {
		if (captchaValidator == null) {
			ServletContext servletContext = request.getServletContext();
			WebApplicationContext webApplicationContext = WebApplicationContextUtils
					.getWebApplicationContext(servletContext);
			captchaValidator = webApplicationContext.getBean(CaptchaValidator.class);
		}
	}

	private UsernamePasswordAuthenticationToken getAuthRequest(HttpServletRequest request) {
		String username = obtainUsername(request);
		String password = obtainPassword(request);

		if (username == null) {
			username = "";
		}
		if (password == null) {
			password = "";
		}

		return new UsernamePasswordAuthenticationToken(username, password);
	}

}