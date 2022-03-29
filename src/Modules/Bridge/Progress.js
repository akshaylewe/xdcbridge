import React from "react";
// import "./styles.css";
import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";

export default function Progress() {
  const step1Content = <h1></h1>;
  const step2Content = <h1></h1>;
  const step3Content = <h1></h1>;

  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {
    return true;
  }

  function step3Validator() {
    // return a boolean
  }
  return (
    <div className="App">
      <StepProgressBar
        startingStep={0}
        steps={[
          {
            label: "Approval",
            name: "Approval",
            content: step1Content
          },
          {
            label: "Transfer",
            name: "Transfer",
            content: step2Content
          },
          {
            label: "Confirmation",
            name: "Confirmation",
            content: step3Content,
            validator: step2Validator
          },
          {
            label: "Recieve",
            name: "Recieve",
            content: step3Content
          }
        ]}
      />
    </div>
  );
}
