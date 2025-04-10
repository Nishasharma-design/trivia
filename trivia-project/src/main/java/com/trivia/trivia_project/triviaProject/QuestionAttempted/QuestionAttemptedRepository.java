package com.trivia.trivia_project.triviaProject.QuestionAttempted;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionAttemptedRepository extends JpaRepository<QuestionAttemptedEntity, Long> {
    
  List<QuestionAttemptedEntity> findByIsFailedTrue();


  List<QuestionAttemptedEntity> findByIsFailedTrueAndIsArchivedFalse();
}
