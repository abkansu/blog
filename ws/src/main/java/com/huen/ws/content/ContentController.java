package com.huen.ws.content;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/1.0/content")
public class ContentController {
    @Autowired
    ContentService contentService;

    @PostMapping("/post")
    public HttpStatus postContent(@RequestParam("file") MultipartFile file){
        return contentService.postContent(file);
    }

    @GetMapping("/getAll")
    public List<Content> getAllContent(){
        return contentService.getAllContent();
    }

    @GetMapping("/getAll/{username}")
    public List<Content> getAllContentByMember(@PathVariable("username") String username){
        return contentService.getAllContentByMember(username);
    }
}
