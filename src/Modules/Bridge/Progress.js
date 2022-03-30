import React from "react";
// import "./styles.css";
import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";

export default function Progress(props) {
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
            name: props.selectedApprove,
            content: step1Content
          },
          {
            label: "Transfer",
            name: props.selectedHash,
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



// import "react-step-progress-bar/styles.css";
// import { ProgressBar, Step } from "react-step-progress-bar";



// export default function App(props) {
//   const steps = [
//     {
//       status: props.selectedApprove
//     },
//     {
//       status: props.selectedHash
//     },
//     {
//       status: ""
//     },
//     {
//       status: ""
//     },
//     {
//       status: ""
//     },
//     {
//       status: "complete"
//     }
//   ];
//   const transfer = {
//     status: "approved" // change transfer status to progress bar
//   };

//   const getStepPosition = (transferStatus) => {
//     return steps.findIndex(({ status }) => status === transferStatus) + 1;
//   };

//   return (
//     <>
//       <div style={{ margin: 50 }}>
//         <ProgressBar
//           width={750}
//           percent={100 * (getStepPosition(transfer.status) / steps.length)}
//           filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
//         >
//           {steps.map((step, index, arr) => {
//             return (
//               <Step
//                 position={100 * (index / arr.length)}
//                 transition="scale"
//                 children={({ accomplished }) => (
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       borderRadius: "50%",
//                       width: 20,
//                       height: 20,
//                       color: "white",
//                       backgroundColor: accomplished ? "green" : "gray"
//                     }}
//                   >
//                     {index + 1}
//                   </div>
//                 )}
//               />
//             );
//           })}
//         </ProgressBar>
//       </div>
//     </>
//   );
// }









