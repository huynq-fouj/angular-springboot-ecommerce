package com.ecomapi.ecom.services.auth;


import com.ecomapi.ecom.dto.SignupRequest;
import com.ecomapi.ecom.dto.UserDto;

public interface AuthService {

    public UserDto createUser(SignupRequest signupRequest);

    public boolean hasUserWithEmail(String email);

}
