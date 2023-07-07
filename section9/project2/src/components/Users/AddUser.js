import { useState } from "react";

import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const inputChangeHandler = (input, value) => {
    if (input === "username") {
      setUserName(value);
    } else if (input === "age") {
      setAge(value);
    }
    console.log(input, value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Called AddUser.submitHandler");
    if (userName.trim().length === 0 || age.trim().length === 0) {
      console.log("Invalid username.");
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+age < 1) {
      console.log("Invalid age.");
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onSubmit(userName, age);
    setUserName("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal title={error.title} message={error.message} onClick={errorHandler}/>
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(event) =>
              inputChangeHandler("username", event.target.value)
            }
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(event) => inputChangeHandler("age", event.target.value)}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
