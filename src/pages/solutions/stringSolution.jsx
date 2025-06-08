import React from "react";
import { useParams, Link } from "react-router-dom";

const solutionsData = {
  "reverse-string": {
    title: "Reverse String",
    description: "Reverse a string in-place using two pointers.",
    code: `function reverseString(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}`,
  },
  "valid-palindrome": {
    title: "Valid Palindrome",
    description: "Check if a string is a palindrome ignoring non-alphanumeric characters.",
    code: `function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return s === s.split('').reverse().join('');
}`,
  },
  // Add more string questions here...
};

export default function StringSolution() {
  const { questionId } = useParams();

  const solution = solutionsData[questionId];

  if (!solution) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Solution Not Found</h2>
        <p>The solution for this question does not exist.</p>
        <Link to="/strings" className="mt-4 inline-block text-blue-600 hover:underline">
          Back to Strings Questions
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-4">{solution.title}</h2>
      <p className="mb-6">{solution.description}</p>
      <pre className="bg-gray-100 p-4 rounded overflow-auto">
        <code>{solution.code}</code>
      </pre>
      <Link to="/strings" className="mt-6 inline-block text-blue-600 hover:underline">
        Back to Strings Questions
      </Link>
    </div>
  );
}
