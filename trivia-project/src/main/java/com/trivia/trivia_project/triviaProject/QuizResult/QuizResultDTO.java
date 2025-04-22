package com.trivia.trivia_project.triviaProject.QuizResult;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.trivia.trivia_project.triviaProject.QuestionAttempted.QuestionAttemptedDTO;

public class QuizResultDTO {
    
private Long id;
private int score;
private LocalDate datePlayed;
private List<QuestionAttemptedDTO> questions = new ArrayList<>();
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
public List<QuestionAttemptedDTO> getQuestions() {
    return questions;
}
public void setQuestions(List<QuestionAttemptedDTO> questions) {
    this.questions = questions;
}



}
