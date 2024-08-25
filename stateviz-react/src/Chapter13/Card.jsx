import { Children } from "react";

function Card(props){

    const { title, background, children } = props;

    return (
        <div
            style={{
                backgroundColor: background,
                width: "300px",
                height: "300px",
                padding: "10px",
                margin: "10px",
            }}
        >
            {title && <h1>{title}</h1>}
            {children}
        </div>



    );

}

export default Card;