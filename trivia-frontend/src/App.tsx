import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "./pages/homepage/HomePage"
import QuestionScreen from "./pages/questionScreen/QuestionScreen"
import ResultScreen from "./pages/resultScreen/ResultScreen"
import RetryQuestions from "./pages/retryQuestion/RetryQuestion"


function App() {
  
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions" element={<QuestionScreen />} />
        <Route path="/result" element={<ResultScreen />} />
        <Route path="/retry" element={<RetryQuestions />} />
       </Routes>
    </BrowserRouter>
  )

}

export default App
