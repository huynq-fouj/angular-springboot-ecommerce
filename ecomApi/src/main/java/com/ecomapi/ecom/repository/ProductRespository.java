package com.ecomapi.ecom.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecomapi.ecom.entity.Product;

@Repository
public interface ProductRespository extends JpaRepository<Product, Long> {

}
