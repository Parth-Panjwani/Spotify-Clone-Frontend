import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar.comp";

function Dashboard (){
    return (
        <div className="flex w-screen h-[100vh] bg-secondary" >
            <NavBar></NavBar>
            <Outlet />
        </div>
    )
}

export default Dashboard;