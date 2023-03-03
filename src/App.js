import './App.css'
import Login from '../src/pages/Login/Login'
import Dashboard from "./pages/Dashboard";
import AuthRouteWrapper from '../src/route_Component/AuthRouteWrapper'
import Students from './pages/Students/Students';

import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import PageNotFound from './components/PageNotFound';
import Logout from './components/Logout';

function App() {
  return (
    <>
      <HashRouter>
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
      </HashRouter>
    
    </>


  );
}

export default App;
