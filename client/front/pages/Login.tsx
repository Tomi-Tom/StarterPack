import React from "react";

const Login = () => {
    const [register, setRegister] = React.useState(false);

    return (
        register ?
            <div style={{ textAlign: 'center', marginTop: '50px', transition: '0.5s' }}>
                <h1>Register</h1>
                <button onClick={() => setRegister(false)}>Login</button>
            </div> :
        <div style={{ textAlign: 'center', marginTop: '50px', transition: '0.5s' }}>
            <h1>Login</h1>
            <button onClick={() => setRegister(true)}>Register</button>
        </div>
    );
};

export default Login;
