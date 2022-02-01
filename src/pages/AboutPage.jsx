import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <h1>About</h1>
      <p>
        This is a React app that allows users to leave feedback on a product or
        service.
      </p>
      <p>The feedback is stored in a local JSON file.</p>
      <p>Version 1.0.0</p>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
