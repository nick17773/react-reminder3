import React from 'react';
 
import { NavLink } from 'react-router-dom';
// this file uses the NavLink function to create the clickable links for my Nav bar.

{/* The nav bar function */}
const Navigation = () => {
    return (
      
       <div className="Nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/documentation">Documentation</NavLink>
          <NavLink to="/reminders">Reminders</NavLink>
         
          
       </div>
      
    );
}
 
export default Navigation;