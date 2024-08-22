import React from "react";
import Book from "./Book";


function Library(props){

    return (
        <div>
            <Book title="React" numOfPage={100} />
            <Book title="Node" numOfPage={400} />
        </div>

    )

}

export default Library;