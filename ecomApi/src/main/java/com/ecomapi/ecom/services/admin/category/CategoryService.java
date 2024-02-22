package com.ecomapi.ecom.services.admin.category;

import java.util.List;

import com.ecomapi.ecom.dto.CategoryDto;
import com.ecomapi.ecom.entity.Category;

public interface CategoryService {

    public Category createCategory(CategoryDto categoryDto);
    public Category updateCategory(CategoryDto categoryDto);
    public void deleteCategory(Long id);

    public List<Category> getAllCategories();

}
