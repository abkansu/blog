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
    @SequenceGenerator(
            name = "content_sequence",
            sequenceName = "content_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "content_sequence"
    )
    private Long id;

    @ManyToOne
    private Member member;

    private String filename;
    private String type;
    private Long size;

    @Lob
    private byte[] info;

    public Content(String filename, String filetype, byte[] info, Long size, Member member) {
        this.filename = filename;
        this.type = filetype;
        this.info = info;
        this.size = size;
        this.member = member;
    }
}
