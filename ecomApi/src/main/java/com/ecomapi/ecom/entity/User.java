package com.ecomapi.ecom.entity;

import com.ecomapi.ecom.enums.UserRole;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String password;

    private String fullname;

    private String address;

    private UserRole role;

    private String img;

}
