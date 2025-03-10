import {Routes, Route} from "react-router-dom"

import {SignIn} from "../pages/SignIn";
import {SignUp} from "../pages/SignUp";
import {LandingPage} from "../pages/LandingPage";

export function AuthRoutes () {
    return(
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<SignIn/>}/>
            <Route path="/register" element={<SignUp/>}/>
        </Routes>
    )
}
