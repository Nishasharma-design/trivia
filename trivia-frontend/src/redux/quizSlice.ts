import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type Question = {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
};

export interface QuizState {
    difficulty: string;
    questions: Question[];
    currentQuestionIndex: number;
    score: number;
    gameOver: boolean;
}

const initialState: QuizState = {
    difficulty: "",
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    gameOver: false,
};

const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setDifficulty(state, action: PayloadAction<string>) {
            state.difficulty = action.payload;
        },
        setQuestions(state, action: PayloadAction<Question[]>) {
            state.questions = action.payload;
        },
        answerQuestions(state, action: PayloadAction<boolean>) {
            if (action.payload) {
                state.score += 1;
            } else {
                state.gameOver = true;
            }
            state.currentQuestionIndex += 1;
        },
        resetGame(state) {
            state.questions = [];
            state.currentQuestionIndex = 0;
            state.score = 0;
            state.gameOver = false;
        },
    },
});

export const { setDifficulty, setQuestions, answerQuestions, resetGame } = quizSlice.actions;
export default quizSlice.reducer;