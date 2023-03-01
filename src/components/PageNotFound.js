import React from 'react'

function PageNotFound() {
    return (
        <>
            <div className="pagenotfound d-flex flex-column justify-content-center align-items-center">
                <span style={{ fontSize: "150px" }}>&#128577;</span>
                <h1>404</h1>
                <h5>Page not found</h5>
                <p>The page you are looking doesn't exist or an other error occured.</p>
            </div>
        </>
    )
}

export default PageNotFound