import React, { useState } from "react";

const SDE = () => {
  const [showExpandedTable, setShowExpandedTable] = useState(false);

  const handleNameClick = () => {
    setShowExpandedTable(!showExpandedTable);
  };

  return (
    <div>
      <h1 className="mt-28 text-2xl font-semibold flex justify-center">
        SDE PRACTICE SHEET
      </h1>
      <div className="w-full mt-5">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xl leading-4 font-medium text-gray-800 uppercase tracking-wider">
                Arrays
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xl leading-4 font-medium text-gray-800 uppercase tracking-wider">
                problems
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem1</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/set-matrix-zeroes/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  max zeros
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 2</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/pascals-triangle/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Pascals triangle
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 3</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/next-permutation/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  next permutation
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 4</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/maximum-subarray/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  kadens algorithm
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 5</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/sort-colors/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  sort colours
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 6</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  strock buy and sell
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="min-w-full mt-8 bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xl leading-4 font-medium text-gray-800 uppercase tracking-wider">
                linked List
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xl leading-4 font-medium text-gray-800 uppercase tracking-wider">
                problems
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem1</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/set-matrix-zeroes/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  reverse linkedlist
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 2</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/pascals-triangle/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  middle element of a linked list
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 3</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/next-permutation/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  merge two sorted linked list
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 4</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/maximum-subarray/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  remove nth node from back
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 5</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/sort-colors/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  add two numbers in linked listy
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 6</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  delete a given node
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="min-w-full mt-8 bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xl leading-4 font-medium text-gray-800 uppercase tracking-wider">
                Greedy algorithm
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xl leading-4 font-medium text-gray-800 uppercase tracking-wider">
                problems
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem1</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/set-matrix-zeroes/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  n meeting in one room
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 2</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/pascals-triangle/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  min no.of platforms req
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 3</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/next-permutation/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  job seq problem
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 4</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/maximum-subarray/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  fractional knapsack
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 5</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/sort-colors/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  min no.of coins
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 6</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  activity selection
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="min-w-full mt-8 bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xl leading-4 font-medium text-gray-800 uppercase tracking-wider">
                recursion
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xl leading-4 font-medium text-gray-800 uppercase tracking-wider">
                problems
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem1</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/set-matrix-zeroes/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  subset sums
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 2</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/pascals-triangle/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  subset-2
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 3</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/next-permutation/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  combination sum-1
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 4</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/maximum-subarray/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  combination sum-2
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 5</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/sort-colors/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  palindrome partioning
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 6</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  k-th permutation sequence
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="min-w-full mt-8 bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xl leading-4 font-medium text-gray-800 uppercase tracking-wider">
                binary tree
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xl leading-4 font-medium text-gray-800 uppercase tracking-wider">
                problems
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem1</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/set-matrix-zeroes/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  nth root of a integer
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 2</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/pascals-triangle/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  matrix median
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 3</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/next-permutation/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  single element in sorted array
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 4</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/maximum-subarray/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  search element
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 5</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/sort-colors/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  median of 2 sorted array
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">problem 6</span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <a
                  href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  k th element of two sorted array{" "}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SDE;
