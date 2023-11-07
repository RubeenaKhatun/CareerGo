import React, { useState } from "react";

const ResultPage = () => {
  const [isHover, setIsHover] = useState(false);
  const [answers, setAnswers] = useState({});
  const [isCorrect, setIsCorrect] = useState({});

  // Calculate percentage of correct and incorrect answers
  const correctAnswers = 15;
  const totalQuestions = 20;
  const correctPercentage = (correctAnswers / totalQuestions) * 100;
  const incorrectPercentage = 100 - correctPercentage;

  const questionsData = [
    {
      question:
        "A boat can travel with a speed of 13 km/hr in still water. If the speed of the stream is 4 km/hr, find the time taken by the boat to go 68 km downstream.",
      options: ["2hrs", "3hrs", "4hrs", "5hrs"],
      correctAnswer: "4hrs",
    },
    {
      question:
        "A man's speed with the current is 15 km/hr and the speed of the current is 2.5 km/hr. The man's speed against the current is:",
      options: ["8.5", "9", "10", "12.5"],
      correctAnswer: "9",
    },
    {
      question:
        "A boat running upstream takes 8 hours 48 minutes to cover a certain distance, while it takes 4 hours to cover the same distance running downstream. What is the ratio between the speed of the boat and speed of the water current respectively??",
      options: ["2 : 1", "3 : 2", "4 : 1", "Cannot determine"],
      correctAnswer: "2 : 1",
    },
    {
      question:
        "A motorboat, whose speed in 15 km/hr in still water goes 30 km downstream and comes back in a total of 4 hours 30 minutes. The speed of the stream (in km/hr) is:    ",
      options: ["4", "5", "6", "10"],
      correctAnswer: "6",
    },
    {
      question:
        "In one hour, a boat goes 11 km/hr along the stream and 5 km/hr against the stream. The speed of the boat in still water (in km/hr) is:",
      options: ["3", "5", "8", "9"],
      correctAnswer: "Paris",
    },
    {
      question:
        "A boat can travel with a speed of 13 km/hr in still water. If the speed of the stream is 4 km/hr, find the time taken by the boat to go 68 km downstream.",
      options: ["2hrs", "3hrs", "4hrs", "5hrs"],
      correctAnswer: "4hrs",
    },
    {
      question:
        "A man's speed with the current is 15 km/hr and the speed of the current is 2.5 km/hr. The man's speed against the current is:",
      options: ["8.5", "9", "10", "12.5"],
      correctAnswer: "9",
    },
    {
      question:
        "A boat running upstream takes 8 hours 48 minutes to cover a certain distance, while it takes 4 hours to cover the same distance running downstream. What is the ratio between the speed of the boat and speed of the water current respectively??",
      options: ["2 : 1", "3 : 2", "4 : 1", "Cannot determine"],
      correctAnswer: "2 : 1",
    },
    {
      question:
        "A motorboat, whose speed in 15 km/hr in still water goes 30 km downstream and comes back in a total of 4 hours 30 minutes. The speed of the stream (in km/hr) is:    ",
      options: ["4", "5", "6", "10"],
      correctAnswer: "6",
    },
    {
      question:
        "In one hour, a boat goes 11 km/hr along the stream and 5 km/hr against the stream. The speed of the boat in still water (in km/hr) is:",
      options: ["3", "5", "8", "9"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Rome", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Rome", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Jupiter", "Mars", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Rome", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Rome", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Rome", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Jupiter", "Mars", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Rome", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Rome", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Rome", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Jupiter", "Mars", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Rome", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Rome", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Rome", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Jupiter", "Mars", "Saturn"],
      correctAnswer: "Mars",
    },
    // Add more questions here...
  ];

  const handleOptionChange = (questionIndex, option) => {
    const isAnswerCorrect =
      questionsData[questionIndex].correctAnswer === option;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: option,
    }));
    setIsCorrect((prevIsCorrect) => ({
      ...prevIsCorrect,
      [questionIndex]: isAnswerCorrect,
    }));
  };

  // Styles for the pie chart
  const pieChartStyles = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: "conic-gradient(green 0% 79%, red 20% 100%)",
    transform: isHover ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
  };

  return (
    <div className=" mt-28">
      <div className="grid grid-cols-4">
        <div className="ml-10">
          <h1 className="text-2xl mb-10 font-bold">Practice Test Result</h1>
          <div
            className="mt-5"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={pieChartStyles}
          ></div>
          <div className="mt-5">
            <p className="text-green-500">
              Correct Answers: {correctAnswers} ({correctPercentage.toFixed(1)}
              %)
            </p>
            <p className="text-red-500">
              Incorrect Answers: {totalQuestions - correctAnswers} (
              {incorrectPercentage.toFixed(1)}%)
            </p>
          </div>
        </div>
        <div className="mx-20 mt-2 col-span-3">
          {questionsData.map((question, index) => (
            <div key={index} className="mb-8">
              <h3
                className={`text-xl ${
                  isCorrect[index] === true
                    ? "text-green-500" // Green for correct answers
                    : isCorrect[index] === false
                    ? "text-red-500" // Red for incorrect answers
                    : ""
                }`}
              >
                {question.question}
              </h3>
              <div className="mt-2">
                {question.options.map((option, optionIndex) => (
                  <>
                    <label
                      key={optionIndex}
                      className={`inline-flex items-center space-x-2 mr-20 ${
                        isCorrect[index] === true
                          ? "text-green-500" // Green for correct answers
                          : isCorrect[index] === false
                          ? "text-red-500" // Red for incorrect answers
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question_${index}`}
                        value={option}
                        className="form-radio h-5 w-5 text-blue-600"
                        onChange={() => handleOptionChange(index, option)}
                      />
                      <span>{option}</span>
                    </label>
                    <br />
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
