package com.assignment.springBoot.registrationAndLogin.entity;

import com.assignment.springBoot.registrationAndLogin.validation.ValidEmail;
import org.hibernate.annotations.Type;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
//import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class User {
    @Id
    @GeneratedValue
    private long id;

    @NotNull
    @NotEmpty(message = "Please provide your full name")
    @Size(min = 2, max = 30, message = "Name length must be between 2 & 30")
    private String name;

    @ValidEmail
    @Column(name = "email", nullable = false, unique = true)
//    @Email(message = "Please provide a valid e-mail")
    @NotEmpty(message = "Please provide an e-mail")
    private String email;

    @NotNull
    @NotEmpty(message = "Please provide your  user name")
    private String userName;

    @NotNull
    @NotEmpty(message = "Please provide a valid password")
    @Size(min = 1, max = 8, message = "Password size must be between 1 & 8")
    private String password;

    public User() {
    }

    public User(String name, String email, String userName, String password) {
        this.name = name;
        this.email = email;
        this.userName = userName;
        this.password = password;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
