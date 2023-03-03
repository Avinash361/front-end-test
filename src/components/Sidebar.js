import React, { useState } from 'react'
import '../Styles/sidebar.css'
import { NavLink } from 'react-router-dom'

function Sidebar({children}) {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path:"/",
            name:"Home",
            icon:<img src="./image/home.png" alt="" />,
        },
        {
            path:"/studentsdata",
            name:"Patient Diet",
            icon:<img src="./image/studentsdata.png" alt="" />,
        },
        {
            path:"/logout",
            name:"Logout",
            icon:<img src="./image/appsetting.png" alt="" />,
        },
    ]
  return (
    <div className='sidebar_container'>
    <div  style={{width: isOpen ? "300px" : "70px"}} className="sidebar">
      
        {
            menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassname="active">
                    <div className="icon"> {item.icon}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link-text">{item.name}</div>
                </NavLink>
            ))
        }
    </div>
    <main>{children}</main>
    </div>
  )
}

export default Sidebar