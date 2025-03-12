import { Routes, Route, Navigate } from 'react-router-dom';
import {Homepage} from '../pages/Homepage';


export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/login" element={<Navigate to="/"/>}/>
        </Routes>
    )
}