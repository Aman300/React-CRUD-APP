import React from "react";

import '../App.css';
import { Link } from "react-router-dom";

function navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow">
            <Link className="navbar-brand" to="/"><img src="https://miro.medium.com/max/770/1*XbM9c69xcLwyHxexcY3-qg.png" alt="logo" style={{width: '50px'}}></img></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-item nav-link" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/list">List</Link>
                        {/* <Link className="nav-item nav-link" to="/about">About</Link> */}
                    </div>
                    <button type="button" className="btn btn-danger">Sign in</button>
                </div>
            </nav>

        </>

    )
}

export default navbar;









