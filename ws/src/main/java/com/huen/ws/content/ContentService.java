package com.huen.ws.content;

import com.huen.ws.member.Member;
import com.huen.ws.member.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class ContentService {
    @Autowired
    ContentRepository contentRepository;

    @Autowired
    MemberRepository memberRepository;

    public HttpStatus postContent(MultipartFile file) {
        try{
            String filename = file.getOriginalFilename();
            String filetype = file.getContentType();
            byte[] content = file.getBytes();
            Long size = file.getSize();
            contentRepository.save(new Content(filename, filetype, content, size, null));
            return HttpStatus.OK;
        }catch (Exception e){
            return HttpStatus.BAD_REQUEST;
        }
    }

    public List<Content> getAllContent() {
        return contentRepository.findAll();
    }

    public List<Content> getAllContentByMember(String username) {
        Member member = memberRepository.getMemberByUsername(username);
        return contentRepository.getAllByMember(member);
    }
}
