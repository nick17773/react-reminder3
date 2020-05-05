import React from 'react';
 
import { NavLink } from 'react-router-dom';

{/* sets the button of the active page to orange and white */}
const ACTIVE = {background: '#FA6900', color: '#fff'}
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