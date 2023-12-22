import React, {useState} from "react";
import Sidebar from "./components/Sidebar";
import Landing from "./pages/Landing";
import Library from "./pages/Library";
import Services from "./pages/Services";
import User from "./pages/User";
import LoginRegister from "./pages/LoginRegister";
import ThemeProvider from "./ThemeProvider";
import './styles.css';

const components: Record<string, React.ReactNode> = {
    landing: <Landing sidebarOpen setCurrent/>,
    library: <Library sidebarOpen />,
    services: <Services sidebarOpen />,
    user: <User sidebarOpen />,
};

const App: React.FC = () => {
    const [current, setCurrent] = useState("landing");
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

    if (localStorage.getItem("token")) {
        setIsLoggedIn(true);
    }

    return (
        <ThemeProvider>
                {
                    isLoggedIn ?
                        <Sidebar setCurrent={setCurrent} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> :
                        <></>
                }
                <div style={{ height: '100vh' }}>
                    {!isLoggedIn ? (
                        <LoginRegister />
                    ) : (
                        <div style={{ marginTop: '-40px' }}>
                            {React.cloneElement(components[current] as React.ReactElement, { sidebarOpen, setCurrent })}
                        </div>
                    )}
                </div>
        </ThemeProvider>
    );
};

export default App;