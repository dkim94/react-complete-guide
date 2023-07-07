import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ResultTable from "./components/ResultTable";

function App() {
  const [yearlyData, setYearlyData] = useState();
  const calculateHandler = (userInput) => {
    console.log("Called calculateHandler");
    console.log(userInput);
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["currSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlyContribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    let totalInterest = 0;
    let investedCapital = 0;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      if (i === 0) {
        totalInterest = yearlyInterest;
        investedCapital = currentSavings;
      }
      else {
        totalInterest += yearlyInterest;
        investedCapital += yearlyContribution;
      }

      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        totalSavings: currentSavings,
        yearlyInterest: yearlyInterest,
        totalInterest: totalInterest,
        investedCapital: investedCapital,
      });
    }

    // do something with yearlyData ...
    setYearlyData(yearlyData);
    console.log(yearlyData);
  };

  const resetHandler = () => {
    setYearlyData();
  };

  return (
    <div>
      <Header />
      <InputForm onSubmit={calculateHandler} onReset={resetHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {yearlyData && <ResultTable data={yearlyData} />}
    </div>
  );
}

export default App;
