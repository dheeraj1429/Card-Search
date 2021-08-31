import React, { Component } from "react";
import CardList from "../Card-list/CardList.component";
import SearchBox from "../Card-list/Search-Box/Search-Box.Component";
import "./TaskOne.style.css";

class TaskOneNew extends Component {
  constructor() {
    super();

    this.state = {
      string: [],
      search: "",
      title: "",
    };

    // bind the function to this
    this.changeHandler = this.changeHandler.bind(this);

    // api
    const API = `https://jsonplaceholder.typicode.com/users`;
  }

  // lifcycle methods fetch the api
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => this.setState({ string: data }));
  }

  changeHandler(e) {
    this.setState({ search: e.target.value, title: e.target.value });
  }

  render() {
    const { string, search, title } = this.state;
    // filter the items
    const filterItem = string.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()));

    return (
      <div>
        {/* this is old way to making the elements */}
        {/* <h1>{this.state.string[0].name}</h1>
        <h1>{this.state.string[1].name}</h1>
        <h1>{this.state.string[2].name}</h1> */}

        {/* search box */}
        <input type="search" placeholder="search.." onChange={this.changeHandler} />

        <h1 className="headgin">{this.state.title}</h1>

        {/* live title change */}
        {/* using the map mthods */}
        {/* this way we can render all the elements from the array and put into the html tags */}
        <CardList string={filterItem} />
      </div>
    );
  }
}

export default TaskOneNew;
