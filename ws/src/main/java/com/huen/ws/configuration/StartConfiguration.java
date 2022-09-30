package com.huen.ws.configuration;

import com.huen.ws.content.Content;
import com.huen.ws.content.ContentRepository;
import com.huen.ws.member.Member;
import com.huen.ws.member.MemberRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class StartConfiguration {

    @Bean
    CommandLineRunner commandLineRunner(MemberRepository memberRepository, ContentRepository contentRepository) {
        return args -> {
            for (int i = 0; i < 10; i++) {
                Member member = new Member("user" + i, "pass" + i);
                memberRepository.save(member);
                for (int j = 0; j < 3; j++){
                    Content content = new Content("name" + j, "none", null, 0L, member);
                    contentRepository.save(content);
                }

            }
        };
    }
}
