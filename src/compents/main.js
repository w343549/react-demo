import React,{Component} from 'react';
import RouterIndex from "../router/index"

class Main extends Component {
  render () {
    return (
      <div className="main">
        <div className="mid-con">
          <RouterIndex />
        </div>
      </div>
    )
  }
}

export default Main;
