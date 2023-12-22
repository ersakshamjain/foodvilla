import { useState } from "react";

const Profile = ({name})=>{
 const[count, setCount] =useState(0);



    return(
        <div>
        <h1>Profile Component</h1>
        <h2>Name: {name}</h2>
        <h2>Count1: {count}</h2>
        <button onClick={()=>{
            setCount(1)
        }}>setcount </button>
        </div>
    );
}


export default Profile;