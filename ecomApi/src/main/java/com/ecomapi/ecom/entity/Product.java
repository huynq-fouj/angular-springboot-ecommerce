package com.ecomapi.ecom.entity;

import java.sql.Date;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.ecomapi.ecom.dto.ProductDto;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "product")
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Long price;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    private boolean deleted;

    @Column(name = "created_at", columnDefinition = "DATETIME")
    private String created_at;

    @Column(name = "updated_at", columnDefinition = "DATETIME")
    private String updated_at;

    @Column(name = "image", columnDefinition = "TEXT")
    private String image;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name =  "category_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Category category;

    public ProductDto getDto() {
        ProductDto productDto = new ProductDto();
        productDto.setId(id);
        productDto.setCategory_id(category.getId());
        productDto.setDescription(description);
        productDto.setName(name);
        productDto.setImage(image);
        productDto.setCreated_at(created_at);
        productDto.setUpdated_at(updated_at);
        productDto.setDeleted(deleted);
        productDto.setPrice(price);

        return productDto;
    }

}
