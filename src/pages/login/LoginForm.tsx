import React, {useState} from 'react';
import { useNavigate } from "react-router-dom"

function LoginForm() {

    const [ id, setId ] = useState("");
    const [ password, setPassword ] = useState("");
    const navigate = useNavigate();

    const clickEvent = () => {
        console.log(`id: ${id}, password: ${password}`);
        setId("");
        setPassword("");

        setTimeout(() => {
            sessionStorage.setItem("isAuthorized", "true");
            navigate("/app");
        }, 3000);
    }

    return (
        <>
            <p>
                ID : <input placeholder="id" value={id} onChange={(event) => {
                    setId(event.target.value);
                }}/>
            </p>
            <p>
                PASSWORD : <input placeholder="password" value={password} onChange={(event) => {
                    setPassword(event.target.value);
                }}/>
            </p>
            <p>
                <button onClick={clickEvent}>
                    로그인
                </button>
            </p>
        </>
    )
}

export default LoginForm;