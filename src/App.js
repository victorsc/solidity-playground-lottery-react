import logo from "./logo.svg";
import "./App.css";
import React from "react";
import web3 from './web3';
import lottery from './lottery';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {manager: ''};
  }
  async componentDidMount() {
    const manager = await lottery.methods.manager().call();

    this.setState({ manager });
  }

  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>This constract is managed by {this.state.manager}</p>
      </div>
    );
  }
}
export default App;
