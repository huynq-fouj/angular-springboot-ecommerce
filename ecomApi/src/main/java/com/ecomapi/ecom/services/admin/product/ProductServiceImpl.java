package com.ecomapi.ecom.services.admin.product;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.ecomapi.ecom.dto.ProductDto;
import com.ecomapi.ecom.entity.Category;
import com.ecomapi.ecom.entity.Product;
import com.ecomapi.ecom.repository.CategoryRepository;
import com.ecomapi.ecom.repository.ProductRespository;
import com.ecomapi.ecom.utils.DateUtil;
import com.ecomapi.ecom.utils.JerichoUtil;
import com.ecomapi.ecom.utils.UploadUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRespository productRespository;
    private final CategoryRepository categoryRepository;

    public ProductDto addProduct(ProductDto productDto) throws IOException {
        Product product = new Product();
        product.setName(JerichoUtil.encode(productDto.getName()));
        product.setDescription(JerichoUtil.encode(productDto.getDescription()));
        product.setPrice(productDto.getPrice());
        product.setDeleted(false);
        product.setCreated_at(DateUtil.getDate());
        product.setUpdated_at(DateUtil.getDate());
        Category category = categoryRepository.findById(productDto.getCategory_id()).orElseThrow();
        product.setImage(UploadUtil.uploadImg(productDto.getImgMultipartFile()));
        product.setCategory(category);
        return productRespository.save(product).getDto();
    }

    public List<ProductDto> getAllProducts() {
        List<Product> products = productRespository.findAll();
        return products.stream().map(Product::getDto).collect(Collectors.toList());
    }

}
