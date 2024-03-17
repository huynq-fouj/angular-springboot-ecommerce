package com.ecomapi.ecom.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class ProductDto {
    
    private Long id;

    private String name;

    private Long price;

    private Long quantity;

    private String description;

    private String created_at;

    private String updated_at;

    private boolean deleted;

    private String image;

    private Long category_id;

    private MultipartFile imgMultipartFile;

}
