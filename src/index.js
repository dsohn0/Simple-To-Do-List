import React from "react";
import ReactDOM from "react-dom";

class ToDo extends React.Component {
  handletheclick = () => {
    if (this.state.inputtask !== "") {
      this.setState((state) => ({
        list: state.list.concat([state.inputtask]),
      }));
      this.setState({ inputtask: "" });
    } else {
      return;
    }
  };

  handletheclickkey = (event) => {
    if (event.key === "Enter" && this.state.inputtask !== "") {
      this.setState((state) => ({
        list: state.list.concat([state.inputtask]),
      }));
      this.setState({ inputtask: "" });
    } else {
      return;
    }
  };

  removethisone = (i) => {
    this.setState((state) => {
      const origlist = this.state.list;
      origlist.splice(i, 1);
      return { origlist };
    });
  };

  inputthis = (event) => {
    this.setState({ inputtask: event.target.value });
  };

  constructor(props) {
    super(props);
    this.state = { list: [], inputtask: "" };
  }

  render() {
    return (
      <div>
        <h1>Simple To Do List (All information lost on reset)</h1>
        <h1>You have {this.state.list.length} things left to do.</h1>
        <ul>
          {this.state.list.map((entry, i) => (
            <li key={i}>
              <button onClick={() => this.removethisone(i)}>Done</button>{" "}
              {entry}
            </li>
          ))}
        </ul>

        <input
          onChange={this.inputthis}
          value={this.state.inputtask}
          onKeyPress={this.handletheclickkey}
        ></input>
        <button onClick={this.handletheclick}>Click here to add task.</button>
      </div>
    );
  }
}

ReactDOM.render(<ToDo />, document.getElementById("root"));
