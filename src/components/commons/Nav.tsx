import React from "react";
import "../../css/base/base.css"
import "../../css/commons/nav.css"
import PropTypes from "prop-types";

interface Props {
  defaultShowClassifyDetail: boolean
}

export default class Nav extends React.Component<Props> {
  static propTypes = {
    defaultShowClassifyDetail: PropTypes.bool
  }
  static defaultProps = {
    defaultShowClassifyDetail: false
  }

  classifyDetail = (
    () => {
      if (this.props.defaultShowClassifyDetail) {
        return (
          <div className="dd">
            <ul>
              <li><a href="#">家用电器</a><i className="icon-ctrl-right"></i></li>
              <li><a href="#">手机、数码、通信</a><i className="icon-ctrl-right"></i></li>
              <li><a href="#">电脑、办公</a><i className="icon-ctrl-right"></i></li>
              <li><a href="#">家居、家具、家装、厨具</a><i className="icon-ctrl-right"></i></li>
              <li><a href="#">男装、女装、童装、内衣</a><i className="icon-ctrl-right"></i></li>
              <li><a href="#">个户化妆、清洁用品、宠物</a><i className="icon-ctrl-right"></i></li>
              <li><a href="#">鞋靴、箱包、珠宝、奢侈品</a><i className="icon-ctrl-right"></i></li>
              <li><a href="#">运动户外、钟表</a><i className="icon-ctrl-right"></i></li>
              <li><a href="#">汽车、汽车用品</a><i className="icon-ctrl-right"></i></li>
              <li><a href="#">母婴、玩具乐器</a><i className="icon-ctrl-right"></i></li>
              <li><a href="#">食品、酒类、生鲜、特产</a><i className="icon-ctrl-right"></i></li>
              <li><a href="#">医药保健</a><i className="icon-ctrl-right"></i></li>
              <li><a href="#">图书、音像、电子书</a><i className="icon-ctrl-right"></i></li>
              <li><a href="#">彩票、旅行、充值、票务</a><i className="icon-ctrl-right"></i></li>
              <li><a href="#">理财、众筹、白条、保险</a><i className="icon-ctrl-right"></i></li>
            </ul>
          </div>
        )
      }
    }
  )()


  render() {
    return (
      <div className="nav">
        <div className="w">
          <div className="drop-down fl">
            <div className="dt">全部商品分类</div>
            {this.classifyDetail}
          </div>
          <div className="nav-items fl">
            <ul>
              <li><a href="#">服装城</a></li>
              <li><a href="#">美妆馆</a></li>
              <li><a href="#">传智超市</a></li>
              <li><a href="#">全球购</a></li>
              <li><a href="#">闪购</a></li>
              <li><a href="#">团购</a></li>
              <li><a href="#">拍卖</a></li>
              <li><a href="#">有趣</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}