import React, { useState } from "react";
import axios from "axios";

const Register = ({ setRegister }) => {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleRegister = async () => {
        setLoading(true);

        try {
            const response = await axios.post("https://localhost:8080/register", {
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
        <div style={{ textAlign: 'center', marginTop: '50px', transition: '0.5s' }}>
            <h1>Register</h1>

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

                <label style={{ marginBottom: '8px', display: 'block' }}>Confirm Password</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box' }}
                />

                <button
                    onClick={handleRegister}
                    style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Register
                </button>
            </div>

            <p style={{ marginTop: '10px' }}>
                Already have an account?{" "}
                <button onClick={() => setRegister(false)} style={{ border: 'none', color: '#28a745', background: 'none', cursor: 'pointer' }}>
                    Login
                </button>
            </p>
        </div>
    );
};

export default Register;
