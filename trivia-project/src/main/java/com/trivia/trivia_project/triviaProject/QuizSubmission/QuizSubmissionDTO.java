package com.trivia.trivia_project.triviaProject.QuizSubmission;

import java.time.LocalDate;
import java.util.List;

import com.trivia.trivia_project.triviaProject.QuestionAttempted.QuestionAttemptedDTO;

public class QuizSubmissionDTO {

   
   private int score;
   

   private LocalDate datePlayed;

   private List<QuestionAttemptedDTO> questions;

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
