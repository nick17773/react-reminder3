import React, { Component } from "react";
import "./App.css";
import firebase, { auth, provider } from "./firebase.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Reminder extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: "",
      username: "",
      description: "",
      time: "",
      items: []
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
      date: this.state.currentItem,
      title: this.state.username,
      description: this.state.description,
      time: this.state.time
    };
    itemsRef.push(item);
    this.setState({
      currentItem: "",
      username: "",
      description: "",
      time: ""
    });
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          date: items[item].date,
          title: items[item].title,
          description: items[item].description,
          time: items[item].time
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
                placeholder="Reminder"
                onChange={this.handleChange}
                value={this.state.username}
              />

              <input
                type="text"
                name="description"
                placeholder="Description"
                onChange={this.handleChange}
                value={this.state.description}
              />
              <p>When is it due?</p>
              <input
                type="date"
                name="currentItem"
                onChange={this.handleChange}
                value={this.state.currentItem}
              />
              <input
                type="time"
                name="time"
                onChange={this.handleChange}
                value={this.state.time}
              />
              <p>Please note: The date and time on the reminder will display in yyyy/mm/dd and 24 hour format.</p>
              <button>Add Item</button>
            </form>
          </section>
          <section className="display-item">
            <div className="wrapper">
              <ul>
                {this.state.items.map(item => {
                  return (
                    <li key={item.id}>
                      <h3>{item.title}</h3>
                      <p>
                        Due by: {item.date + " at " + item.time}
                        <br />
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
export default Reminder;
