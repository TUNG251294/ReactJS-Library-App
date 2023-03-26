package com.example.librarymanagement.service;

import com.example.librarymanagement.model.Book;
import com.example.librarymanagement.model.Opinion;
import com.example.librarymanagement.model.User;
import com.example.librarymanagement.repository.IBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    @Autowired
    private IBookRepository bookRepository;

    public List<Book> findAll(){
        return bookRepository.findAll();
    }
    public Book save(Book book){
        return bookRepository.save(book);
    }
}
