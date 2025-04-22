package com.trivia.trivia_project.triviaProject.QuizResult;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import com.trivia.trivia_project.triviaProject.QuestionAttempted.QuestionAttemptedEntity;

import jakarta.persistence.*;

@Entity
@Table(name = "quiz_results")
public class QuizResultEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private int score;

    private LocalDate datePlayed;

    @OneToMany(mappedBy = "quizResult", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("quizResult")
    private List<QuestionAttemptedEntity> questions = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public LocalDate getDatePlayed() {
        return datePlayed;
    }

    public void setDatePlayed(LocalDate datePlayed) {
        this.datePlayed = datePlayed;
    }

    public List<QuestionAttemptedEntity> getQuestions() {
        return questions;
    }

    public void setQuestions(List<QuestionAttemptedEntity> questions) {
        this.questions = questions;
    }


    
}
