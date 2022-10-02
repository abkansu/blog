package com.huen.ws.member.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MemberToServerDto {
    private String name;
    private String surname;
    private String school;
    private String username;
    private String password;
    private String passwordRepeat;
}
