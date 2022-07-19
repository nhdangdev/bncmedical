import React from 'react'
import './notfound.module.css'

const NotFound = () => {
    return (
        <div className="container">
            <div className="content">
                <h2>404</h2>
                <h4>Opps ! Page not found </h4>
                <p>The page you were looking for doesn't exist. You may have mistyped the
                address or the page may have moved.</p>
                <a href="/#">Back to Home</a>
            </div>
        </div>
    )
}

export default NotFound
