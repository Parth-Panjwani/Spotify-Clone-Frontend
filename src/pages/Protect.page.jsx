import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "./components/Loader.comp";

function Protect(props) {
    let [Component, setComponent] = useState(Loader);
    let nativate = useNavigate();
    let location = useLocation(); 

    console.log(localStorage.getItem("email"), localStorage.getItem("password"));

    useEffect(function () {
        if ( localStorage.getItem("email") && localStorage.getItem("password") ) {
            var formdata = new FormData();

            formdata.append("email", localStorage.getItem("email"));
            formdata.append("password", localStorage.getItem("password"));

            var requestOptions = {
                method: "POST",
                body: formdata,
            };

            fetch("http://localhost:8080/api/validateuser", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    console.log(result);
                    if (result.value.status === "success") {
                        setComponent(props.Component);
                    } else {
                        localStorage.removeItem("email");
                        localStorage.removeItem("password");
                        nativate("/login");
                    }
                })
                .catch((error) => {
                    localStorage.removeItem("email");
                    localStorage.removeItem("password");
                    nativate("/login");
                });
            }
            else {
                localStorage.removeItem("email");
                localStorage.removeItem("password");
                nativate("/login");
            }
            
        }, []);

    return <>{Component}</>;
}

export default Protect;
