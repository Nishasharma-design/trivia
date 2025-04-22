import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { createSelector } from 'reselect';

export interface Question {
  id: number;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  submittedAnswer: string;
  isFailed: boolean;
  isArchived: boolean;
}

interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
}

const initialState: QuizState = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuestions(state, action: PayloadAction<Question[]>) {
      state.questions = action.payload;
      state.currentQuestionIndex = 0;
      state.score = 0;
    },

    answerQuestions(state, action: PayloadAction<{ isCorrect: boolean; submittedAnswer: string }>) {
      const question = state.questions[state.currentQuestionIndex];

      if (question) {
        question.submittedAnswer = action.payload.submittedAnswer;
        question.isFailed = !action.payload.isCorrect;
      }

      if (action.payload.isCorrect) {
        state.score += 1;
      }

      state.currentQuestionIndex += 1;
    },

    markQuestionArchived(state, action: PayloadAction<number>) {
      const q = state.questions.find(q => q.id === action.payload);
      if (q) q.isArchived = true;
    },
  },
});

// Memoized selector for failed questions
export const selectFailedQuestions = createSelector(
  [(state: RootState) => state.quiz.questions],
  (questions) => questions.filter(q => q.isFailed && !q.isArchived)
);

export const { setQuestions, answerQuestions, markQuestionArchived } = quizSlice.actions;

export const selectQuestions = (state: RootState) => state.quiz.questions;
export const selectCurrentQuestionIndex = (state: RootState) => state.quiz.currentQuestionIndex;
export const selectScore = (state: RootState) => state.quiz.score;

export default quizSlice.reducer;
