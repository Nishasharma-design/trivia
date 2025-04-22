import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFailedQuestions, markQuestionArchived } from "../../redux/quizSlice";
import { useNavigate } from "react-router-dom";
import classes from "./RetryQuestion.module.scss";

function RetryQuestions() {
  const failedQuestions = useSelector(selectFailedQuestions);
  const [retryIndex, setRetryIndex] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  if (!failedQuestions || failedQuestions.length === 0) {
    return <div>All questions answered correctly!</div>; 
  }

  const currentQuestion = failedQuestions[retryIndex];

 
  if (!currentQuestion) {
    return <div>Loading...</div>; 
  }

  const options = [...currentQuestion.incorrectAnswers, currentQuestion.correctAnswer].sort();

  const handleRetryAnswerClick = (selected: string) => {
    if (selected === currentQuestion.correctAnswer) {
      dispatch(markQuestionArchived(currentQuestion.id));
    }

    const next = retryIndex + 1;
    if (next < failedQuestions.length) {
      setRetryIndex(next);
    } else {
      navigate("/result");
    }
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Retry Question {retryIndex + 1}</h1>
      <h2 dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
      <div className={classes.options}>
        {options.map((opt, i) => (
          <button
            key={i}
            className={classes.option}
            onClick={() => handleRetryAnswerClick(opt)}
            dangerouslySetInnerHTML={{ __html: opt }}
          />
        ))}
      </div>
    </div>
  );
}

export default RetryQuestions;
