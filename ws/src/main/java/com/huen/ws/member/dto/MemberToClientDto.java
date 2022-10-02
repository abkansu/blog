package com.huen.ws.member.dto;

import com.huen.ws.content.Content;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Set;

@Data
@AllArgsConstructor
public class MemberToClientDto {
    private Long id;
    private String name;
    private String surname;
    private String school;
    private String username;
    private Set<Content> contents;
}
