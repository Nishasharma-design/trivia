import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setQuestions } from "../../redux/quizSlice";

import classes from './ResultScreen.module.scss';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ResultScreen = () => {
  const { score, questions } = useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitResults = async () => {
    const today = new Date().toISOString().split("T")[0];

    const submittedData = questions.map(q => ({
      questionText: q.question,
      questionId: q.id,
      submittedAnswer: q.submittedAnswer,
      correctAnswer: q.correctAnswer,
      isFailed: q.submittedAnswer.trim().toLowerCase() !== q.correctAnswer.trim().toLowerCase(),
  isArchived: false
    }));

    try {
      await axios.post('http://localhost:8080/api/quiz', {
        score,
        datePlayed: today,
        questions: submittedData,
      });

      console.log("Quiz results submitted successfully");
    } catch (error) {
      console.error("Error submitting quiz results:", error);
    }
  };

  useEffect(() => {
    if (score > 0) {
      submitResults();
    }
  }, [score]);

  const handleRestart = () => {
    
    dispatch(setQuestions([])); 
    navigate('/');
  };

  const handleRetry = () => {
    navigate("/retry");
  };

  return (
    <div className={classes.resultContainer}>
      <h1 className={classes.heading}>Quiz Finished</h1>
      <p className={classes.scoreText}>Your Score: <span>{score}</span></p>
      <button className={classes.restartBtn} onClick={handleRestart}>
        Restart Quiz
      </button>
      <button className={classes.retryBtn} onClick={handleRetry}>
        Retry Incorrect Questions
      </button>
    </div>
  );
};

export default ResultScreen;

