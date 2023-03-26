package com.example.librarymanagement.controller;

import com.example.librarymanagement.model.Book;
import com.example.librarymanagement.model.Opinion;
import com.example.librarymanagement.model.User;
import com.example.librarymanagement.service.OpinionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class OpinionController {
    @Autowired
    private OpinionService opinionService;

    @GetMapping("/opinion/list")
    public ResponseEntity<List<Opinion>> findAllOpinion(){
        List<Opinion> opinions = opinionService.findAll();
        return new ResponseEntity<>(opinions, HttpStatus.OK);
    }

    @PostMapping("/opinion/save")
    public ResponseEntity<Opinion> saveUser(@RequestBody Opinion opinion){
        return new ResponseEntity<>(opinionService.save(opinion), HttpStatus.OK);
    }

    @PostMapping("/opinion/check/{id}")
    public ResponseEntity<?> checkOpinion(@PathVariable Long id){
        Opinion opinion = opinionService.findById(id).get();
        if(opinion.getStatus().equals("pending")){
            opinion.setStatus("check");
        } else {opinion.setStatus("pending");}

        opinionService.save(opinion);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
