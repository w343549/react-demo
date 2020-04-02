import React,{Component} from 'react';
import {Layout,Input,Menu} from "antd"
import {Link} from "react-router-dom"
import Sign from "../images/annual_2019.png"
import Logo from "../images/lg_movie_a12_2.png"

class Head extends Component {
  render () {
    return (
      <div className="head">
          <Layout.Header>
              <div className="topbar clearfix">
                  <ul className="top-left-nav">
                      <li>豆瓣</li>
                      <li>读书</li>
                      <li>电影</li>
                      <li>音乐</li>
                      <li>同城</li>
                      <li>小组</li>
                      <li>阅读</li>
                      <li>FM</li>
                  </ul>
                  <ul className="top-right-nav">
                      <li>下载豆瓣客户端</li>
                      <li>登录 | 注册</li>                          
                  </ul>
              </div>
              <div className="serch">
                <div className="mid-con clearfix">
                  <div className="sign"><img src={Sign} alt="sign" /></div>
                  <div className="logo"><img src={Logo} alt="logo" /></div>
                  <div className="search-inpt"><Input.Search placeholder="搜索电影、电视剧、综艺、影人" onSearch={value => console.log(value)} enterButton /></div>
                </div>
              </div>
              <div className="nav-wrap">
                <div className="mid-con">
                  <div className="menu">
                    <Menu>
                      <Menu.Item><Link to="/">影讯&购票</Link></Menu.Item>
                      <Menu.Item><Link to="/chose">选电影</Link></Menu.Item>
                      <Menu.Item><Link to="/tv">电视剧</Link></Menu.Item>
                      <Menu.Item><Link to="/ranking">排行榜</Link></Menu.Item>
                      <Menu.Item><Link to="/classification">分类</Link></Menu.Item>
                      <Menu.Item><Link to="/film">影评</Link></Menu.Item>
                      <Menu.Item><Link to="/year">2019年度榜单</Link></Menu.Item>
                      <Menu.Item><Link to="/notice">2019年书影报告</Link></Menu.Item>
                    </Menu>
                  </div>
                </div>
              </div>
          </Layout.Header>
      </div>
    )
  }
}

export default Head;
