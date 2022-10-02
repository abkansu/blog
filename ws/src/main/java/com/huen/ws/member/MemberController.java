package com.huen.ws.member;

import com.huen.ws.member.dto.MemberToClientDto;
import com.huen.ws.member.dto.MemberToServerDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/1.0/member")
public class MemberController {

    @Autowired
    MemberService memberService;

    @PostMapping("/signup")
    public HttpStatus signup(@RequestBody MemberToServerDto memberToServerDto){
        return memberService.signup(memberToServerDto);
    }

    @GetMapping("/get/{id}")
    public MemberToClientDto getMember(@PathVariable("id") Long id){
        return memberService.getMember(id);
    }

    @PutMapping("/update")
    public HttpStatus updateMember(@RequestBody MemberToServerDto memberToServerDto){
        return memberService.updateMember(memberToServerDto);
    }

    @DeleteMapping("/delete/{id}")
    public HttpStatus deleteMember(@PathVariable("id") Long id){
        return memberService.deleteMember(id);
    }

    @GetMapping("/getAll")
    public List<MemberToClientDto> getAll(){
        return memberService.getAll();
    }
}
