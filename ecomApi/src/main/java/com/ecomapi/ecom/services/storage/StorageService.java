package com.ecomapi.ecom.services.storage;

import java.nio.file.Path;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface StorageService {
    
    public String save(MultipartFile file);

    public Path load(String filename);

    public Resource loadAsResource(String filename);

    public void init();

}
