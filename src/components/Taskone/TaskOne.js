import React from "react";

class TaskOne extends React.Component {
  constructor() {
    super();

    this.state = {
      srt: "this is react!",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.srt}</h1>
        <button onClick={() => this.setState({ srt: "cool" })}>change Text</button>
      </div>
    );
  }
}

export default TaskOne;
