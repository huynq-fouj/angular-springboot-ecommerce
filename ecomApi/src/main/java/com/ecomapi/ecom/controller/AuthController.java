package com.ecomapi.ecom.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.RestController;

import com.ecomapi.ecom.dto.AuthenticationRequest;
import com.ecomapi.ecom.dto.SignupRequest;
import com.ecomapi.ecom.dto.UserDto;
import com.ecomapi.ecom.entity.User;
import com.ecomapi.ecom.repository.UserRepository;
import com.ecomapi.ecom.services.auth.AuthService;
import com.ecomapi.ecom.utils.JwtUtil;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.IOException;
import java.util.*;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private static final String TOKEN_PREFIX = "Bearer ";
    private static final String HEADER_STRING = "Authorization";
    private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final AuthService authService;

    @PostMapping("/authenticate")
    public void createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest, HttpServletResponse response) throws IOException, JSONException {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                authenticationRequest.getEmail(),
                authenticationRequest.getPassword()));
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Incorrect username or password");
        } finally {
            final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getEmail());
            Optional<User> optionalUser = userRepository.findFirstByEmail(userDetails.getUsername());
            final String jwt = jwtUtil.generateToken(userDetails.getUsername());
            if(optionalUser.isPresent()) {
                response.getWriter().write(new JSONObject()
                    .put("userId", optionalUser.get().getId())
                    .put("userFullname", optionalUser.get().getFullname())
                    .put("role", optionalUser.get().getRole())
                    .toString());
                response.addHeader("Access-Control-Expose-Headers", "Authorization");
                response.addHeader("Access-Control-Allow-Headers", "Authorization, X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept, X-Custom-header");
                response.addHeader(HEADER_STRING, TOKEN_PREFIX + jwt);
            }
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signupUser(@RequestBody SignupRequest signupRequest) {
        if(authService.hasUserWithEmail(signupRequest.getEmail())) {
            return new ResponseEntity<>("User already exists!", HttpStatus.NOT_ACCEPTABLE);
        }
        UserDto userDto = authService.createUser(signupRequest);
        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }
    

}
