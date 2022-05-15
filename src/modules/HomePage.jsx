import { useState } from "react";

export default function HomePage({updateLogInStatus, updateUserInfo}) {
    const [name, setName] = useState('anonymous');

    function handleClick(event) {
        event.preventDefault();
        updateLogInStatus("ShopPage");
        updateUserInfo(name);
    }

    function handleChange(event) {
        setName(event.target.value)
        console.log(setName)
    }
    

    return (
        <>
            <form>
                <input type="text" placeholder="Name" onChange={handleChange}></input>
                <button onClick={handleClick}>Log In</button>
            </form>
        </>
    )
}