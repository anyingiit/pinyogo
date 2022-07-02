import React from "react";
import "../../css/base/base.css"
import "../../css/commons/header.css"

// header
export default class Header extends React.Component {
  render() {
    return (
      <div className="header w">
        {/* logo */}
        <div className="logo">
          <h1>
            <a href="index.html" title="品优购">品优购</a>
          </h1>
        </div>
        {/* search */}
        <div className="search">
          <input type="text" placeholder="请搜索"/>
          <button>搜索</button>
        </div>
        {/* hot-words */}
        <div className="hot-words">
          <a href="#" className="font-red">优惠购首发</a>
          <a href="#">亿元优惠</a>
          <a href="#">9.9元团购</a>
          <a href="#">每满99减30</a>
          <a href="#">办公用品</a>
          <a href="#">电脑</a>
          <a href="#">通信</a>
        </div>
        {/* shopping-card */}
        <div className="shopping-card">
          <i className="icon-cart"/>我的购物车<i className="icon-ctrl-right"/>
          <i className="count">8</i>
        </div>
      </div>
    )
  }
}