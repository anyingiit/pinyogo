import React from "react";
import "../css/base/base.css";
import "../css/goods_types.css";
import Shortcut from "./commons/shortcut";
import Footer from "./commons/footer";
import Header from "./commons/header";

export default class Goods_types extends React.Component {
  static items = (() => {
    const result = []
    for (let i = 0; i < 29; i++) {
      result.push(
        {
          title: 'Apple苹果iPhone 6s Plus（A1699）32G 金色 移动联通电信4G手机',
          price: 6088,
          originPrice: 6988,
          soldPer: 87,
          remain: 29,
          pic: require("../upload/mobile.jpg")
        })
    }
    return result
  })

  render() {
    return (
      <div className="goods-types">
        <Shortcut/>
        <Header/>
        <div className="container">
          <div className="nav w">
            <ul className={`list list-left`}>
              <li><a href="#"><h3>品质秒杀</h3></a></li>
              <li><a href="#"><h3>即将售罄</h3></a></li>
              <li><a href="#"><h3>超值低价</h3></a></li>
            </ul>
            <ul className={`list list-right`}>
              <li><a href="#"><p>女装</p></a></li>
              <li><a href="#" className={`select`}><p>女鞋</p></a></li>
              <li><a href="#"><p>男装</p></a></li>
              <li><a href="#"><p>男鞋</p></a></li>
              <li><a href="#"><p>母婴童装</p></a></li>
              <li><a href="#"><p>食品</p></a></li>
              <li><a href="#"><p>智能数码</p></a></li>
              <li><a href="#"><p>运动户外</p></a></li>
              <li className="margin-right-none"><a href="#"><span>更多分类<i className="icon-ctrl-right"/></span></a></li>
            </ul>
          </div>
          <div className="line"/>
          <div className={`cur-type w`}>
            <img src={require("../imgs/bg_03.png")}/>
          </div>
          <div className={`goods-container w`}>
            <div className={`item`}>
              <div className={`detail`}>
                <div className={`pic`}><a href={`#`}><img src={require("../upload/mobile.jpg")}/></a></div>
                <div style={{padding: '0 14px'}}>
                  <div className={`title`}><a>Apple苹果iPhone 6s Plus（A1699）32G 金色 移动联通电信4G手机</a></div>
                  <div className={`price`}>
                    <span className={`price-now`}><span className={`icon`}>¥</span>6088</span>
                    <span className={`price-origin`}>¥6988</span>
                  </div>
                  <div className={`state`}>
                    <span className={`sold-per`}>已售87%</span>
                    <span className={`progress`}>
                      <img src={require("../imgs/state_07.png")}/>
                    </span>
                    <span>剩余<span className={`number`}>29</span>件</span>
                  </div>
                </div>
              </div>
              <div className={`buy-now`}><a href={`#`}>立即抢购</a></div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}