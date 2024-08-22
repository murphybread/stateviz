import React from "react";

function Book (props){

    return (
        <div>
            <h1>책 제목은 {props.title}</h1>
            <h2>책 페이지수는 {props.numOfPage}페이지 입니다</h2>
            
        </div>
    )


}

export default Book;