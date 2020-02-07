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

  const renderQuiz = () => {
    return Object.keys(quiz).map(function(item) {
      // console.log(item); // key
      // console.log(quiz[item].question); // value
      // console.log(quiz[item].answers[3]);
      console.log(quiz[item].id);
      return (
        <div key={item}>
          <h4>{quiz[item].question}</h4>

          <div className="radio">
            {Object.values(quiz[item].answers).map(element => (
              <p key={element}>
                <label>
                  <input
                    type="radio"
                    id={quiz[item].id}
                    value={item}
                    checked={checked}
                    onChange={() => handleOptionChange()}
                  />
                  {element}
                </label>
              </p>
            ))}
          </div>
        </div>
      );
    });
  };

  return <div>{renderQuiz()}</div>;
}
