import React,{Component} from 'react';

class Foot extends Component {
  render () {
    return (
      <div className="foot">
        <div className="mid-con">
          <div className="foot-con clearfix">
            <p className="copy-con">© 2005－2020 douban.com, all rights reserved 北京豆网科技有限公司</p>
            <div className="foot-nav">
              <ul>
                <li>关于豆瓣</li>
                <li>在豆瓣工作</li>
                <li>联系我们</li>
                <li>法律声明</li>
                <li>帮助中心</li>
                <li>移动应用</li>
                <li>豆瓣广告</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Foot;
