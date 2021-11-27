import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="flex flex-row bg-gray-100 py-4">
            <div className="px-6"><NavLink to={""}>Home</NavLink></div>
            <div className="px-6"><NavLink to={"popular"}>Popular</NavLink></div>
            <div className="px-6"><NavLink to={"user"}>User Stuff</NavLink></div>
        </div>
    )
}

export default NavBar