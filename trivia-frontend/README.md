#### REQUIREMENTS/PURPOSE

## MVP for TRIVIA QUIZ BACKEND
- When the user completes a quiz it gets submitted to the API that keeps track of all game details:
score
date played
questions answered
submitted answer for each question
correct answer for each question
if a question was failed or not
One of the API endpoints should allow filtering questions by failed
On the frontend, the user should be able to view questions that they answered wrong
They should be able to attempt those questions again
If they answer the question correct, it should get archived in the database

## MVP for TRIVIA QUIZ FRONTEND
- Create an interface that will allow a user to choose level of difficulty and start a new game
When game starts, the user should see a question card with 4 possible answers
If they answer the question correct, a new question should appear on the screen
If their answer is incorrect, the game is over
Display the score (number of question answered correctly) at the end of each game
Add a "Play Again" button under the score

## STACK USED 
#### For Backend
- Language - Java
- Framework - Spring Boot
- ORM - Hibernate
- ModelMapper for DTO Mapping

#### For Frontend
- React Framework
- Typescript
- Axios 
- React Hook Form
- Redux for global state management
- SCSS for styling

## DESIGN GOALS
- I wanted to keep it simple and clear. 
- The backend handles all logic and data, while the frontend focuses on user interaction. 
- I followed a layered structure to keep things organized and easy to maintain.

## FEATURES
- Project allows users to start quiz
- displays questions on question screen
- each question has 4 options and user has to choose the correct option to move to the next question else quiz ends with displaying final score
- project gives an opportunity to replay quiz 
- it does give an opportunity to retry failed question
- backend displays results of quizzes played by the user
- backend displays failed-questions

## What did i struggle with?
- Handling the user answers and saving the final result correctly was tricky. Connecting the frontend and backend smoothly also took some trial and error.


