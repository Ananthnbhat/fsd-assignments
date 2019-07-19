package com.techinstance.login;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.RememberMeServices;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.rememberme.InMemoryTokenRepositoryImpl;

import com.captcha.botdetect.web.servlet.CaptchaServlet;
import com.techinstance.login.security.CustomAuthenticationFailureHandler;
import com.techinstance.login.security.CustomAuthenticationFilter;
import com.techinstance.login.security.CustomRememberMeServices;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	private final static Logger logger = LoggerFactory.getLogger(SecurityConfig.class);

	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	private AuthenticationFailureHandler authenticationFailureHandler;

	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable();
		http.headers().frameOptions().disable();
		http.addFilterBefore(authenticationFilter(), UsernamePasswordAuthenticationFilter.class).authorizeRequests()
				.antMatchers("/resources/**", "/registration", "/h2-console/**", "/botdetectcaptcha").permitAll()
				.anyRequest().authenticated().and()
				.formLogin().loginPage("/login")
				.failureHandler(authenticationFailureHandler).permitAll().and()
				.logout().permitAll().and()
                .rememberMe().rememberMeServices(rememberMeServices()).key("theKey");
	}

	@Bean
	public AuthenticationManager customAuthenticationManager() throws Exception {
		return authenticationManager();
	}

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder());
	}

	public CustomAuthenticationFilter authenticationFilter() throws Exception {
		CustomAuthenticationFilter filter = new CustomAuthenticationFilter();
		filter.setAuthenticationManager(customAuthenticationManager());
		filter.setAuthenticationFailureHandler(authenticationFailureHandler);
		return filter;
	}

	/*
	 * public SimpleUrlAuthenticationFailureHandler failureHandler() {
	 * logger.info("failure handler invoked!"); return new
	 * SimpleUrlAuthenticationFailureHandler("/login?error=true"); }
	 */

	@Bean
	public SimpleUrlAuthenticationFailureHandler failureHandler() {
		logger.info("CustomAuthenticationFailureHandler handler invoked!");
		return new CustomAuthenticationFailureHandler();
	}

	@Bean
	ServletRegistrationBean<CaptchaServlet> captchaServletRegistration() {
		ServletRegistrationBean<CaptchaServlet> srb = new ServletRegistrationBean<CaptchaServlet>();
		srb.setServlet(new CaptchaServlet());
		srb.addUrlMappings("/botdetectcaptcha");
		return srb;
	}
	
	
    @Bean
    public RememberMeServices rememberMeServices() {
        CustomRememberMeServices rememberMeServices = new CustomRememberMeServices("theKey", userDetailsService, new InMemoryTokenRepositoryImpl());
        return rememberMeServices;
    }
}