package com.huen.ws.member;

import com.huen.ws.content.Content;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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

    private String username;

    private String password;

    @OneToMany(mappedBy = "member")
    private List<Content> contents;

    public Member(String username, String password){
        this.username = username;
        this.password = password;
        this.contents = new ArrayList<>();
    }
}
