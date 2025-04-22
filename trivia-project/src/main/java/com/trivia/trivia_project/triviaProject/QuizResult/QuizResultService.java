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

import jakarta.transaction.Transactional;

@Service
public class QuizResultService {
    
    @Autowired
    private QuizResultRepository quizResultRepository;

    @Autowired
    private QuestionAttemptedRepository questionAttemptedRepository;

    @Autowired
    private ModelMapper modelMapper;

 @Transactional
  public void submitQuiz(QuizSubmissionDTO quizSubmissionDTO) {

        // creating new QuizResult entity 
     QuizResultEntity quizEntity = new QuizResultEntity();

     quizEntity.setScore(quizSubmissionDTO.getScore());

     quizEntity.setDatePlayed(quizSubmissionDTO.getDatePlayed() != null ? quizSubmissionDTO.getDatePlayed() : LocalDate.now());

   // heree i am converting each QuestionAttempted DTO to entity and attach to QuizResult
   List<QuestionAttemptedEntity> questionEntities = quizSubmissionDTO.getQuestions().stream()
               .map(dto -> modelMapper.map(dto, QuestionAttemptedEntity.class))
               .collect(Collectors.toList());

    for (QuestionAttemptedEntity q : questionEntities) {
        q.setQuizResult(quizEntity);
    

    if (!q.getSubmittedAnswer().trim().equalsIgnoreCase(q.getCorrectAnswer().trim())) {
        q.setFailed(true);
    } else {
        q.setFailed(false);
    }
    q.setArchived(false);
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

      if (question.getCorrectAnswer().trim().equalsIgnoreCase(newAnswer.trim())) {
        question.setArchived(true);
        question.setFailed(false);
      }

      questionAttemptedRepository.save(question);


    }


}
