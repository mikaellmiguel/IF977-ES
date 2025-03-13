import { Routes, Route, Navigate } from 'react-router-dom';
import {Homepage} from '../pages/Homepage';
import {CountryDetails} from '../pages/CountryDetails';


export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/login" element={<Navigate to="/"/>}/>
            <Route path="/country/:ccn3" element={<CountryDetails/>}/>
        </Routes>
    )
}