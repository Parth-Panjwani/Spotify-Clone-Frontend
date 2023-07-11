import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAlert from "../../hooks/useAlert.hook";

function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [stayLoggedIn, setStayLoggedIn] = useState(false);

    let navigate = useNavigate();
    let { ShowAlert } = useAlert();

    console.log(
        localStorage.getItem("email"),
        localStorage.getItem("password")
    );

    useEffect(
        function () {
            if (
                localStorage.getItem("email") &&
                localStorage.getItem("password")
            ) {
                navigate("/dashboard/home");
            }
        },
        [navigate]
    );

    function loginHandler() {
        var formdata = new FormData();

        formdata.append("email", email);
        formdata.append("password", password);

        var requestOptions = {
            method: "POST",
            body: formdata,
        };

        fetch("http://localhost:8080/api/validateuser", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.value.status === "success") {
                    localStorage.setItem("email", result.value.email);
                    localStorage.setItem("password", result.value.password);

                    if (stayLoggedIn) {
                        // setTimeout() NOT WORKING
                        // BECAUSE AFTER CLOSING TAB | BROWSER, setTimeout() NEVER FIRES
                        // setTimeout(function () {
                        //     localStorage.removeItem("email");
                        //     localStorage.removeItem("password");
                        // }, 1000 * 60 * 60);
                    } else {
                        window.addEventListener("beforeunload", function () {
                            localStorage.removeItem("email");
                            localStorage.removeItem("password");
                        });
                    }
                    navigate("/dashboard/home");
                } else {
                    ShowAlert("Invalid Credentials");
                }
            })
            .catch((error) => {
                ShowAlert("Login Failed");
            });
    }

    return (
        <div className="flex flex-col items-center w-[100%]">
            <div className="flex gap-5 my-8 md:gap-8">
                <NavLink
                    to="/login"
                    className={`pb-[2px] px-[1px] text-sm  text-white border-b-2 active:border-white border-primary`}
                >
                    LOGIN
                </NavLink>
                <NavLink
                    to="/signup"
                    className={`pb-[2px] px-[1px] text-sm  text-white border-b-2 active:border-white border-transparent`}
                >
                    SIGN UP
                </NavLink>
            </div>
            <div className="flex flex-col gap-7 w-[80%] max-w-[300px]">
                <input
                    type="email"
                    className="py-1.5 px-4 rounded-full outline-none w-[100%]"
                    name=""
                    placeholder="Email Address"
                    id=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    className="py-1.5 px-4 rounded-full outline-none"
                    name=""
                    placeholder="Password"
                    id=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex gap-2 pl-4">
                    {" "}
                    <input
                        type="checkbox"
                        name=""
                        id="signed-in"
                        onChange={(e) => setStayLoggedIn(e.target.checked)}
                    />
                    <label htmlFor="signed-in" className="text-white">
                        Stay signed in
                    </label>
                </div>
                <NavLink
                    onClick={loginHandler}
                    className="py-1.5 px-4 rounded-full bg-primary shadow-md text-white font-semibold shadow-gray-900 active:bg-green-600 text-center"
                >
                    {" "}
                    LOGIN{" "}
                </NavLink>
            </div>
        </div>
    );
}

export default Login;
