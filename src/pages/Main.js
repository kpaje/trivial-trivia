import React from "react";
import QUESTIONS from "../common/constants";

export default function Main() {
  // let correct = 0;
  // let incorrect = 0;
  // const counter = 120;
  // let choice = 0;

  console.log(QUESTIONS[0].answers);

  const renderQuestions = () => {
    return Object.entries(QUESTIONS).map(([key, value]) => {
      return (
        <div key={key}>
          <p>
            <span> {value.question}</span>
          </p>
        </div>
      );
    });
  };

  const renderAnswers = () => {
    return Object.entries(QUESTIONS).map(([key, value], index) => {
      return (
        <React.Fragment>
          <p>
            <li key={key}> {value.answers}</li>
          </p>
        </React.Fragment>
      );
    });
  };

  return (
    <div>
      {renderQuestions()}
      {renderAnswers()}
    </div>
  );
}
