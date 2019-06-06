package com.assignment.springBoot.registrationAndLogin.pojo;

public class LoginUser {

    private int id;
    private String userName;
    private String password;

    public LoginUser() {
    }

    public LoginUser(int id, String userName, String password) {
        this.id = id;
        this.userName = userName;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
