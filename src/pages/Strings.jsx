// src/pages/Strings.jsx
import React from "react";
import { Link } from "react-router-dom";
import { questionBank } from "@/data/questionsData";

export default function Strings() {
  const questions = questionBank.strings;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">String Questions</h1>
      <ul className="space-y-4">
        {questions.map((q) => (
          <li key={q.id} className="p-4 bg-white rounded shadow hover:bg-gray-100">
            <Link to={`/strings/${q.id}`} className="text-blue-600 font-semibold">
              {q.title}
            </Link>
            <p className="text-gray-600 text-sm">{q.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
