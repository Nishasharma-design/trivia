package com.trivia.trivia_project.triviaProject.QuestionAttempted;

import com.trivia.trivia_project.triviaProject.QuizResult.QuizResultEntity;

import jakarta.persistence.*;

@Entity
@Table(name = "questions_attempted")
public class QuestionAttemptedEntity {
    
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

private String questionText;

private String submittedAnswer;

private String correctAnswer;

private boolean isFailed;

private boolean isArchived;

@ManyToOne
@JoinColumn(name = "quiz_result_id")
private QuizResultEntity quizResult;

public Long getId() {
    return id;
}

public void setId(Long id) {
    this.id = id;
}

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

public QuizResultEntity getQuizResult() {
    return quizResult;
}

public void setQuizResult(QuizResultEntity quizResult) {
    this.quizResult = quizResult;
}

}
