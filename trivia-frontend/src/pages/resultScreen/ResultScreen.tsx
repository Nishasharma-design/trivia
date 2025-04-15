import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store";
import { resetGame } from "../../redux/quizSlice";

import classes from './ResultScreen.module.scss';

import axios from "axios";
import { useNavigate } from "react-router-dom";


const ResultScreen = () => {
    const score = useSelector((state: RootState) => state.quiz.score);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
     
    const submitResults = async () => {
        const today = new Date().toISOString().split("T")[0]; 
    
        try {
            await axios.post('http://localhost:8080/api/quiz', {
                score,
                datePlayed: today,
                questions: [],
            });
            console.log("Quiz results submitted successfully");
        } catch (error) {
            console.error("Error submitting quiz results:", error);
        }
    };
    
    if (score > 0) {
        submitResults();
    }
    
   if (score > 0) {
    submitResults();
   }



    const handleRestart = () => {
        dispatch(resetGame());
        navigate('/');
    };


    return (
        <div className={classes.resultContainer}>
            <h1 className={classes.heading}>Quiz Finished</h1>
            <p className={classes.scoreText}>Your Score: <span>{score}</span></p>
            <button className={classes.restartBtn} onClick={handleRestart}>
                Restart Quiz
            </button>
        </div>
    );
};

export default ResultScreen;