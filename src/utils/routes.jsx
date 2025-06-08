import Dashboard from "@/pages/Dashboard";
import Arrays from "@/pages/Arrays";
import Strings from "@/pages/Strings";
import ArraySolution from "../pages/solutions/Array";
import StringSolution from "@/pages/solutions/String";

export const routes = [
  { path: "/dashboard", element: <Dashboard />, label: "Dashboard" },
  { path: "/arrays", element: <Arrays />, label: "Arrays" },
  { path: "/arrays/:questionId", element: <ArraySolution />, label: null },
  { path: "/strings", element: <Strings />, label: "Strings" },
  { path: "/strings/:questionId", element: <StringSolution />, label: null },
];
