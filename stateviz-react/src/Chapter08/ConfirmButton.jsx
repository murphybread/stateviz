import  React, {useState} from "react";  


function ConfirmButton() {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((previousConfirmed) => !previousConfirmed);
    };

    return (
        <div>
            <button onClick={handleConfirm} disabled={isConfirmed}>
                {isConfirmed ? "확인됨" : "미확인"}
            </button>
        </div>
    );
}

export default ConfirmButton;