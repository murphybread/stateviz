import React from "react";
import Comment from "./Comonent";

const comments = [

    {
        name: "Duggulas",
        comment: "I made JSON"
    },
    {
        name: "Duggulas",
        comment: "I think function is Scheme"
    },
    {
        name: "Duggulas",
        comment: "I think TS is not nessaary"
    },
    

    
]

function CommentList(props) {

    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
            

        </div>
    );
}

export default CommentList;