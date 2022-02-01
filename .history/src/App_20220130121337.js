import React from "react";
import FeedbaackItem from "./components/FeedbaackItem";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <FeedbaackItem />
      </div>
    </>
  );
};

export default App;
