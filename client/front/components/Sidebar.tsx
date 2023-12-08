import React from "react";

interface Styles {
    sidebar: React.CSSProperties;
    sidebarContent: React.CSSProperties;
    mainContent: React.CSSProperties;
    toggleButton: React.CSSProperties;
    button: React.CSSProperties;
    bottomButton: React.CSSProperties;
    foldButton: React.CSSProperties;
}

const styles: Styles = {
    sidebar: {
        width: '250px',
        height: '100%',
        background: '#333',
        color: '#fff',
        position: 'fixed',
        left: 0,
        top: 0,
        overflowX: 'hidden',
        transition: '0.5s',
        padding: '20px',
        boxSizing: 'border-box',
        zIndex: 1,
    },
    sidebarContent: {
        transition: '0.5s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    mainContent: {
        marginLeft: '250px',
        transition: '0.5s',
        padding: '20px',
        boxSizing: 'border-box',
    },
    toggleButton: {
        transition: '0.5s',
        position: 'fixed',
        left: '10px',
        top: '10px',
        cursor: 'pointer',
        fontSize: '1.5rem',
    },
    button: {
        transition: '0.5s',
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        marginBottom: '20px',
        border: 'none',
        borderRadius: '5px',
        background: '#555',
        color: '#fff',
        cursor: 'pointer',
    },
    bottomButton: {
        transition: '0.5s',
        width: '50%',
        position: 'absolute',
        bottom: 0,
        padding: '10px',
        fontSize: '16px',
        marginBottom: '20px',
        border: 'none',
        borderRadius: '5px',
        background: '#555',
        color: '#fff',
        cursor: 'pointer',
    },
    foldButton: {
        transition: '0.5s',
        padding: '10px',
        fontSize: '16px',
        marginBottom: '20px',
        border: 'none',
        borderRadius: '5px',
        background: '#555',
        color: '#fff',
        cursor: 'pointer',
        width: '40px',
    },
};

interface SidebarProps {
    setCurrent: React.Dispatch<React.SetStateAction<string>>;
    sidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setCurrent, sidebarOpen, setSidebarOpen }) => {
    const toggleSidebar = () => {
        setSidebarOpen((prevSidebarOpen) => !prevSidebarOpen);
    };

    return (
        <>
            <div style={{ ...styles.sidebar, width: sidebarOpen ? '250px' : '80px' }}>
                <div style={styles.sidebarContent}>
                    <button style={styles.foldButton} onClick={toggleSidebar}>{sidebarOpen ? "<" : ">"}</button>
                    <h1>
                        {sidebarOpen ? (
                            <>
                                Starter <br /> Pack
                            </>
                        ) : (
                            <>
                                S <br /> P
                            </>
                        )}
                    </h1>
                    <button style={styles.button} onClick={() => setCurrent("landing")}>{sidebarOpen ? "Home" : "H"}</button>
                    <button style={styles.button} onClick={() => setCurrent("browser")}>{sidebarOpen ? "Browser" : "B"}</button>
                    <button style={styles.button} onClick={() => setCurrent("library")}>{sidebarOpen ? "Library" : "L"}</button>
                    <button style={styles.button} onClick={() => setCurrent("services")}>{sidebarOpen ? "Services" : "S"}</button>
                    <button style={styles.bottomButton} onClick={() => setCurrent("user")}>{sidebarOpen ? "User" : "U"}</button>
                </div>
            </div>
            <div style={styles.mainContent}>
                <div onClick={toggleSidebar} style={styles.toggleButton}>
                    &#9654;
                </div>
            </div>
        </>
    );
};

export default Sidebar;
