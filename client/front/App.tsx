import React, { useState } from 'react';

// Define a type for your styles
interface Styles {
    container: React.CSSProperties;
    input: React.CSSProperties;
    header: React.CSSProperties;
    footer: React.CSSProperties;
}

const App: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    // Define styles of type 'Styles'
    const styles: Styles = {
        container: {
            textAlign: 'center',
            marginTop: '50px',
        },
        input: {
            padding: '10px',
            fontSize: '16px',
            marginBottom: '20px',
        },
        header: {
            background: '#333',
            color: '#fff',
            padding: '20px',
            display: 'absolute',
            top: '0',
        },
        footer: {
            background: '#333',
            color: '#fff',
            padding: '10px',
            position: 'fixed',
            bottom: '0',
            width: '100%',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1>Starter Pack</h1>
            </div>
            <h2>Hello, {name}! Your email is {email}</h2>
            <h3>Your message is: {message}</h3>
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={({ target: { value } }) => {
                        setName(value);
                    }}
                    style={styles.input}
                    placeholder="Enter your name"
                />
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={({ target: { value } }) => {
                        setEmail(value);
                    }}
                    style={styles.input}
                    placeholder="Enter your email"
                />
            </div>
            <textarea
                name="message"
                id="message"
                value={message}
                onChange={({ target: { value } }) => {
                    setMessage(value);
                }}
                style={{ ...styles.input, height: '100px' }}
                placeholder="Enter your message"
            />
            <div style={styles.footer}>© 2023 My React App</div>
        </div>
    );
};

export default App;
