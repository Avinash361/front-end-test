import './App.css'
import Login from './components/Login'
import Dashboard from "./pages/Dashboard";
import AuthRouteWrapper from '../src/route_Component/AuthRouteWrapper'
import Students from './pages/Students/Students';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import PageNotFound from './components/PageNotFound';
import Logout from './components/Logout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthRouteWrapper />}>
            <Route  element={<Dashboard />} >
            <Route path="/" element={<PageNotFound/>} />
            <Route path="/studentsdata" element={<Students/>} />
            <Route path="*" element={<PageNotFound/> } />
            <Route path='/logout' element={<Logout/>} />
            </Route>
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;
