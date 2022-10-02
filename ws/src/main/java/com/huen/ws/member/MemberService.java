package com.huen.ws.member;

import com.huen.ws.member.dto.MemberToClientDto;
import com.huen.ws.member.dto.MemberToServerDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

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

    public MemberToClientDto getMember(Long id) {
        try{
            Member member = memberRepository.findMemberById(id);
            if(member == null){
                throw new RuntimeException();
            }
            return new MemberToClientDto(
                    member.getId(),
                    member.getName(),
                    member.getSurname(),
                    member.getSchool(),
                    member.getUsername(),
                    member.getContents()
                    );
        }catch (Exception e){
            return null;
        }





    }

    @Transactional
    public HttpStatus deleteMember(Long id) {
        try{
            Integer i = memberRepository.deleteMemberById(id);
            if(i != 1){
                throw new RuntimeException();
            }
            return HttpStatus.OK;
        }catch (Exception e){
            return HttpStatus.BAD_REQUEST;
        }
    }

    public HttpStatus updateMember(MemberToServerDto memberToServerDto) {
        try{
            String name = memberToServerDto.getName();
            String surname = memberToServerDto.getSurname();
            String school = memberToServerDto.getSchool();
            String username = memberToServerDto.getUsername();
            String password = memberToServerDto.getPassword();
            String passwordRepeat = memberToServerDto.getPasswordRepeat();
            Member member = memberRepository.findMemberByUsername(username);
            if(member == null || !password.equals(passwordRepeat)){
                throw new RuntimeException();
            }
            member.setName(name);
            member.setSurname(surname);
            member.setSchool(school);
            member.setUsername(username);
            member.setPassword(password);
            memberRepository.save(member);
            return HttpStatus.OK;
        }catch (Exception e){
            return HttpStatus.BAD_REQUEST;
        }
    }

    public List<MemberToClientDto> getAll() {
        List<Member> members = memberRepository.findAll();
        List<MemberToClientDto> memberToClientDtos = new ArrayList<>();
        for (Member member: members){
            MemberToClientDto memberToClientDto = new MemberToClientDto(
                    member.getId(),
                    member.getName(),
                    member.getSurname(),
                    member.getSchool(),
                    member.getUsername(),
                    member.getContents()
                    );
            memberToClientDtos.add(memberToClientDto);
        }
        return memberToClientDtos;
    }


}
