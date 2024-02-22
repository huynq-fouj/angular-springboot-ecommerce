package com.ecomapi.ecom.entity;

import java.sql.Date;

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

    private String username;

    private String email;

    private String password;

    private String fullname;

    private String address;

    private UserRole role;

    private String img;

    private boolean deleted;

    private Date created_at;

    private Date updated_at;

}
