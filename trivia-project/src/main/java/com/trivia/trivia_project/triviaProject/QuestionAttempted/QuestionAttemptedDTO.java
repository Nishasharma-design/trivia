package com.trivia.trivia_project.triviaProject.QuestionAttempted;

public class QuestionAttemptedDTO {
   
  
  private String questionText;
  private String submittedAnswer;
  private String correctAnswer;
  private boolean isFailed;
  private boolean isArchived;

 
 

  

  public String getQuestionText() {
    return questionText;
  }

  public void setQuestionText(String questionText) {
    this.questionText = questionText;
  }

  public String getSubmittedAnswer() {
    return submittedAnswer;
  }

  public void setSubmittedAnswer(String submittedAnswer) {
    this.submittedAnswer = submittedAnswer;
  }

  public String getCorrectAnswer() {
    return correctAnswer;
  }

  public void setCorrectAnswer(String correctAnswer) {
    this.correctAnswer = correctAnswer;
  }

  public boolean isFailed() {
    return isFailed;
  }

  public void setFailed(boolean isFailed) {
    this.isFailed = isFailed;
  }

  public boolean isArchived() {
    return isArchived;
  }

  public void setArchived(boolean isArchived) {
    this.isArchived = isArchived;
  }

  

}
