import { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const submitHandler = (userName, age) => {
    console.log("Called App.submitHandler");
    setUsersList((prevList) => {
      return [...prevList, { name: userName, age: age, id: Math.random() }];
    });
    console.log(usersList);
  };

  return (
    <div>
      <AddUser onSubmit={submitHandler} />
      {usersList.length > 0 && <UsersList list={usersList} />}
    </div>
  );
}

export default App;
