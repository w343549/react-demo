import React,{Component} from 'react';
import {Card} from "antd"
import CardItem from "../../compents/cardItem"

const list=[
  {
    title:'乔乔的异想世界...',
    time:'04月03日上映'
  },
  {
    title:'野性的呼唤',
    time:'04月03日上映'
  },
  {
    title:'奇妙王国之魔法奇缘..',
    time:'04月03日上映'
  },
  {
    title:'大红包',
    time:'04月03日上映'
  },
  {
    title:'金蝉降魔',
    time:'04月03日上映'
  },
  {
    title:'82号古宅',
    time:'04月03日上映'
  },
  {
    title:'亲亲哒',
    time:'04月03日上映'
  },
  {
    title:'六月的秘密',
    time:'04月03日上映'
  },
  {
    title:'秘密的访客',
    time:'04月03日上映'
  },
  {
    title:'无名狂',
    time:'04月03日上映'
  }
];

const list2=[
  {
    title:'乔乔的异想世界...',
    time:'04月03日上映'
  },
  {
    title:'野性的呼唤',
    time:'04月03日上映'
  },
  {
    title:'奇妙王国之魔法奇缘..',
    time:'04月03日上映'
  }
  
];

class Index extends Component {
  render () {
    return (
      <div className="wrap clearfix">
        <div className="left-con">
          <div className="title clearfix">
            <div className="address-tit">电影票 - 深圳</div>
            <div className="chose-info">[切换城市]</div>
          </div>
          <CardItem title="即将上映" >
            {list.map((item,index)=>
              <div className="card-item" key={index}>
                <Card
                    hoverable
                    style={{ width: 115 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                  >
                  <p className="titname">{item.title}</p>
                  <p className="time">{item.time}</p>
                </Card>
              </div>             
            )}
               
          </CardItem>
          <CardItem title="正在上映" >
            {list2.map((item,index)=>
              <div className="card-item" key={index}>
                <Card
                    hoverable
                    style={{ width: 115 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                  >
                  <p className="titname">{item.title}</p>
                  <p className="time">{item.time}</p>
                </Card>
              </div>             
            )}
          </CardItem>
        </div>
        <div className="aside">
          右边广告
        </div>
      </div>
    )
  }
}

export default Index;
