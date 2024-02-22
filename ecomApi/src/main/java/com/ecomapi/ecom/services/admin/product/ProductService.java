package com.ecomapi.ecom.services.admin.product;

import java.io.IOException;
import java.util.List;

import com.ecomapi.ecom.dto.ProductDto;

public interface ProductService {

    ProductDto addProduct(ProductDto productDto) throws IOException;

    List<ProductDto> getAllProducts();

}
