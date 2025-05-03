import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [ step, setStep ] = useState(3);
  const [ isOpen, setIsOpen ] = useState(true)

  function changeStep(direction) {
    setStep(prevStep => {

      if((prevStep <= 3 && prevStep >= 2) && direction === "Previous") {
        return prevStep - 1
      } else if ((prevStep <= 2 && prevStep >= 1) && direction === "Next") {
        return prevStep + 1
      }

      return prevStep
    })
  }

  return (
    <>
    <button className="close" onClick={() => setIsOpen(prevOpen => !prevOpen)}>&times;</button>
    {isOpen && (
    <div className="steps">
        <div className="numbers">
          <div className={step === 1 ? "active" : ""}>1</div>
          <div className={step === 2 ? "active" : ""}>2</div>
          <div className={step === 3 ? "active" : ""}>3</div>
        </div> 

        <p className="message">Step {step}: {messages[step -1]}</p>

        <div className="buttons">
          <button style={{ backgroundColor: "#7950f2", color:"#fff"}} onClick={() => changeStep('Previous')}>Previous</button>
          <button style={{ backgroundColor: "#7950f2", color:"#fff"}} onClick={() => changeStep('Next')}>Next</button>
        </div>
    </div>
    )
    }
    </>
  );
}

export default App;
