import { useState } from "react";

import styles from "./InputForm.module.css";

const InputForm = (props) => {
  const [currSavings, setCurrSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const inputChangeHandler = (input, value) => {
    if (input === "current-savings") {
      setCurrSavings(value);
    } else if (input === "yearly-contribution") {
      setYearlyContribution(value);
    } else if (input === "expected-return") {
      setExpectedReturn(value);
    } else if (input === "duration") {
      setDuration(value);
    }
    console.log(input, value);
  };

  const resetHandler = () => {
    console.log("Called resetHandler");
    setCurrSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
    props.onReset();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userInput = {
      currSavings: currSavings,
      yearlyContribution: yearlyContribution,
      expectedReturn: expectedReturn,
      duration: duration,
    };
    props.onSubmit(userInput)
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            value={currSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            value={yearlyContribution}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            value={expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            value={duration}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          onClick={resetHandler}
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InputForm;
