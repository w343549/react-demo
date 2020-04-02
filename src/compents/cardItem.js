import React,{Component} from 'react';
import {Card} from "antd"

class CardItem extends Component {
  render () {
    let {title,children}=this.props
    return (
      <div className="card-wrap">
        <Card title={title} style={{ width: 675 }}>
           {children}
        </Card>
      </div>
    )
  }
}

export default CardItem;
