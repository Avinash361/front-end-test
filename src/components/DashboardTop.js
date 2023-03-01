import React from 'react'
import '../Styles/dasboardtop.css'
function DashboardTop(props) {
    return (
        <>
            <div className="dashboardtop col-12">
                <div className='font-weight-bold text1'>{props.Heading}</div>
                <div className='text-muted text2'>Dashboard / <span>{props.subHeading}</span></div>
            </div>
        </>
    )
}

export default DashboardTop