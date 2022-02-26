import React from 'react'
import {
    Link,
  } from "react-router-dom";

  import "./index.css"

export default function HeaderLeft() {
  return (
    <div>
        <nav id="sidebar">
          <ul className="list-unstyled components">
            <li className="nav-item active">
                <Link to="/"><i className="fa fa-home"></i>Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/UserProfile"><i className="fa fa-user"></i>User Profile</Link>
            </li>
            <li className="nav-item">
                <Link to="/UserManager"><i className="fa fa-users"></i>User Manger</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}
