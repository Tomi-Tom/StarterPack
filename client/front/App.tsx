import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Landing from "./pages/Landing";
import Library from "./pages/Library";
import Services from "./pages/Services";
import User from "./pages/User";
import LoginRegister from "./pages/LoginRegister";
import ThemeProvider from "./ThemeProvider";
import './styles.css';

const components: Record<string, React.ReactNode> = {
    landing: <Landing />,
    library: <Library />,
    services: <Services />,
    user: <User />,
};

const App: React.FC = () => {
    const [current, setCurrent] = useState("landing");
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(token !== null);
    }, []); // Run this effect only once when the component mounts

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('token');
    };

    return (
      <ThemeProvider>
          {isLoggedIn && <Sidebar setCurrent={setCurrent} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
          <div style={{ height: '100vh' }}>
              {!isLoggedIn ? (
                <LoginRegister onLoginSuccess={handleLogin}/>
              ) : (
                <div style={{ marginTop: '-40px' }}>
                    {React.cloneElement(components[current] as React.ReactElement, { sidebarOpen, setCurrent, handleLogout })}
                </div>
              )}
          </div>
      </ThemeProvider>
    );
};

export default App;
