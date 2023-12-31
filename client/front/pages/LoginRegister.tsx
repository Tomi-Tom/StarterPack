import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginRegister = (props) => {
    const [register, setRegister] = React.useState(false);

    return (
        <div>
            {
                register ?
                    <Register setRegister={setRegister} /> :
                    <Login setRegister={setRegister} onLoginSuccess={props.onLoginSuccess} />
            }
        </div>
    );
};

export default LoginRegister;
