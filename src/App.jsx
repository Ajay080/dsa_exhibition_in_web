import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout"; // If you move Layout into its own file (optional)

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
