package com.ecomapi.ecom.services.storage;

import java.nio.file.Path;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public class StorageServiceImpl implements StorageService {

    @Override
    public String save(MultipartFile file) {
        //String fileName = System.currentTimeMillis() + "." + FilenameUtils.getExtension(file.getOriginalFilename());
        //File dest = new File(uploadDir + "\\" + fileName);
        throw new UnsupportedOperationException("Unimplemented method 'save'");
    }

    @Override
    public Path load(String filename) {
        throw new UnsupportedOperationException("Unimplemented method 'load'");
    }

    @Override
    public Resource loadAsResource(String filename) {
        throw new UnsupportedOperationException("Unimplemented method 'loadAsResource'");
    }

    @Override
    public void init() {
        throw new UnsupportedOperationException("Unimplemented method 'init'");
    }

}
