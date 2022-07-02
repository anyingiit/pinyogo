import React from "react";
import "../../css/base/base.css"
import "../../css/commons/shortcut.css"

// 顶部导航组件
export default class Shortcut extends React.Component {
  render() {
    return (
      <div className="shortcut">
        <div className="w">
          <ul className="fl">
            <li className="fl">品优购欢迎您！</li>
            <li className="fl"><a href="#">请登录</a><a href="#" className="font-red">免费注册</a></li>
          </ul>
          <div className="fr">
            <ul>
              <li><a href="#">我的订单</a></li>
              <li className="spacer"></li>
              <li>
                <a href="#">我的品优购</a>
                <i className="icon-ctrl-down"></i>
              </li>
              <li className="spacer"></li>
              <li><a href="#">品优购会员</a></li>
              <li className="spacer"></li>
              <li><a href="#">企业采购</a></li>
              <li className="spacer"></li>
              <li>
                <a href="#">关注品优购</a>
                <i className="icon-ctrl-down"></i>
              </li>
              <li className="spacer"></li>
              <li>
                <a href="#">客户服务</a>
                <i className="icon-ctrl-down"></i>
              </li>
              <li className="spacer"></li>
              <li>
                <a href="#">网站导航</a>
                <div className="icon-ctrl-down"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}