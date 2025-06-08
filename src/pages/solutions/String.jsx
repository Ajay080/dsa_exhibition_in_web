// src/pages/solutions/StringSolution.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { questionBank } from "@/data/questionsData";

export default function StringSolution() {
  const { questionId } = useParams();
  const question = questionBank.strings.find((q) => q.id === questionId);

  if (!question) {
    return (
      <div className="p-6 text-center text-red-600 font-semibold">
        Solution not found.
        <div className="mt-4">
          <Link to="/strings" className="text-blue-600 hover:underline">
            ← Back to Strings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link
        to="/strings"
        className="text-blue-600 hover:underline text-sm inline-block mb-4"
      >
        ← Back to Strings
      </Link>
      <h1 className="text-2xl font-bold mb-2">{question.title}</h1>
      <p className="text-gray-600 mb-4">{question.description}</p>
      <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-lg overflow-x-auto">
        <code>{question.code}</code>
      </pre>
    </div>
  );
}
