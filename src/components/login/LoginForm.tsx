import React, {useState} from 'react';

interface IProps {
    readonly onClickLogin: (id: string, password: string) => void;
}


function LoginForm(props: IProps) {

    const [ id, setId ] = useState("");
    const [ password, setPassword ] = useState("");

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
                <button onClick={() => {
                    setId("");
                    setPassword("");
                    props.onClickLogin(id, password);
                }}>
                    로그인
                </button>
            </p>
        </>
    )
}

export default LoginForm;