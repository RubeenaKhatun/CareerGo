import React, { useState, useEffect } from "react";

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

const ExamInterface = () => {
  const [answers, setAnswers] = useState({});
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval;
    if (minutes >= 0 && seconds >= 0) {
      interval = setInterval(() => {
        if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [minutes, seconds]);

  const handleOptionChange = (questionIndex, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: option,
    }));
  };

  return (
    <>
      <div className="flex justify-between mt-28 mx-20 mb-10">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Countdown Timer - </h1>
          <div className=" text-3xl">
            {" "}
            {minutes.toString().padStart(2, "0")} :{" "}
            {seconds.toString().padStart(2, "0")}
          </div>
        </div>
        <h1 className="text-2xl font-semibold  mb-2">ASSESSMENT</h1>
        <a
          href="./result"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold mx-20 mb-6 py-2 px-4 rounded"
        >
          Submit
        </a>
      </div>

      <div className="mx-20">
        {questionsData.map((question, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl">{question.question}</h3>
            <div className="mt-2">
              {question.options.map((option, optionIndex) => (
                <>
                  <label
                    key={optionIndex}
                    className="inline-flex items-center space-x-2 mr-20"
                  >
                    <input
                      type="radio"
                      name={`question_${index}`}
                      value={option}
                      className="form-radio h-5 w-5 text-blue-600"
                      checked={answers[index] === option}
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
    </>
  );
};

export default ExamInterface;
