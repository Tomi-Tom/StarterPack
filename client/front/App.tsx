import React, {useEffect, useState} from "react";
import Sidebar from "./components/Sidebar";
import Landing from "./pages/Landing";
import Library from "./pages/Library";
import Browser from "./pages/Browser";
import Services from "./pages/Services";
import User from "./pages/User";
import Login from "./pages/Login";
import ThemeProvider from "./ThemeProvider";
import './styles.css';

const components: Record<string, JSX.Element> = {
    landing: <Landing sidebarOpen />,
    library: <Library sidebarOpen />,
    browser: <Browser sidebarOpen />,
    services: <Services sidebarOpen />,
    user: <User sidebarOpen />,
};

const App: React.FC = () => {
    const [current, setCurrent] = useState("landing");
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
            setTheme(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    if (localStorage.getItem("token")) {
        setIsLoggedIn(true);
    }

    return (
        <ThemeProvider theme={theme}>
            <div style={{ height: '100vh', overflow: 'hidden' }}>
                <Sidebar setCurrent={setCurrent} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div>
                    {!isLoggedIn ? (
                        <Login />
                    ) : (
                        <div>
                            {React.cloneElement(components[current] as React.ReactElement, { sidebarOpen })}
                        </div>
                    )}
                </div>
                <button onClick={toggleTheme} style={{ position: 'fixed', bottom: '20px', left: '20px', padding: '10px', fontSize: '16px' }}>
                    Switch Theme
                </button>
            </div>
        </ThemeProvider>
    );
};

export default App;