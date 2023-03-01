import React from 'react'
import '../Styles/topbar.css'

function Topbar() {
    return (
        <>
            <div className="topnav">
                <div className='admin row'>
                    <div className='col'>
                        <img src="/image/AdminLogo.jpg" alt="admin" />
                    </div>
                    <div className='col'>
                        <span className='text1'>Welcome</span><br />
                        <span className='text2'>Avinash</span>
                    </div>
                </div>
                <a href="#home"><i className='fa fa-bell'></i></a>
            </div>
        </>
)}

export default Topbar