package com.example.librarymanagement.service;

import com.example.librarymanagement.model.User;
import com.example.librarymanagement.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private IUserRepository userRepository;

    public User getUserByUsernameAndPassword(String username, String password){
        return userRepository.getUserByUsernameAndPassword(username,password);
    }
    public List<Object[]> getBookOrderHistoryByUsername(String username){
        return userRepository.getBookOrderHistoryByUsername(username);
    }

    public List<Object[]> getNotReturnedYetOrder(){
        return userRepository.getNotReturnedYetOrder();
    }

    public List<Object[]> getLibraryOrderHistory(){
        return userRepository.getLibraryOrderHistory();
    }
    public User getUserByUsername(String username) {
        return userRepository.getUserByUsername(username);
    }


    public Optional<User> findById(Long id){
        return userRepository.findById(id);
    }

    public List<User> findAll(){
        return userRepository.findAll();
    }

    public User save(User user){
        return userRepository.save(user);
    }

    public void delete(Long id){
        userRepository.deleteById(id);
    }
}
