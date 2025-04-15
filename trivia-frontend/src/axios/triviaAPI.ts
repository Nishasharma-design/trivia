import axios from "axios";
import { Question } from "../redux/quizSlice";


export const fetchQuestions = async (difficulty: string): Promise<Question[]> => {
    const res = await axios.get(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`);

  return res.data.results;
}

