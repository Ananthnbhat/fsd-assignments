package com.techinstance.login.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    private String email;
    
    private String username;

    private String password;

    @Transient
    private String passwordConfirm;
    
    @Transient
    private String captchaCode;
    
    @Transient
    private String captchaCodeCopy;  

    @ManyToMany
    private Set<Role> roles;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
		return username;
	}

	public void setUsername(String userName) {
		this.username = userName;
	}

	public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPasswordConfirm() {
        return passwordConfirm;
    }

    public void setPasswordConfirm(String passwordConfirm) {
        this.passwordConfirm = passwordConfirm;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCaptchaCode() {
		return captchaCode;
	}

	public void setCaptchaCode(String captchaCode) {
		this.captchaCode = captchaCode;
	}

	public String getCaptchaCodeCopy() {
		return captchaCodeCopy;
	}

	public void setCaptchaCodeCopy(String captchaCodeCopy) {
		this.captchaCodeCopy = captchaCodeCopy;
	}
    
}
