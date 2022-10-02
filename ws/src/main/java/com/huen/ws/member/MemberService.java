package com.huen.ws.member;

import com.huen.ws.member.dto.MemberToServerDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class MemberService {

    @Autowired
    MemberRepository memberRepository;

    public HttpStatus signup(MemberToServerDto memberToServerDto) {
        try{
            String name = memberToServerDto.getName();
            String surname = memberToServerDto.getSurname();
            String school = memberToServerDto.getSchool();
            String username = memberToServerDto.getUsername();
            String password = memberToServerDto.getPassword();
            String passwordRepeat = memberToServerDto.getPasswordRepeat();

            if(!password.equals(passwordRepeat)){
                throw new RuntimeException();
            }

            Member member = new Member(name, surname, school, username, password);

            memberRepository.save(member);

            return HttpStatus.OK;
        }catch (Exception e){
            return HttpStatus.BAD_REQUEST;
        }
    }
}
