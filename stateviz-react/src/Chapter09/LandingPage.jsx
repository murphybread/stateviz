import React , {useState} from "react";
import ToolBar from "./ToolBar";

function LandingPage(props) {
    const [isLoggedin, setIsLoggedin] = useState(false);  

    const onClickLogin = () => {
        setIsLoggedin(true);
    };
    
    const onClickLogout = () => {
        setIsLoggedin(false);
    }

    return (
        <div>
            <ToolBar
                isLoggedin={isLoggedin}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            
            />

            <div style = {{padding: 16}}> 리액트공부</div>
        </div>
    );
}

export default LandingPage;