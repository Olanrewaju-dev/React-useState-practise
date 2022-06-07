import React from "react";
import { useState } from "react";
import "./index.css";
import Data from "./data";

import Person from "./person";

const App = () => {
  // State declaration
  const [showData, setShowData] = useState(true);
  const [title, setText] = useState("5 Anniversaries today!");
  const [buttonText, setButtonText] = useState("Clear All");

  // Handle click funtion
  const handleClick = () => {
    setShowData(!showData);
    if (title === "5 Anniversaries today!" && buttonText === "Clear All") {
      setText("0 anniversaries today");
      setButtonText("Reset");
    } else {
      setText("5 Anniversaries today!");
      setButtonText("Clear All");
    }
  };

  return (
    <>
      <section className="grid">
        <div className="item">
          <h1 className="anniversaries">{title}</h1>
        </div>
        <div>
          {showData
            ? Data.map((Data) => {
                return (
                  <Person
                    key={Data.id}
                    name={Data.name}
                    weddingAnniversary={Data.weddingAnniversary}
                    img={Data.img}
                  />
                );
              })
            : ""}
        </div>
        <button
          onClick={handleClick}
          style={{
            borderRadius: "0.25rem",
            cursor: "pointer",
            backgroundColor: "#f28ab2",
            color: "white",
            border: "none",
            display: "block",
            fontSize: "1.2rem",
            width: "100%",
            padding: "0.25rem",
            margin: "2rem auto 0",
          }}
        >
          {buttonText}
        </button>
      </section>
    </>
  );
};

export default App;
