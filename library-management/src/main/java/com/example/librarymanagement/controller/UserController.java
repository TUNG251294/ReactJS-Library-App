package com.example.librarymanagement.controller;

import com.example.librarymanagement.model.Opinion;
import com.example.librarymanagement.model.User;
import com.example.librarymanagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/add-image/{username}")
    public ResponseEntity<?> addImage(@PathVariable String username, @RequestBody User user) {
        User searchUser = userService.getUserByUsername(username);
        if (searchUser != null) {
            searchUser.setImage(user.getImage());
            userService.save(searchUser);
            return new ResponseEntity<>("OK", HttpStatus.OK);
        }
        return new ResponseEntity<>("NOT FOUND", HttpStatus.NOT_FOUND);
    }

    @PostMapping("/user/save")
    public ResponseEntity<User> saveUser(@RequestBody User user){
        return new ResponseEntity<>(userService.save(user), HttpStatus.OK);
    }
    @GetMapping("/user/list")
    public ResponseEntity<List<User>> findAllUser(@RequestBody User user){
        List<User> users = userService.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> findUserById(@PathVariable Long id){
        Optional<User> user = userService.findById(id);
        return new ResponseEntity<>(user.get(), HttpStatus.OK);
    }
    @GetMapping("/{username}")
    public ResponseEntity<User> getUserByName(@PathVariable String username) {
        User user = userService.getUserByUsername(username);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody User user){
        String username = user.getUsername();
        String password = user.getPassword();

        User repUser = userService.getUserByUsernameAndPassword(username,password);
        if (repUser != null){
            User resUser = userService.getUserByUsernameAndPassword(username,password);
            return new ResponseEntity<>(resUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/update-email/{username}")
    public ResponseEntity<User> updateEmail(@PathVariable String username, @RequestBody User user) {
        User searchUser = userService.getUserByUsername(username);
        if (searchUser != null) {
            if (user.getEmail() != null) {
                searchUser.setEmail(user.getEmail());
            }
            userService.save(searchUser);
            return new ResponseEntity<>(searchUser, HttpStatus.OK);
        }
        return null;
    }

    @GetMapping("/history/{username}")
    public ResponseEntity<?> getBookOrderHistory(@PathVariable String username) {
        List<Object[]> history = userService.getBookOrderHistoryByUsername(username);
        return new ResponseEntity<>(history, HttpStatus.OK);
    }
    @GetMapping("/library/not-returned-yet-order")
    public ResponseEntity<?> getNotReturnedYetOrderList() {
        List<Object[]> history = userService.getNotReturnedYetOrder();
        return new ResponseEntity<>(history, HttpStatus.OK);
    }
    @GetMapping("/library/order-history")
    public ResponseEntity<?> getLibraryOrderHistory() {
        List<Object[]> history = userService.getLibraryOrderHistory();
        return new ResponseEntity<>(history, HttpStatus.OK);
    }

}
