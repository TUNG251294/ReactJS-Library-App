package com.example.librarymanagement.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "opinion")
@NoArgsConstructor
@Data
public class Opinion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    private String opinion;
    private String status;

    public Opinion(User user, String opinion) {
        this.user = user;
        this.opinion = opinion;
    }
}
