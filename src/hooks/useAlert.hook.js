import { useState } from "react";

let display, setDisplay;
let message, setMessage;

function AlertComponent() {
    [display, setDisplay] = useState(false);
    [message, setMessage] = useState("");
    return (
        <div
            className={`w-screen h-screen bg-[rgba(0,0,0,0.5)] backdrop-blur-md absolute left-0 top-0 z-10 justify-center items-center ${
                display ? "flex" : "hidden"
            }`}
        >
            <div className="bg-white w-[300px] py-10 rounded-md shadow-lg flex justify-center items-center flex-col gap-5">
                <h1 className="font-bold max-w-[80%] text-center">{message}</h1>
                <button
                    className="py-2 font-bold text-white rounded-full shadow-sm px-7 bg-primary active:bg-green-600 shadow-gray-900"
                    onClick={(e) => {
                        setDisplay(false);
                    }}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

function ShowAlert(message) {
    setDisplay(true);
    setMessage(message);
}

function useAlert() {
    return {
        AlertComponent,
        ShowAlert,
    };
}

export default useAlert;
