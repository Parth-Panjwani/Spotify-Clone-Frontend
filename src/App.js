import "./tailwind.css";
import { Routes, Route } from "react-router-dom";
import { createContext } from "react";

import Splash from "./pages/Splash.page";

import AuthWrapper from "./pages/AuthWrapper.page";
import Login from "./pages/components/Login.comp";
import SignUp from "./pages/components/SignUp.comp";
import Verify from "./pages/components/Verify.comp";

import Dashboard from "./pages/Dashboard.page";
import Protect from "./pages/Protect.page";
import Home from "./pages/Home.page";
import Search from "./pages/Search.page";
import YourLibrary from "./pages/YourLibrary.page";
import PageNotFound from "./pages/PageNotFound.page";

import useAlert from "./hooks/useAlert.hook";

// IF WE REFRESH PAGE IT RE-INITIALIZATION THE 'GlobalData' OBJECT 
let GlobalContext = createContext();
let GlobalData = {
    author: "viral gajera",
};

function App() {
    let { AlertComponent } = useAlert();
    return (
        <div className="app" >
            <GlobalContext.Provider value={GlobalData}>
                <Routes>
                    <Route path="/" element={<Splash />} />
                    <Route element={<AuthWrapper />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/verify" element={<Verify />} />
                    </Route>
                    <Route path="/dashboard" element={ <Protect Component={Dashboard} /> }>
                        <Route path="home" element={<Home />} />
                        <Route path="search" element={<Search />} />
                        <Route path="yourlibrary" element={<YourLibrary />} />
                    </Route>
                    <Route path="/*" element={<PageNotFound />} />
                </Routes>
            </GlobalContext.Provider>
            <AlertComponent/>
        </div>
    );
}

export default App;
export { GlobalContext };
