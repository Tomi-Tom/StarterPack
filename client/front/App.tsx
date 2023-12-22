import React, {useState} from "react";
import Sidebar from "./components/Sidebar";
import Landing from "./pages/Landing";
import Library from "./pages/Library";
import Browser from "./pages/Browser";
import Services from "./pages/Services";
import User from "./pages/User";
import LoginRegister from "./pages/LoginRegister";
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
                <div>
                    {!isLoggedIn ? (
                        <LoginRegister />
                    ) : (
                        <div>
                            {React.cloneElement(components[current] as React.ReactElement, { sidebarOpen })}
                        </div>
                    )}
                </div>
        </ThemeProvider>
    );
};

export default App;