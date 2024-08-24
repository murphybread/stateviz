import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";


const MAX_CAPACITY = 10;


function Accomodate() {
    const [isFUll, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);    


    useEffect(() => {
        console.log("====================");
        console.log("useEffect is called");
        console.log(`isfULL : ${isFUll}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current Count value: ${count}`);
        
    }, [count]);


    return (
        <div style ={{padding:16}}>
            <p>{`총 ${count} 명 수용`}</p>

            <button onClick={increaseCount} disabled={isFUll}>
                입장
            </button>
            <button onClick={decreaseCount} >
                퇴장
            </button>

            {isFUll && <p style ={{color:"red"}}>수용인원이 초과되었습니다.</p>}

            
        </div>

    );

}

export default Accomodate;


