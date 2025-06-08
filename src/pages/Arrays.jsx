import React from "react";
import { Link } from "react-router-dom";

export default function Arrays() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Arrays Questions</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Link to="/arrays/two-sum" className="text-blue-600 hover:underline">
            Two Sum
          </Link>
        </li>
        <li>
          <Link to="/arrays/max-subarray" className="text-blue-600 hover:underline">
            Maximum Subarray
          </Link>
        </li>
        {/* Add more array questions here */}
      </ul>
    </div>
  );
}
