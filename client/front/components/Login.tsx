import React, {ChangeEvent, useState} from "react";
import axios from "axios";
import {useTheme} from "styled-components";

interface LoginProps {
    setRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setRegister }: LoginProps) => {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
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
        <div style={{
            textAlign: 'center',
            transition: '0.5s',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            width: '100vw',
            height: '100vh',
            background: theme.background,
            color: theme.text,
        }}>
            <div style={{
                width: '350px',
                height: '400px',
                margin: '0 auto',
                padding: '20px',
                borderRadius: '10px',
                backgroundColor: theme.card,
            }}>
                <h1>
                    Login
                </h1>
                <label style={{marginBottom: '8px', display: 'block'}}>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    style={{width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box'}}
                />

                <label style={{marginBottom: '8px', display: 'block'}}>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    style={{width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box'}}
                />

                <button
                    onClick={handleLogin}
                    disabled={loading}
                    style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        opacity: loading ? 0.7 : 1,
                    }}
                >
                    {loading ? 'Login...' : 'Login'}
                </button>
            </div>

            <p style={{marginTop: '10px'}}>
                Don't have an account?{" "}
                <button onClick={() => setRegister(true)}
                        style={{border: 'none', color: '#007BFF', background: 'none', cursor: 'pointer'}}>
                    Register
                </button>
            </p>
        </div>
    );
};

export default Login;
