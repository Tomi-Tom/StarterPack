import React from "react";
import Login from "../components/Login";

const Register = ({ setRegister }) => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px', transition: '0.5s' }}>
            <h1>Register</h1>
            <button onClick={() => setRegister(false)}>Login</button>
        </div>
    );
};

const LoginRegister = () => {
    const [register, setRegister] = React.useState(false);

    return (
        <div>
            {
                register ?
                    <Register setRegister={setRegister} /> :
                    <Login setRegister={setRegister} />
            }
        </div>
    );
};

export default LoginRegister;
