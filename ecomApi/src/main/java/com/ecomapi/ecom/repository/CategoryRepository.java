package com.ecomapi.ecom.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecomapi.ecom.entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    

}
