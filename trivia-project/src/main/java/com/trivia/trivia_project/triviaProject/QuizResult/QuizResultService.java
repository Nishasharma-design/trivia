package com.trivia.trivia_project.triviaProject.QuizResult;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trivia.trivia_project.triviaProject.QuestionAttempted.QuestionAttemptedDTO;
import com.trivia.trivia_project.triviaProject.QuestionAttempted.QuestionAttemptedEntity;
import com.trivia.trivia_project.triviaProject.QuestionAttempted.QuestionAttemptedRepository;
import com.trivia.trivia_project.triviaProject.QuizSubmission.QuizSubmissionDTO;

@Service
public class QuizResultService {
    
    @Autowired
    private QuizResultRepository quizResultRepository;

    @Autowired
    private QuestionAttemptedRepository questionAttemptedRepository;

    @Autowired
    private ModelMapper modelMapper;

 // i am saving submitted quiz in Database
    public void submitQuiz(QuizSubmissionDTO quizSubmissionDTO) {

        // creating new QuizResult entity 
     QuizResultEntity quizEntity = new QuizResultEntity();

     quizEntity.setScore(quizSubmissionDTO.getScore());

     quizEntity.setDatePlayed(LocalDate.now());

   // converting each QuestionAttempted DTO to entity and attach to QuizResult
   List<QuestionAttemptedEntity> questionEntities = quizSubmissionDTO.getQuestions().stream()
               .map(dto -> modelMapper.map(dto, QuestionAttemptedEntity.class))
               .collect(Collectors.toList());

    for (QuestionAttemptedEntity q : questionEntities) {
        q.setQuizResult(quizEntity);
    }

    quizEntity.setQuestions(questionEntities);

    quizResultRepository.save(quizEntity);

    }

    public List<QuizResultDTO> getAllQuizResults() {
        return quizResultRepository.findAll().stream()
        .map(entity -> modelMapper.map(entity, QuizResultDTO.class))
        .collect(Collectors.toList());
    }

    public List<QuestionAttemptedDTO> getFailedQuestions() {
        return questionAttemptedRepository.findByIsFailedTrueAndIsArchivedFalse().stream()
        .map(entity -> modelMapper.map(entity, QuestionAttemptedDTO.class))
        .collect(Collectors.toList());
    }

    public void retryFailedQuestion(Long questionId, String newAnswer) {
        QuestionAttemptedEntity question = questionAttemptedRepository.findById(questionId)
          .orElseThrow(() -> new NotFoundException("Question not found"));

      if (question.getCorrectAnswer().equalsIgnoreCase(newAnswer)) {
        question.setArchived(true);
        question.setFailed(false);
      }

      questionAttemptedRepository.save(question);


    }


}
