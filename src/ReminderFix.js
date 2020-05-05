import React, { Component } from "react";
import "./App.css";
import firebase, { auth, provider } from "./firebase.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: "",
      username: "",
      description: "",
      items: [],
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref("items");
    const item = {
      title: this.state.currentItem,
      user: this.state.username,
      description: this.state.description
    };
    itemsRef.push(item);
    this.setState({
      currentItem: "",
      username: "",
      description: ""
    });
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
    if (user) {
      this.setState({ user });
    } });
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user,
          description: items[item].description
        });
      }
      this.setState({
        items: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }
  render() {
    return (
      <div className="app">
        <header>
          <div className="wrapper">
            <h1>Reminders</h1>
           
          </div>
        </header>
        <div className="container">
          <section className="add-item">
            <form onSubmit={this.handleSubmit}>
              <p>What is your Reminder?</p>
              <input
                type="text"
                name="username"
                placeholder="What do you want to remember"
                onChange={this.handleChange}
                value={this.state.username}
              />

              <input
                type="text"
                name="description"
                placeholder="Enter Brief Description here"
                onChange={this.handleChange}
                value={this.state.description}
              />
              <p>When is it due</p>
              <input
                type="date"
                name="currentItem"
                placeholder="When is it due?"
                onChange={this.handleChange}
                value={this.state.currentItem}
              />
              <button>Add Item</button>
            </form>
          </section>
          <section className="display-item">
            <div className="wrapper">
              <ul>
                {this.state.items.map(item => {
                  return (
                    <li key={item.id}>
                      <h3>{item.user}</h3>
                      <p>
                        Due by: {item.title}
                        <br />
                        {item.description}
                        <button onClick={() => this.removeItem(item.id)}>
                          Remove Item
                        </button>
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default App;
