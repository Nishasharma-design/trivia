
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { answerQuestions, resetGame } from "../../redux/quizSlice";

import classes from './QuestionScreen.module.scss';

const QuestionScreen = () => {
    const dispatch = useDispatch();
     const navigate = useNavigate();

     const { questions, currentQuestionIndex } = useSelector(
        (state: RootState) => state.quiz
     );

     const currentQuestion = questions[currentQuestionIndex];


     if (!currentQuestion) {
        return (
            <div className={classes.question_screen}>
                <p>No questions found.</p>
                <button
                 onClick={() => {
                    dispatch(resetGame());
                    navigate("/");
                 }}>
                    Back to Home
                 </button>
            </div>
        );
     }


     const answers = [
        ...currentQuestion.incorrect_answers,
        currentQuestion.correct_answer,
     ].sort(() => Math.random() - 0.5);

     const handleAnswerClick = (selected: string) => {
        const isCorrect = selected === currentQuestion.correct_answer;
        dispatch(answerQuestions(isCorrect));

        const nextIndex = currentQuestionIndex + 1;
        const isLast = nextIndex >= questions.length || !isCorrect;

        if (isLast) {
            navigate("/result");
        }
     };

     return (
        <div className={classes.questionContainer}>
            <h2 dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
            <div className={classes.answers}>
                {answers.map((ans, index) => (
                    <button
                    key={index}
                    onClick={() => handleAnswerClick(ans)}
                    dangerouslySetInnerHTML={{ __html: ans }}
                    />
                ))}
            </div>
        </div>
     );
};

export default QuestionScreen;