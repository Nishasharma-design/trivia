import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchQuestions } from "../../axios/triviaAPI";
import { setQuestions } from "../../redux/quizSlice";

import classes from './HomePage.module.scss';
import { useNavigate } from "react-router-dom";

type FormData = {
    difficulty: string;
};

const HomePage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, watch } = useForm<FormData>();

    const difficulty = watch('difficulty');

    const { refetch, isFetching } = useQuery({
        queryKey: ['questions', difficulty],
        queryFn: () => fetchQuestions(difficulty),
        enabled: false,
      });

    const onSubmit = async () => {
        const result = await refetch();
        if (result.data) { dispatch(setQuestions(result.data));
           navigate("/questions");
    };
}

    return (
        <div className={classes.homeContainer}>
            <h1>Trivia Game</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Select Difficulty:</label>
                <select {...register('difficulty')}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <button type="submit" disabled={isFetching}>
                    {isFetching ? 'Loading...' : 'Start Quiz'}
                </button>
            </form>
            {isFetching && <p>Loading Questions...</p>}
        </div>
    );
};

export default HomePage;