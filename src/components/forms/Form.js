import React, { useState } from "react";

const Form = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const saveHandler=(e) => {
    e.preventDefault();
    const data={
        name:userName,
        age:Number(userAge),
    }
    props.onAddUser(data)
  }
  return (
    <div>
      <form>
        <label>Username</label>
        <input
          type="text"
          value={userName}
          onChange={(f) => setUserName(f.target.value)}
        ></input>
        <label>Age</label>
        <input
          type="number"
          value={userAge}
          onChange={(e) => setUserAge(e.target.value)}
        ></input>
        <button
          type="submit"
          onClick={saveHandler}
        >
          Add User
        </button>
      </form>
    </div>
  );
};
export default Form;
