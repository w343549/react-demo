import React,{Component} from 'react';
import Head from "./compents/head"
import Main from "./compents/main"
import Foot from "./compents/foot"

import './App.css';


class App extends Component {
  render () {
    return (
      <div className="wrapper">
        <Head />
        <Main></Main>
        <Foot />
      </div>
    )
  }
}

export default App;
