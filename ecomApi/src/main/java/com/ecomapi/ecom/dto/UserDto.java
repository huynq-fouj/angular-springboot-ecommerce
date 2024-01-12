package com.ecomapi.ecom.dto;

import com.ecomapi.ecom.enums.UserRole;

import lombok.Data;

@Data
public class UserDto {

    private Long id;
    private String email;
    private String fullname;
    private UserRole userRole;

}
