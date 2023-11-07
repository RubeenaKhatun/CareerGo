import React, { useState } from "react";

export default function Index() {
  return (
    <div className="mt-24">
      <h1 className="text-2xl font-semibold flex justify-center">
        ASSESSMENTS
      </h1>
      <div className="grid grid-cols-5 mx-10 my-5">
        <div className="h-64 w-52 bg-gray-100 rounded-lg shadow p-7">
          <a
            href="./assessment/assessment"
            className="text-xl font-semibold mb-8"
          >
            JAVA
          </a>
          <div className="flex flex-col space-y-4 mt-8">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="easy"
                name="difficulty"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Easy</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="medium"
                name="difficulty"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Medium</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="hard"
                name="difficulty"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Hard</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="varies"
                name="difficulty"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Varies</span>
            </label>
          </div>
        </div>
        <div className="h-64 w-52 bg-gray-100 rounded-lg shadow p-7">
          <a
            href="./assessment/assessment"
            className="text-xl font-semibold mb-2"
          >
            NETWORK SECURITY
          </a>
          <div className="flex flex-col space-y-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="easy"
                name="difficulty"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Easy</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="medium"
                name="difficulty"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Medium</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="hard"
                name="difficulty"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Hard</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="varies"
                name="difficulty"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Varies</span>
            </label>
          </div>
        </div>
        <div className="h-64 w-52 bg-gray-100 rounded-lg shadow p-7">
          <a
            href="./assessment/assessment"
            className="text-xl font-semibold mb-2"
          >
            NUMERICAL APTITUDE
          </a>
          <div className="flex flex-col space-y-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="easy"
                name="difficulty"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Easy</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="medium"
                name="difficulty"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Medium</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="hard"
                name="difficulty"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Hard</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="varies"
                name="difficulty"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Varies</span>
            </label>
          </div>
        </div>
        <div className="h-64 w-52 bg-gray-100 rounded-lg shadow p-7">
          <a
            href="./assessment/assessment"
            className="text-xl font-semibold mb-2"
          >
            LOGICAL APTITUDE
          </a>
          <div className="flex flex-col space-y-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="easy"
                name="difficulty"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Easy</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="medium"
                name="difficulty"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Medium</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="hard"
                name="difficulty"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Hard</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="varies"
                name="difficulty"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Varies</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
