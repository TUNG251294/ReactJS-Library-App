package com.example.librarymanagement.service;

import com.example.librarymanagement.model.Opinion;
import com.example.librarymanagement.repository.IOpinionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OpinionService {
    @Autowired
    private IOpinionRepository opinionRepository;

    public List<Opinion> findAll(){
        return opinionRepository.findAll();
    }
    public Optional<Opinion> findById(Long id){ return opinionRepository.findById(id);}
    public Opinion save(Opinion opinion){
        Opinion curOpinion = opinion;
        curOpinion.setStatus("pending");
        return opinionRepository.save(curOpinion);
    }
}
