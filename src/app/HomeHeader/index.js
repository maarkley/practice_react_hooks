import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeader = () => {
    return (
        <div className="home-header">
            <div className="home-header--claim">
                <div className="container">
                    <h1>Discover the history of space exploration</h1>
                    <Link to="/history">
                        <div className="primary-button">
                            <div className="primary-button--text">LAUNCH</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader