import { useState } from "react";
import "./App.css";
import Form from "./components/forms/Form";
import User from "./components/user-list/User";

const user = [
  {
    name: "Satya",
    age: 23,
  },
  {
    name: "katya",
    age: 22,
  },
];
function App() {
  const [userList,setUserList]=useState(user);
  function addUserHandler(data){
    console.log(data);
    setUserList((prevData)=>{
      return [data,...prevData];
    })
    console.log(userList);
  }
  console.log(userList);
  return (
    <>
      <Form onAddUser={addUserHandler} />
      <User  userData={userList} />
    </>
  );
}

export default App;
