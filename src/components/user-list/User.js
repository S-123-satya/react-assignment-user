import React from "react";
import UserData from "./UserData";
const User = ({ userData }) => {
    console.log(userData);
  return (
    <div>
      {userData.map((user, i) => <UserData key={i} data={user} />)}
    </div>
  );
};
export default User;
