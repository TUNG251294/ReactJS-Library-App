package com.example.librarymanagement.controller;

import com.example.librarymanagement.model.Book;
import com.example.librarymanagement.repository.IBookRepository;
import com.example.librarymanagement.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {
    @Autowired
    private BookService bookService;
    @GetMapping("/book/list")
    public ResponseEntity<List<Book>> findAllOpinion(){
        List<Book> books = bookService.findAll();
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @PostMapping("/book/save")
    public ResponseEntity<Book> saveUser(@RequestBody Book book){
        return new ResponseEntity<>(bookService.save(book), HttpStatus.OK);
    }
}
