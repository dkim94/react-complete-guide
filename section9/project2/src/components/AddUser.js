import { useState } from "react";

import styles from "./AddUser.module.css";
import Button from "./Button";

const AddUser = () => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

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
    console.log("Called submitHandler");
  };

  return (
    <form className={styles.input} onSubmit={submitHandler}>
      <label>Username</label>
      <input
        type="text"
        id="username"
        value={userName}
        onChange={(event) => inputChangeHandler("username", event.target.value)}
      />
      <label>Age (Years)</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={(event) => inputChangeHandler("age", event.target.value)}
      />
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default AddUser;
