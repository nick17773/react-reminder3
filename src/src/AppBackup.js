import React, { Component } from "react";
import ReminderList from "./ReminderList";
import ReminderItems from "./ReminderItems";
import ReminderFix from "./ReminderFix";
import firebase from "./firebase";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };
  }
  handleInput = e => {
    var date = new Date(Date.now());

    const itemText = e.target.value;
    const currentItem = {
      text: itemText,
      key: Date.now(),
      date: Intl.DateTimeFormat("en-GB").format(date)
    };
    this.setState({
      currentItem
    });
  };

  addItem = e => {
    e.preventDefault();

    const newItem = this.state.currentItem;

    if (newItem.text !== "") {
      console.log(newItem);

      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: ""
        }
      });
    }
  };
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  };

  render() {
    return (
      <div className="App">
        <ReminderList
          timeStamp={this.state.date}
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
          saveItem={this.state.saveItem}
        />
        <ReminderItems
          entries={this.state.items}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
