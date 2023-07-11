import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import LogoGreen from "./images/spotify-logo-green.png"

function Loading(){

    const navigate = useNavigate();
    
    useEffect(function(){
        setTimeout( function(){
            navigate("/login");
        }, 2000);
        window.scrollTo(0, 200);
    }, [navigate])

    return (
        <div className="flex items-center justify-center w-screen h-screen overflow-hidden bg-black" >
            <img src={LogoGreen} alt="" className="w-[200px] md:w-[400px]" />
        </div>
    )
}

export default Loading;