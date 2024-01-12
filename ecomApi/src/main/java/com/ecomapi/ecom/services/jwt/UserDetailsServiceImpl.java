package com.ecomapi.ecom.services.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.*;

import com.ecomapi.ecom.entity.User;
import com.ecomapi.ecom.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    
    @Autowired
    private UserRepository userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //
        Optional<User> optionalUser = userRepo.findFirstByEmail(username);
        //
        if(optionalUser.isEmpty()) throw new UsernameNotFoundException("Username not found", null);
        //
        return new org.springframework.security.core.userdetails.User(
            optionalUser.get().getEmail(),
            optionalUser.get().getPassword(),
            new ArrayList<>()
        );
    }

}
