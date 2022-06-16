/*import {React} from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Events from "./pages/Events";
import Venues from "./pages/Venues";
import EventDetails from './components/EventDetails';
import "./App.css";
import About from './pages/About';
import Login from './pages/admin/Login';

const Routing=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Events />}/> 
                <Route path="events" element={<Events />}>
                    <Route path="events/:event" element={<EventDetails/>}/>
                </Route>
                <Route path="venues" element={<Venues />} />
                <Route path="about" element={<About />} />
                <Route path='admin/login' element={<Login/>}/>
                <Route
                    path="*"
                    element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}
export default Routing;*/ 