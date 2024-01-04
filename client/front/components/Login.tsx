import React, {ChangeEvent, useState} from "react";
import axios from "axios";
import {useTheme} from "styled-components";

interface LoginProps {
    setRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setRegister, onLoginSuccess }: LoginProps) => {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const tryLogin = async () => {
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:3000/auth/login", {
                email,
                password,
            });

            if (response.status !== 201) {
                setLoading(false);
                console.error("Login failed", response.data.message);
                return;
            }
            setLoading(false);
            return response.data;
        } catch (error) {
            setLoading(false);
            console.error("Login failed", error);
            alert("Login failed. Please check your credentials.");
        }
    }

    const handleLogin = async () => {
        setLoading(true);

        const data = await tryLogin();
        if (data === undefined) {return;}

        const access_token = data.token;
        const user_id = data.id;

        try {
            await localStorage.setItem('token', access_token);
            await localStorage.setItem('user_id', user_id.toString());
            onLoginSuccess();
        }
        catch (error) {
            console.error('Error: ', error);
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
                width: '300px',
                height: '300px',
                margin: '0 auto',
                padding: '20px',
                borderRadius: '10px',
                backgroundColor: theme.card,
            }}>
                <h1>
                    Login
                </h1>
                <label style={{marginBottom: '8px', display: 'block'}}>Email</label>
                <input
                    type="text"
                    placeholder={"Email..."}
                    value={email}
                    onChange={handleEmailChange}
                    style={{width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box', borderRadius: '5px', border: '0px', outline: 'none', backgroundColor: theme.lightBackground}}
                />

                <label style={{marginBottom: '8px', display: 'block'}}>Password</label>
                <input
                    type="password"
                    placeholder={"Password..."}
                    value={password}
                    onChange={handlePasswordChange}
                    style={{width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box', borderRadius: '5px', border: '0px', outline: 'none', backgroundColor: theme.lightBackground}}
                />

                <button
                    onClick={handleLogin}
                    disabled={loading}
                    style={{
                        width: '50%',
                        padding: '10px',
                        marginTop: '25px',
                        backgroundColor: theme.accent,
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
