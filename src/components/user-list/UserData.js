import React from "react";

const UserData= ({data})=>{
    console.log(data);
    return (
        <div>
            <span> {data.name} </span>
            (<span> {data.age} years old</span>)
        </div>
    )
}
export default UserData;