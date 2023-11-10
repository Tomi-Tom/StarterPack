import Sidebar from "./components/Sidebar";
import React from "react";

// Define a type for your styles
interface Styles {
    container: React.CSSProperties;
    input: React.CSSProperties;
}

const styles: Styles = {
    container: {
        textAlign: 'center',
        marginTop: '150px',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

const App: React.FC = () => {
    return (
        <div style={styles.container}>
            <Sidebar />
        </div>
    );
};

export default App;
