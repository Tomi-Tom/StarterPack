import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Landing from "./pages/Landing";
import Library from "./pages/Library";
import Browser from "./pages/Browser";
import Services from "./pages/Services";
import User from "./pages/User";
import Login from "./pages/Login";
import Register from "./pages/Register";

interface Styles {
    container: React.CSSProperties;
}

const styles: Styles = {
    container: {
        textAlign: 'center',
        marginTop: '150px',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

const componentsMap: Record<string, JSX.Element> = {
    landing: <Landing  sidebarOpen/>,
    library: <Library sidebarOpen/>,
    browser: <Browser sidebarOpen/>,
    services: <Services sidebarOpen/>,
    user: <User sidebarOpen/>,
};

const App: React.FC = () => {
    const [current, setCurrent] = useState("landing");
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

    return (
        !isLoggedIn ?
            <Login /> :
            <div style={styles.container}>
                <Sidebar setCurrent={setCurrent} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                {React.cloneElement(componentsMap[current] as React.ReactElement, { sidebarOpen })}
            </div>
    );
};

export default App;
