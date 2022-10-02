package com.huen.ws.content;

import com.huen.ws.member.Member;
import com.huen.ws.member.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

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

    public List<Content> getAllContentByMember(Long id) {
        Member member = memberRepository.findMemberById(id);
        System.out.println(member.getContents().size());
        return contentRepository.findContentsByMember(member);
    }

    @Transactional
    public HttpStatus deleteContent(Long id) {
        try{
            Integer b = contentRepository.deleteContentById(id);
            if(b != 1){
                throw new RuntimeException();
            }
            return HttpStatus.OK;
        }catch (Exception e){
            return HttpStatus.BAD_REQUEST;
        }
    }

    public Content getContent(Long id) {
        try{
            Optional<Content> content = contentRepository.findContentById(id);
            if (!content.isPresent()){
                throw new RuntimeException();
            }
            return content.get();
        }catch (Exception e){
            return null;
        }
    }
}
