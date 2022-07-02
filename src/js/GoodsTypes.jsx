import React from "react";
import "../css/base/base.css";
import "../css/goods_types.css";
import Shortcut from "./commons/Shortcut";
import Footer from "./commons/Footer";
import Header from "./commons/Header";

export default class GoodsTypes extends React.Component {
  items = (() => {
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
  })()

  render() {
    return (
      <div className="goods-types">
        <Shortcut/>
        {/* TODO:增加图标组件的支持 */}
        <Header logoSmailPic={require("../imgs/secKill_03.png")}/>
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
            <img src={require("../imgs/bg_03.png")} alt={`pic`}/>
          </div>
          <div className={`goods-container w`}>
            {
              this.items.map((item, index) => {
                return (
                  <div className={`item`} key={index} style={(index + 1) % 4 !== 0 ? {marginRight: '13px'} : {}}>
                    <div className={`detail`}>
                      {/*
                          Critical dependency: the request of a dependency is an expression
                          require用于引入模块、 JSON、或本地文件，但是不支持直接传入变量。
                          解决方法：通过 ES6 字符串模板 将变量转换为字符串即可。
                      */}
                      {/* 另记: 就算使用模板字符串向scr的require传入字符串也不行, 必须传入已经require好的资源 */}
                      <div className={`pic`}><a href={`#`}><img src={item.pic} alt={`goods_pic`}/></a></div>
                      <div style={{padding: '0 14px'}}>
                        <div className={`title`}><a>{item.title}</a></div>
                        <div className={`price`}>
                          <span className={`price-now`}><span className={`icon`}>¥</span>{item.price}</span>
                          <span className={`price-origin`}>¥{item.originPrice}</span>
                        </div>
                        <div className={`state`}>
                          <span className={`sold-per`}>已售{item.soldPer}%</span>
                          <span className={`progress`}>
                            <img src={require("../imgs/state_07.png")} alt={`progress_pic`}/>
                          </span>
                          <span>剩余<span className={`number`}>{item.remain}</span>件</span>
                        </div>
                      </div>
                    </div>
                    <div className={`buy-now`}><a href={`#`}>立即抢购</a></div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}