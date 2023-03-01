import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

function Protected() {
   
    const navigate = useNavigate();

    useEffect(() => {
        let username = localStorage.getItem("username");
        if (username!=="avinash.jha@wisdmlabs.com") 
            navigate('/login')
    }, [])
    return (
        <Outlet />
    )
}

export default Protected