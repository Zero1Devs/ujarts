import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Events from "./pages/Events";
import Venues from "./pages/Venues";
import EventDetails from './pages/EventDetails';

import About from './pages/About';
import Login from './pages/admin/Login';
import NotFound from './pages/NotFound';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/"  element={<Events />}/> 
        <Route path="events" element={<Events />}/>
        <Route path="events/:event" element={<EventDetails/>}/>
        <Route path="venues" element={<Venues />} />
        <Route path="about" element={<About />} />
        <Route path='admin/login' element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
