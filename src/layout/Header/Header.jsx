import React from 'react'
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='col-sm-3'>
                <Link to="/">Admin-Taza</Link>
            </div>
            <div className='col-sm-9'>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <button type="button" className="btn btn-primary">
                                <i className="fa fa-bell"></i> <span className="badge badge-light">4</span>
                            </button>
                           
                        </li>
                        
                        <li className="nav-item ml-2" >
                            <i className="fa fa-cog" style={{color: "gray", fontSize: "30px", lineHeight: "38px"}} title="User Setting"></i>
                        </li>
                    </ul>
                    
                </div>
            </div>
            
            
        </nav>
    </div>
  )
}
