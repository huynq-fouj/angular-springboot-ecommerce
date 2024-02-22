package com.ecomapi.ecom.utils;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class UploadUtil {

    private static String uploadDir;

    @Value("${upload.dir}")
    private void setUploadDir(String uploadDir) {
        UploadUtil.uploadDir = uploadDir;
    }

    public static String uploadImg(MultipartFile file) throws IllegalStateException, IOException {
        File uploadPath = new File(uploadDir);
        if (!uploadPath.exists()) {
            uploadPath.mkdirs();
        }
        String fileName = System.currentTimeMillis() + "." + FilenameUtils.getExtension(file.getOriginalFilename());
        File dest = new File(uploadDir + fileName);
        file.transferTo(dest);
        return uploadDir + fileName;
    }

}
