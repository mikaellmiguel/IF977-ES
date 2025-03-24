import { Routes, Route, Navigate } from 'react-router-dom';
import {Homepage} from '../pages/Homepage';
import {CountryDetails} from '../pages/CountryDetails';
import {Favorites} from '../pages/Favorites';

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/login" element={<Navigate to="/"/>}/>
            <Route path="/country/:ccn3" element={<CountryDetails/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
    )
}