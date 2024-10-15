import React from 'react'
import UserContext from "../Context/UserContext"
import { useState, useContext } from 'react'

function Login() {
    const [username, setUsername] = useState("")
    const [PassWord, setpassword] = useState("");

    // const { setUser } = useContext(UserContext);
    const { setUser } = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, PassWord })


    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="Username" />
            {" "}
            <input type="text"
                value={PassWord}
                onChange={(e) => setpassword(e.target.value)} name="PassWord" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
