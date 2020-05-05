import React, { Component } from "react";
class ReminderItems extends Component {
  createTasks = item => {
    return (
      <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {" "}
        {item.text}
      </li>
    );
  };
  render() {
    const reminderEntries = this.props.entries;
    const listItems = reminderEntries.map(this.createTasks);
    return <ul className="theList"> {listItems} </ul>;
  }
}
export default ReminderItems;
