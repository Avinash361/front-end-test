import React from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Dialogs from '../components/Dialogs'
import Spineer from '../components/Spineer'
import { Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";

function Dashboard() {
  const state = useSelector((state) => state);

  return (
    <>
      <Sidebar>
        <Topbar />
        {state.error.flag && <div className="error-box"><Dialogs type={state.error.type} message={state.error.message} /></div>}
        {state.spineer.value && <Spineer />} 
        <Outlet />
      </Sidebar>
    </>
  )
}

export default Dashboard