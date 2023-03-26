package com.example.librarymanagement.repository;

import com.example.librarymanagement.model.Opinion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IOpinionRepository extends JpaRepository<Opinion, Long> {

}
