import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const solutions = {
  "two-sum": {
    title: "Two Sum Solution",
    description:
      "Use a HashMap to store seen numbers and their indices. Iterate and check if complement exists.",
    code: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}`,
  },
  "max-subarray": {
    title: "Maximum Subarray Solution",
    description:
      "Use Kadane's algorithm to find the maximum sum subarray in O(n) time.",
    code: `function maxSubArray(nums) {
  let currentSum = nums[0], maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}`,
  },
};

export default function ArraySolution() {
  const { questionId } = useParams();
  const solution = solutions[questionId];

  if (!solution) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center text-red-600 font-semibold">
        Solution not found.
        <div className="mt-4">
          <Link
            to="/arrays"
            className="text-blue-600 hover:underline inline-flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Arrays
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <Link
          to="/arrays"
          className="text-blue-600 hover:underline text-sm inline-flex items-center gap-1"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Arrays
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-3">{solution.title}</h1>
      <p className="text-gray-600 mb-6 text-base">{solution.description}</p>

      <div className="bg-gray-900 text-green-200 text-sm md:text-base p-5 rounded-lg overflow-x-auto shadow-inner">
        <pre className="whitespace-pre-wrap">
          <code>{solution.code}</code>
        </pre>
      </div>
    </div>
  );
}
