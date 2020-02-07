import React, { useState } from "react";
import quiz from "../common/quiz";

export default function Main() {
  const [checked, setChecked] = useState(false);
  // let correct = 0;
  // let incorrect = 0;
  // const counter = 120;
  // let choice = 0;

  const handleOptionChange = () => {
    if (!checked) {
      setChecked(true);
    }
  };

  const renderAnswers = () => {
    return Object.values(quiz[0].question).map((thing, num) => {
      return <span key={num}>{thing}</span>;
    });
  };

  const renderQuestion = i => {
    return Object.values(quiz[i].answers).map((item, num) => {
      return (
        <div className="radio" key={num}>
          <label>
            <input
              type="radio"
              id={item}
              value={item}
              checked={checked}
              onChange={() => handleOptionChange()}
            />
            {item}
          </label>
        </div>
      );
    });
  };

  const loadQuiz = () => {
    for (let i = 0; i < 7; i++) {
      return (
        <React.Fragment>
          <div>{renderAnswers(i)}</div>
          <form>{renderQuestion(i)}</form>
        </React.Fragment>
      );
    }
  };

  return (
    <div>
      <h4>{renderAnswers()}</h4>
      <form>{renderQuestion(0)}</form>

      <h4>{renderAnswers()}</h4>
      <form>{renderQuestion(1)}</form>

      <h4>{renderAnswers()}</h4>
      <form>{renderQuestion(2)}</form>

      <h4>{renderAnswers()}</h4>
      <form>{renderQuestion(3)}</form>

      <h4>{renderAnswers()}</h4>
      <form>{renderQuestion(4)}</form>

      <h4>{renderAnswers()}</h4>
      <form>{renderQuestion(5)}</form>

      <h4>{renderAnswers()}</h4>
      <form>{renderQuestion(6)}</form>
    </div>
  );
}
