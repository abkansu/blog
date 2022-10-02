package com.huen.ws.member;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.huen.ws.content.Content;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Member {

    @Id
    @SequenceGenerator(
            name = "member_sequence",
            sequenceName = "member_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "member_sequence"
    )
    private Long id;

    private String name;
    private String surname;
    private String school;

    @Column(unique = true)
    private String username;

    private String password;

    @OneToMany(mappedBy = "member")
    @JsonIgnore
    private Set<Content> contents;

    public Member(String username, String password){
        this.username = username;
        this.password = password;
        this.contents = new HashSet<>();
    }

    public Member(String name, String surname, String school, String username, String password) {
        this.name = name;
        this.surname = surname;
        this.school = school;
        this.username = username;
        this.password = password;
        this.contents = new HashSet<>();
    }
}
