package com.huen.ws.content;

import com.huen.ws.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ContentRepository extends JpaRepository<Content, Long> {
    List<Content> findContentsByMember(Member member);
    Optional<Content> findContentById(Long id);
    Integer deleteContentById(Long id);
}
