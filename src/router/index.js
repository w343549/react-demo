import React,{Component} from 'react';
import {Switch,Route, Redirect} from "react-router-dom"

import Index from "../view/index/index"
import ChoseIndex from "../view/chose/index"
import TvIndex from "../view/tv/index"
import RankIndex from "../view/ranking/index"
import Classification from "../view/classification/index"
import Film from "../view/film/index"
import YearIndex from "../view/year/index"
import Notice from "../view/notice/index"


class RouterIndex extends Component {
  render () {
    return (
      <Switch>
          <Route path="/" exact render={()=>(
              <Redirect to="/index" />
          )} />
          <Route path="/index" component={Index} />
          <Route path="/chose" component={ChoseIndex} />
          <Route path="/tv" component={TvIndex} />
          <Route path="/ranking" component={RankIndex} />
          <Route path="/classification" component={Classification} />
          <Route path="/film" component={Film} />
          <Route path="/year" component={YearIndex} />
          <Route path="/notice" component={Notice} />
      </Switch>
    )
  }
}

export default RouterIndex;
