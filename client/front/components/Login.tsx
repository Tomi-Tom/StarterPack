import React, { useState } from "react";
import axios from "axios";

const Login = ({ setRegister }) => {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        setLoading(true);

        try {
            const response = await axios.post("https://localhost:8080/login", {
                username,
                password,
            });

            setTimeout(() => {
                setLoading(false);
                console.log("Login successful", response.data);
            }, 2000);
        } catch (error) {
            setLoading(false);
            console.error("Login failed", error);
            alert("Login failed. Please check your credentials.");
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', transition: '0.5s', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
            <h1>Login</h1>

            <div style={{ maxWidth: '300px', margin: '0 auto' }}>
                <label style={{ marginBottom: '8px', display: 'block' }}>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box' }}
                />

                <label style={{ marginBottom: '8px', display: 'block' }}>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box' }}
                />

                <button
                    onClick={handleLogin}
                    style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Log in
                </button>
            </div>

            <p style={{ marginTop: '10px' }}>
                Don't have an account?{" "}
                <button onClick={() => setRegister(true)} style={{ border: 'none', color: '#007BFF', background: 'none', cursor: 'pointer' }}>
                    Register
                </button>
            </p>
        </div>
    );
};

export default Login;
