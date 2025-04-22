package com.trivia.trivia_project.triviaProject.QuizResult;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface QuizResultRepository extends JpaRepository<QuizResultEntity, Long> {

    

}
