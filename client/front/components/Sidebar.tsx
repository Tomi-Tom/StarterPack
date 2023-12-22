import React from "react";
import {useTheme} from "styled-components";

interface SidebarProps {
    setCurrent: React.Dispatch<React.SetStateAction<string>>;
    sidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SidebarButtonProps {
    onClick: () => void;
    label: string;
    sidebarOpen: boolean;
}

const SidebarButton = ({ onClick, label, sidebarOpen }: SidebarButtonProps) => {
    const theme = useTheme();
    return (
        <button style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            marginBottom: '20px',
            border: 'none',
            borderRadius: '5px',
            background: theme.card,
            color: theme.text,
            cursor: 'pointer',
        }} onClick={onClick}>
            {sidebarOpen ? label : label.charAt(0)}
        </button>
    );
};

const Sidebar: React.FC<SidebarProps> = ({ setCurrent, sidebarOpen, setSidebarOpen}) => {
    const theme = useTheme();
    const toggleSidebar = () => {
        setSidebarOpen((prevSidebarOpen) => !prevSidebarOpen);
    };

    return (
        <>
            <div style={{
                width: sidebarOpen ? '250px' : '80px',
                height: '100vh',
                background: theme.backgroundSecondary,
                color: theme.text,
                position: 'fixed',
                left: 0,
                overflowX: 'hidden',
                padding: '20px 20px 0 20px',
                boxSizing: 'border-box',
                zIndex: 1,
            }}>
                <div style={{
                    transition: '0.5s',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <button style={{
                        transition: '0.5s',
                        padding: '5px',
                        width: '30px',
                        fontSize: '15px',
                        border: 'none',
                        borderRadius: '5px 0 0 5px',
                        background: theme.card,
                        color: theme.text,
                        cursor: 'pointer',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }} onClick={toggleSidebar}>{sidebarOpen ? "<" : ">"}</button>
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
                    <SidebarButton onClick={() => setCurrent("landing")} label="Home" sidebarOpen={sidebarOpen} />
                    <SidebarButton onClick={() => setCurrent("library")} label="Library" sidebarOpen={sidebarOpen} />
                    <SidebarButton onClick={() => setCurrent("services")} label="Services" sidebarOpen={sidebarOpen} />
                    <button style={{
                        transition: '0.5s',
                        width: '50%',
                        position: 'absolute',
                        bottom: 0,
                        padding: '10px',
                        fontSize: '16px',
                        marginBottom: '20px',
                        border: 'none',
                        borderRadius: '5px',
                        background: theme.accent,
                        color: theme.text,
                        cursor: 'pointer',
                    }} onClick={() => setCurrent("user")}>{sidebarOpen ? "User" : "U"}</button>
                </div>
            </div>
            <div style={{
                marginLeft: sidebarOpen ? '250px' : '80px',
                transition: '0.5s',
                padding: '20px',
                boxSizing: 'border-box',
            }}>
                <div onClick={toggleSidebar} style={{
                    transition: '0.5s',
                    position: 'fixed',
                    left: '10px',
                    top: '10px',
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                }}>
                    &#9654;
                </div>
            </div>
        </>
    );
};

export default Sidebar;
