import React, { useState } from "react";

//import React, { useEffect, useRef } from "react";

export default function index() {
  const [isHover, setIsHover] = useState(false);

  // Calculate percentage of correct and incorrect answers
  const correctAnswers = 17;
  const totalQuestions = 20;
  const correctPercentage = (correctAnswers / totalQuestions) * 100;
  const incorrectPercentage = 100 - correctPercentage;
  const jcorrectAnswers = 12;
  const jtotalQuestions = 20;
  const jcorrectPercentage = (jcorrectAnswers / jtotalQuestions) * 100;
  const jincorrectPercentage = 100 - jcorrectPercentage;
  const acorrectAnswers = 15;
  const atotalQuestions = 20;
  const acorrectPercentage = (acorrectAnswers / atotalQuestions) * 100;
  const aincorrectPercentage = 100 - acorrectPercentage;
  const pieChartStyles = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: "conic-gradient(green 0% 90%, red 20% 100%)",
    transform: isHover ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
  };
  const jpieChartStyles = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: "conic-gradient(green 0% 60%, red 20% 100%)",
    transform: isHover ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
  };
  const apieChartStyles = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: "conic-gradient(green 0% 80%, red 20% 100%)",
    transform: isHover ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
  };
  return (
    <div className="mt-24">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full  p-4">
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-4">Insights</h2>
              <div className="h-72 grid grid-cols-3">
                {/* //  <!-- Insert your pie chart code or library here --> */}
                <div className="flex flex-col items-center">
                  <h1 className="text-xl">Aptitude</h1>
                  <div
                    className="mt-2"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    style={pieChartStyles}
                  ></div>
                  <div className="mt-3">
                    <p className="text-green-500">
                      Students attempted: {correctAnswers} (
                      {correctPercentage.toFixed(1)}%)
                    </p>
                    <p className="text-red-500">
                      Pending: {totalQuestions - correctAnswers} (
                      {incorrectPercentage.toFixed(1)}%)
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-xl">Network Security</h1>
                  <div
                    className="mt-2"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    style={jpieChartStyles}
                  ></div>
                  <div className="mt-3">
                    <p className="text-green-500">
                      Students attempted: {jcorrectAnswers} (
                      {jcorrectPercentage.toFixed(1)}%)
                    </p>
                    <p className="text-red-500">
                      Pending: {jtotalQuestions - jcorrectAnswers} (
                      {jincorrectPercentage.toFixed(1)}%)
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-xl">Java</h1>
                  <div
                    className="mt-2"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    style={apieChartStyles}
                  ></div>
                  <div className="mt-3">
                    <p className="text-green-500">
                      Students attempted: {acorrectAnswers} (
                      {acorrectPercentage.toFixed(1)}%)
                    </p>
                    <p className="text-red-500">
                      Pending: {atotalQuestions - acorrectAnswers} (
                      {aincorrectPercentage.toFixed(1)}%)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  p-4">
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-4">
                Student Performance
              </h2>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="border p-2">Rank</th>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Branch</th>
                    <th className="border p-2">Section</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">1</td>
                    <td className="border p-2">sai krishna teja </td>
                    <td className="border p-2">Electrical Engineering</td>
                    <td className="border p-2">B</td>
                  </tr>
                  <tr>
                    <td className="border p-2">2</td>
                    <td className="border p-2">nithish</td>
                    <td className="border p-2">Electrical Engineering</td>
                    <td className="border p-2">B</td>
                  </tr>
                  <tr>
                    <td className="border p-2">3</td>
                    <td className="border p-2">sai krishna</td>
                    <td className="border p-2">computer science</td>
                    <td className="border p-2">B</td>
                  </tr>
                  <tr>
                    <td className="border p-2">4</td>
                    <td className="border p-2">raghavendra</td>
                    <td className="border p-2">Electrical Engineering</td>
                    <td className="border p-2">B</td>
                  </tr>
                  <tr>
                    <td className="border p-2">5</td>
                    <td className="border p-2">thanmay</td>
                    <td className="border p-2">Electrical Engineering</td>
                    <td className="border p-2">B</td>
                  </tr>
                  <tr>
                    <td className="border p-2">6</td>
                    <td className="border p-2">uday</td>
                    <td className="border p-2">Electrical Engineering</td>
                    <td className="border p-2">B</td>
                  </tr>
                  <tr>
                    <td className="border p-2">7</td>
                    <td className="border p-2">javvad</td>
                    <td className="border p-2">Electrical Engineering</td>
                    <td className="border p-2">B</td>
                  </tr>
                  <tr>
                    <td className="border p-2">8</td>
                    <td className="border p-2">mani sai</td>
                    <td className="border p-2">Electrical Engineering</td>
                    <td className="border p-2">B</td>
                  </tr>
                  <tr>
                    <td className="border p-2">9</td>
                    <td className="border p-2">zubbair</td>
                    <td className="border p-2">Electrical Engineering</td>
                    <td className="border p-2">B</td>
                  </tr>
                  <tr>
                    <td className="border p-2">10</td>
                    <td className="border p-2">indra</td>
                    <td className="border p-2">Electrical Engineering</td>
                    <td className="border p-2">B</td>
                  </tr>
                  <tr>
                    <td className="border p-2">11</td>
                    <td className="border p-2">akshay</td>
                    <td className="border p-2">Electrical Engineering</td>
                    <td className="border p-2">B</td>
                  </tr>
                  <tr>
                    <td className="border p-2">12</td>
                    <td className="border p-2">chinmay</td>
                    <td className="border p-2">Electrical Engineering</td>
                    <td className="border p-2">B</td>
                  </tr>
                  <tr>
                    <td className="border p-2">12</td>
                    <td className="border p-2">sravani</td>
                    <td className="border p-2">Electrical Engineering</td>
                    <td className="border p-2">B</td>
                  </tr>
                  <tr>
                    <td className="border p-2">14</td>
                    <td className="border p-2">Jane Smith</td>
                    <td className="border p-2">Electrical Engineering</td>
                    <td className="border p-2">B</td>
                  </tr>
                  <tr>
                    <td className="border p-2">2</td>
                    <td className="border p-2">sai nikhil</td>
                    <td className="border p-2">Electrical Engineering</td>
                    <td className="border p-2">B</td>
                  </tr>

                  {/* <!-- Add more rows with student data --> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
         
    </div>
  );
}
