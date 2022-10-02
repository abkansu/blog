package com.huen.ws.member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findMemberById(Long id);
    Integer deleteMemberById(Long id);
    Member findMemberByUsername(String username);
}
