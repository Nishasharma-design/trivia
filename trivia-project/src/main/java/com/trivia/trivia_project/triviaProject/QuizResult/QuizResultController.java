package com.trivia.trivia_project.triviaProject.QuizResult;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.trivia.trivia_project.triviaProject.QuestionAttempted.QuestionAttemptedDTO;
import com.trivia.trivia_project.triviaProject.QuizSubmission.QuizSubmissionDTO;

@RestController
@RequestMapping("/api/quiz")
public class QuizResultController {

    @Autowired
    private QuizResultService quizResultService;

    @PostMapping
    public void submitQuiz(@RequestBody QuizSubmissionDTO quizSubmissionDTO) {
        quizResultService.submitQuiz(quizSubmissionDTO);
    }

    @GetMapping("/results")
    public List<QuizResultDTO> getAllResults() {
        return quizResultService.getAllQuizResults();
    }

    @GetMapping("/failed-questions")
    public List<QuestionAttemptedDTO> getFailedQuestions() {
        return quizResultService.getFailedQuestions();
    }


    public void retryQuestion(@PathVariable Long id, @RequestParam String newAnswer) {
        quizResultService.retryFailedQuestion(id, newAnswer);
    }

}
