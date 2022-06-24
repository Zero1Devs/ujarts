import './App.css';
import { Route, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import Events from "./pages/Events";
import Venues from "./pages/Venues";
import EventDetails from './pages/EventDetails';
import Booking from './pages/Booking';
import About from './pages/About';
import Login from './pages/admin/Login';
import NotFound from './pages/NotFound';
import SupaTest from './SupaTest';
import Register from './pages/admin/Register';
import Index from './pages/admin';
import { Navigation } from './stores/navigationStore';
import { observer } from 'mobx-react-lite';


const App=observer(()=> {
  const {history}=Navigation;
  return (
    <HistoryRouter history={history}>
    
      <Routes>
      <Route path="/"  element={<Events />}/> 
      <Route path="supatest"  element={<SupaTest />}/> 
      <Route path="events" element={<Events />}/>
      <Route path="events/:event" element={<EventDetails/>}/>
      <Route path="booking/:event" element={<Booking/>}/>
      <Route path="venues" element={<Venues />} />
      <Route path="about" element={<About />} />
      <Route path='admin/login' element={<Login/>}/>
      <Route path='admin/register' element={<Register/>}/>
      <Route path='admin/index' element={<Index/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
  </HistoryRouter>
    
  );
})

/*
    <Router history={history}>
        <Route path="/"  element={<Events />}/> 
        <Route path="supatest"  element={<SupaTest />}/> 
        <Route path="events" element={<Events />}/>
        <Route path="events/:event" element={<EventDetails/>}/>
        <Route path="booking/:event" element={<Booking/>}/>
        <Route path="venues" element={<Venues />} />
        <Route path="about" element={<About />} />
        <Route path='admin/login' element={<Login/>}/>
        <Route path='admin/register' element={<Register/>}/>
        <Route path='admin/index' element={<Index/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Router>
 */

export default App;
