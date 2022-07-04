import React, { Component } from "react";

type State = {
  count: number;
};

export default class StateClass extends Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");

    // this.setState({
    //   count: 1,
    // });
    // console.log(this.state.count);
    // this.setState({
    //   count: 2,
    // });

    // console.log(this.state.count);

    setTimeout(() => {
      this.setState({
        count: 1,
      });
      console.log(this.state.count);
      this.setState({
        count: 2,
      });
      console.log(this.state.count);
    });
  }

  render() {
    return <div>StateClass</div>;
  }
}
