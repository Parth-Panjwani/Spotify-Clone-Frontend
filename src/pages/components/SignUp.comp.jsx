import { NavLink } from "react-router-dom";

function SignUp() {
    return (
        <div className="flex flex-col items-center w-[100%]">
            <div className="flex gap-5 my-8 md:gap-8">
                <NavLink
                    to="/login"
                    className={`pb-[2px] px-[1px] text-sm  text-white border-b-2 active:border-white border-transparent `}
                >
                    LOGIN
                </NavLink>
                <NavLink
                    to="/signup"
                    className={`pb-[2px] px-[1px] text-sm  text-white border-b-2 active:border-white border-primary`}
                >
                    SIGN UP
                </NavLink>
            </div>
            <div className="flex flex-col gap-5 w-[80%] max-w-[300px]">
                <input
                    type="text"
                    className="py-1.5 px-4 rounded-full outline-none w-[100%]"
                    name=""
                    placeholder="First Name"
                    id=""
                />
                <input
                    type="text"
                    className="py-1.5 px-4 rounded-full outline-none w-[100%]"
                    name=""
                    placeholder="Last Name"
                    id=""
                />
                <input
                    type="text"
                    className="py-1.5 px-4 rounded-full outline-none w-[100%]"
                    name=""
                    placeholder="Email Address"
                    id=""
                />
                <input
                    type="password"
                    className="py-1.5 px-4 rounded-full outline-none"
                    name=""
                    placeholder="Create Password"
                    id=""
                />
                <div className="flex gap-2 pl-4">
                    {" "}
                    <input type="checkbox" name="" id="signed-in" />
                    <label htmlFor="signed-in" className="text-white">
                        Accept terms and conditions
                    </label>
                </div>
                <NavLink
                    to="/verify"
                    className="py-1.5 px-4 rounded-full bg-primary shadow-md text-white font-semibold shadow-gray-900 active:bg-green-600 text-center"
                >
                    {" "}
                    CREATE ACCOUNT{" "}
                </NavLink>
            </div>
        </div>
    );
}

export default SignUp;
