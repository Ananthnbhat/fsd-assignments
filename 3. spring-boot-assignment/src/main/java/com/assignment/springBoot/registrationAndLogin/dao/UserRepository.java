package com.assignment.springBoot.registrationAndLogin.dao;

//import com.assignment.springBoot.registrationAndLogin.pojo.LoginUser;
import com.assignment.springBoot.registrationAndLogin.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);

    @Query(value = "select * from USER where USER_NAME = ?1 and password = ?2", nativeQuery = true)
    User login(String userName, String password);
}
