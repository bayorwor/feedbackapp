import React from "react";
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
        <a href="/">Back to home</a>
      </p>
    </Card>
  );
}

export default AboutPage;
