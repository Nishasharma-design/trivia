import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectQuestions,
  selectCurrentQuestionIndex,
  answerQuestions,
} from "../../redux/quizSlice";
import classes from "./QuestionScreen.module.scss";

function QuestionScreen() {
  const questions = useSelector(selectQuestions);
  const currentQuestionIndex = useSelector(selectCurrentQuestionIndex);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (selected: string) => {
    const isCorrect = selected === currentQuestion.correctAnswer;

    dispatch(answerQuestions({ isCorrect, submittedAnswer: selected }));

    const nextIndex = currentQuestionIndex + 1;
    const isLast = nextIndex >= questions.length || !isCorrect;

    if (isLast) {
      navigate("/result");
    }
  };

  if (!currentQuestion) return <div>No question found</div>;

  const options = [...currentQuestion.incorrectAnswers, currentQuestion.correctAnswer].sort();

  return (
    <div className={classes.container}>
      <h1>Question {currentQuestionIndex + 1}</h1>
      <h2 dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
      <div className={classes.options}>
        {options.map((opt, i) => (
          <button
            key={i}
            className={classes.button}
            onClick={() => handleAnswerClick(opt)}
            dangerouslySetInnerHTML={{ __html: opt }}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionScreen;
