import React from "react";

class Counter extends React.Component {
  constructor(props) {
    // Call the parent React.Component constructor and give it the props
    // so it can 'supervise' this child component.
    super(props);

    // State is anything that can change.
    // If you have a prop that needs to change, add it to state.
    this.state = {
      count: 0,
      clickDates: [],
    };
  }

  // Use an arrow function if a method is used in the render.
  handleClickCount = (event) => {
    console.log("clicked", this.props.title);
    const newClickDate = new Date();

    // Pass in a new state object with the updated state data to be displayed on the page.
    // Never mutate this.state directly.
    // When a piece of state is an array or object, you need to update it with a BRAND NEW array or object.

    this.setState({
      count: this.state.count + 1,
      // Create a new array containing all the current items, plus one more new item.
      clickDates: [...this.state.clickDates, newClickDate],
    });
  };

  // This is what you have to do if you don't use .map to render a list.
  displayDateList = () => {
    const listItems = [];

    for (let i = 0; i < this.state.clickDates.length; i++) {
      const dateStr = this.state.clickDates[i].toString();

      listItems.push(<li>{dateStr}</li>);
    }
    console.log(listItems);

    return listItems;
  };

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>

        {/* .map is used to create a new array where each item is an HTML element containing the data. */}
        {/* <ul>
          {this.state.clickDates.map((date) => {
            return <li>{date.toString()}</li>;
          })}
        </ul>
         */}

        {/* Render the dates manually without .map */}
        <ul>{this.displayDateList()}</ul>

        {/* Imagine it like this: to render a list */}
        <ul>{[<li>{"date1"}</li>, <li>{"date2"}</li>]}</ul>
        <button
          onClick={(event) => {
            this.handleClickCount(event);
          }}
        >
          Click to count: {this.state.count}
        </button>
      </div>
    );
  }
}

export default Counter;
