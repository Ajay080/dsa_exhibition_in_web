// src/utils/routes.js
// import Dashboard from "@/pages/Dashboard";
import Arrays from "@/pages/Arrays";
import Strings from "@/pages/Strings";
import ArraySolution from "@/pages/solutions/ArraySolution";
import StringSolution from "@/pages/solutions/StringSolution";

export const routes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    label: "Dashboard",
  },
  {
    path: "/arrays",
    element: <Arrays />,
    label: "Arrays",
  },
  {
    path: "/arrays/:questionId",
    element: <ArraySolution />,
    label: null, // hidden in sidebar
  },
  {
    path: "/strings",
    element: <Strings />,
    label: "Strings",
  },
  {
    path: "/strings/:questionId",
    element: <StringSolution />,
    label: null,
  },
  // Add more routes/topics as needed
];
