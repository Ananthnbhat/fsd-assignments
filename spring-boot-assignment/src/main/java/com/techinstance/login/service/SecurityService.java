package com.techinstance.login.service;

public interface SecurityService {
    String findLoggedInUsername();

    void autoLogin(String username, String password);
}
