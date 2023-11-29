package com.example.testng.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.util.FileCopyUtils;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

@RestController
@CrossOrigin("*")
@RequestMapping("/allure")
public class AllureController {

    @GetMapping(value = "/{widgets}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getData(@PathVariable String widgets) throws IOException {
        // Đọc nội dung từ tệp JSON
        Resource resource = new ClassPathResource("allure-report/widgets/" + widgets + ".json");
        InputStream inputStream = resource.getInputStream();
        byte[] bdata = FileCopyUtils.copyToByteArray(inputStream);
        String jsonData = new String(bdata, StandardCharsets.UTF_8);

        // Trả về nội dung JSON
        return ResponseEntity.ok(jsonData);
    }
    @GetMapping(value = "/timeline", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getDataTimeline() throws IOException {
        // Đọc nội dung từ tệp JSON
        Resource resource = new ClassPathResource("allure-report/data/timeline.json");
        InputStream inputStream = resource.getInputStream();
        byte[] bdata = FileCopyUtils.copyToByteArray(inputStream);
        String jsonData = new String(bdata, StandardCharsets.UTF_8);

        // Trả về nội dung JSON
        return ResponseEntity.ok(jsonData);
    }
}
