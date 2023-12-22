import React, {ChangeEvent, useState} from "react";
import axios from "axios";
import {useTheme} from "styled-components";

interface RegisterProps {
    setRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

const Register = ({ setRegister }: RegisterProps) => {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };


    const handleRegister = async () => {
        setLoading(true);

        try {
            const response = await axios.post("https://localhost:8080/auth/register", {
                username,
                password,
                confirmPassword,
            });

            setTimeout(() => {
                setLoading(false);
                console.log("Registration successful", response.data);
            }, 2000);
        } catch (error) {
            setLoading(false);
            console.error("Registration failed", error);
            alert("Registration failed. Please check your information and try again.");
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
                height: '385px',
                margin: '0 auto',
                padding: '20px',
                borderRadius: '10px',
                backgroundColor: theme.card,
            }}>
                <h1>Register</h1>
                <label style={{marginBottom: '8px', display: 'block'}}>Username</label>
                <input
                    type="text"
                    placeholder={"Username..."}
                    value={username}
                    onChange={handleUsernameChange}
                    style={{width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box', borderRadius: '5px', border: '0px', outline: 'none', backgroundColor: theme.lightBackground}}
                />

                <label style={{marginBottom: '8px', display: 'block'}}>Password</label>
                <input
                    type="password"
                    placeholder={"Password..."}
                    value={password}
                    onChange={handlePasswordChange}
                    style={{width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box', borderRadius: '5px', border: '0px', outline: 'none', backgroundColor: theme.lightBackground,}}
                />

                <label style={{marginBottom: '8px', display: 'block'}}>Confirm Password</label>
                <input
                    type="password"
                    placeholder={"Confirm Password..."}
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    style={{
                        width: '100%',
                        padding: '8px',
                        marginBottom: '16px',
                        boxSizing: 'border-box',
                        borderRadius: '5px',
                        border: '0px',
                        outline: confirmPassword === password ? 'none' : `solid 3px ${theme.error}`,
                        backgroundColor: theme.lightBackground,
                    }}/>

                <button
                    onClick={handleRegister}
                    disabled={loading}
                    style={{
                        width: '50%',
                        padding: '10px',
                        marginTop: '25px',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        opacity: loading ? 0.7 : 1,
                    }}
                >
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </div>

            <p style={{marginTop: '10px'}}>
                Already have an account?{" "}
                <button onClick={() => setRegister(false)}
                        style={{border: 'none', color: '#28a745', background: 'none', cursor: 'pointer'}}>
                    Login
                </button>
            </p>
        </div>
    );
};

export default Register;
