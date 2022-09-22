import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Which of the following is used in React.js to increase performance?",
      options: [
        { id: 0, text: "Original Dom", isCorrect: false },
        { id: 1, text: "Hooks", isCorrect: false },
        { id: 2, text: "Props", isCorrect: false },
        { id: 3, text: "Virtual Dom", isCorrect: true },
      ],
    },
    {
      text: "Who created React.js?",
      options: [
        { id: 0, text: "Jorden walke", isCorrect: true },
        { id: 1, text: "Jorden mike", isCorrect: false },
        { id: 2, text: "Jorden Lee", isCorrect: false },
        { id: 3, text: "jorden watson", isCorrect: false },
      ],
    },
    {
      text: "Which of the following method is used to access the state of a component from inside of a member function?",
      options: [
        { id: 0, text: "this.values", isCorrect: true },
        { id: 1, text: "this.getState()", isCorrect: false },
        { id: 2, text: "this.State()", isCorrect: false },
        { id: 3, text: "this.SateValue()", isCorrect: false },
      ],
    },
    {
      text: "The function which is called to render HTML to a web page in react?",
      options: [
        { id: 0, text: "React.DOM_render()", isCorrect: false },
        { id: 1, text: "render()", isCorrect: true },
        { id: 2, text: "render_DOM()", isCorrect: false },
        { id: 3, text: "DOM_render()", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is not a disadvantage of React.js?",
      options: [
        { id: 0, text: "React.js has only a view layer. We have put your code for Ajax requests, events and so on.", isCorrect: false },
        { id: 1, text: "The library of React.js is pretty large.", isCorrect: false },
        { id: 2, text: "The JSX in React.js makes code easy to read and write.", isCorrect: true },
        { id: 3, text: "The learning curve can be steep in React.js.", isCorrect: false },
      ],
    },
    {
      text: " Why is the usage of setState?",
      options: [
        { id: 0, text: "Replace the state completely instead of the default merge action.", isCorrect: false },
        { id: 1, text: "Access the previous state before the setState operation.", isCorrect: false },
        { id: 2, text: "Invoke code after the setState operation is done.", isCorrect: true },
        { id: 3, text: "All of the above.", isCorrect: false },
      ],
    },
    {
      text: " Which of the following command is used to Install create-react-app?",
      options: [
        { id: 0, text: "npm install create-react-app", isCorrect: false },
        { id: 1, text: "npm install -f create-react-app", isCorrect: false },
        { id: 2, text: "npm install -g create-react-app", isCorrect: true },
        { id: 3, text: "install -g create-react-app", isCorrect: false },
      ],
    },
    {
      text: " Which of the following is correct about prop in react?",
      options: [
        { id: 0, text: "Can be changed inside another component", isCorrect: false },
        { id: 1, text: "Cannot be changed in the component", isCorrect: true },
        { id: 2, text: "Can be changed inside the component", isCorrect: false },
        { id: 3, text: "All of the mentioned", isCorrect: false },
      ],
    },
    {
      text: " .............. helps react for keeping their data unidirectional.",
      options: [
        { id: 0, text: "JSX", isCorrect: false },
        { id: 1, text: "Flux", isCorrect: true },
        { id: 2, text: "DOM", isCorrect: false },
        { id: 3, text: "Props", isCorrect: false },
      ],
    },
    {
      text: " Life cycle methods of a components fall under following categories?",
      options: [
        { id: 0, text: "Mounting, Unmounting", isCorrect: false },
        { id: 1, text: "Mounting, Updating, Unmounting", isCorrect: true },
        { id: 2, text: "Mounting, Updating", isCorrect: false },
        { id: 3, text: "All of above", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1> React.js Quiz </h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;