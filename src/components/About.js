import React from "react";
// this file is for displaying the brief description of what the app is. 
const About = () => {
  return (
    <div>
      <header>
        <div className="wrapper">
          <h1>About this project</h1>
        </div>
      </header>
      <div className="container">
        <section className="add-item">
          <p>The aim of this project is to develop a reminder app to be used by students or other people to remember tasks. <br/>
          <br/>
          Please note: The date and time on the reminder will display in yyyy/mm/dd and 24 hour format.
          </p>
          
          
        </section>
      </div>
    </div>
  );
};

export default About;
