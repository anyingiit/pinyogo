import React from "react";
import "../css/base/base.css"
import style from "../css/goods_details.module.scss"
import Shortcut from "./commons/Shortcut";
import Header from "./commons/Header";
import Footer from "./commons/Footer";
import Nav from "./commons/Nav";
import BreadCrumb from "./commons/BreadCrumb";

export default class GoodsDetails extends React.Component {
  breadCrumbList = [
    {
      value: '手机、数码、通讯',
      href: '#'
    },
    {
      value: '手机',
      href: '#'
    }, {
      value: 'Apple苹果',
      href: '#'
    },
    {
      value: 'iphone 6S Plus系类',
      href: '#'
    }
  ]

  render() {
    return (
      <div>
        <Shortcut/>
        <Header/>
        <Nav/>
        <div className={[style.breadCrumb, 'w'].join(' ')}>
          <BreadCrumb list={this.breadCrumbList}/>
        </div>
        <div className={[style.main, 'w'].join(' ')}>
          <div className={style.left}>
            <div className={style.top}>
              <div className={style.mainPic}><img alt={`now pic`} src={require("../upload/商品选中大图.png")}/></div>
              <div className={style.picSelector}>
                <div className={style.targetLeft}></div>
                <div className={style.pics}>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div className={style.targetRight}></div>
              </div>
            </div>
            <div className={style.bottom}>
              <div className={style.infos}>
                <span>商品编号：0468256644</span><span>分享</span><span>关注 5000</span><span>对比</span>
              </div>
            </div>
          </div>
          <div className={style.right}></div>
        </div>
        <Footer/>
      </div>
    )
  }
}