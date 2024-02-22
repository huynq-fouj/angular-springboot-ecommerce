package com.ecomapi.ecom.services.admin.category;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ecomapi.ecom.dto.CategoryDto;
import com.ecomapi.ecom.entity.Category;
import com.ecomapi.ecom.repository.CategoryRepository;
import com.ecomapi.ecom.utils.JerichoUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    @Override
    public Category createCategory(CategoryDto categoryDto) {
        Category category = new Category();
        category.setName(JerichoUtil.encode(categoryDto.getName()));
        category.setDescription(JerichoUtil.encode(categoryDto.getDescription()));
        category.setDeleted(false);
        return categoryRepository.save(category);
    }

    @Override
    public Category updateCategory(CategoryDto categoryDto) {
        
        return null;
    }

    private boolean isExists(Long id) {
        return categoryRepository.existsById(id);
    }

    @Override
    public void deleteCategory(Long id) {
        if(!this.isExists(id)) {
            throw new IllegalArgumentException("Category does not exists");
        } else {
            Category category = categoryRepository.getReferenceById(id);
            if(category.isDeleted()) {
                categoryRepository.deleteById(id);
            } else {
                category.setDeleted(true);
                categoryRepository.save(category);
            }
        }
    }

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

}
