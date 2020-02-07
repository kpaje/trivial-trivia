import React from "react";
import QUIZ from "../common/constants";

export default function Main() {
  // let correct = 0;
  // let incorrect = 0;
  // const counter = 120;
  // let choice = 0;

  console.log(QUIZ[0].answers);

  // const renderQUIZ = () => {
  //   return Object.entries(QUIZ).map(([key, value]) => {
  //     return (
  //       <div key={key}>
  //         <p>
  //           <span> {value.question}</span>
  //         </p>
  //       </div>
  //     );
  //   });
  // };

  const renderAnswers = () => {
    {
      return QUIZ.map((item, index) =>
        item.answers.map((answer, index) => (
          <div className="radio" key={index}>
            <p>
              <label>
                <input type="radio" value={index} checked={false} />
                {answer}
              </label>
            </p>
          </div>
        ))
      );
    }
  };

  // const renderAnswers = () => {
  //   return Object.entries(QUIZ).map(([key, value], index) => {
  //     return (
  //       <React.Fragment>
  //         <div className="radio">
  //           <p>
  //             <label>
  //               <input type="radio" value={key} checked={false} />
  //               {value.answers[index]}
  //             </label>
  //           </p>
  //         </div>
  //       </React.Fragment>
  //     );
  //   });
  // };

  return (
    <div>
      {/* {renderQUIZ()} */}
      {renderAnswers()}
      {QUIZ.answers}

      <form></form>
    </div>
  );
}
