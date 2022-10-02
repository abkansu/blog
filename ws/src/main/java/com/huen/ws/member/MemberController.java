package com.huen.ws.member;

import com.huen.ws.member.dto.MemberToServerDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/1.0/member")
public class MemberController {

    @Autowired
    MemberService memberService;

    @PostMapping("/signup")
    public HttpStatus signup(@RequestBody MemberToServerDto memberToServerDto){
        return memberService.signup(memberToServerDto);
    }
}
