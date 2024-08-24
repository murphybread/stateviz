import React from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid #e9e9e9",
    },

    greeting : {
        marginRight: 16,
    }

}

function ToolBar(props){
    const { isLoggedin, onClickLogin, onClickLogout} = props;

    return (
        <div style={styles.wrapper}>
            {isLoggedin && <span style={styles.greeting}>안녕하세요!</span>}

            {isLoggedin ? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={onClickLogin}>로그인</button>
            )}
            
        </div>
    )

}

export default ToolBar;