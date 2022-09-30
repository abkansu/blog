package com.huen.ws.content;

import com.huen.ws.member.Member;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Content {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Member member;

    private String filename;
    private String type;
    private Long size;

    @Lob
    private byte[] content;

    public Content(String filename, String filetype, byte[] content, Long size, Member member) {
        this.filename = filename;
        this.type = filetype;
        this.content = content;
        this.size = size;
        this.member = member;
    }
}
