import React from "react";
import "../../css/base/base.scss"
import style from "../../css/commons/footer.scss"

export default class Footer extends React.Component {
  render() {
    return (
      <div className={style.footer}>
        <div className="w">
          {/* mod_service */}
          <div className={style.mod_service}>
            <li className={style.a}>
              <div className={style.left}></div>
              <div className={style.right}>
                <div className={style.title}>正品保障</div>
                <div className={style.words}>正品保障，提供发票</div>
              </div>
            </li>
            <li className={style.b}>
              <div className={style.left}></div>
              <div className={style.right}>
                <div className={style.title}>正品保障</div>
                <div className={style.words}>正品保障，提供发票</div>
              </div>
            </li>
            <li className={style.c}>
              <div className={style.left}></div>
              <div className={style.right}>
                <div className={style.title}>正品保障</div>
                <div className={style.words}>正品保障，提供发票</div>
              </div>
            </li>
            <li className={style.d}>
              <div className={style.left}></div>
              <div className={style.right}>
                <div className={style.title}>正品保障</div>
                <div className={style.words}>正品保障，提供发票</div>
              </div>
            </li>
            <li className={style.e}>
              <div className={style.left}></div>
              <div className={style.right}>
                <div className={style.title}>正品保障</div>
                <div className={style.words}>正品保障，提供发票</div>
              </div>
            </li>
          </div>
          <div className={style.line}></div>
          {/* helps */}
          <div className={style.helps}>
            <ul>
              <li>
                <div className={style.title}>购物指南</div>
                <div className={style.words}>
                  <ul>
                    <li><a href="#">购物流程</a></li>
                    <li><a href="#">会员介绍</a></li>
                    <li><a href="#">生活旅行/团购</a></li>
                    <li><a href="#">常见问题</a></li>
                    <li><a href="#">大家电</a></li>
                    <li><a href="#">联系客服</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <div className={style.title}>配送方式</div>
                <div className={style.words}>
                  <ul>
                    <li><a href="#">上门自提</a></li>
                    <li><a href="#">211限时达</a></li>
                    <li><a href="#">配送服务查询</a></li>
                    <li><a href="#">配送费收取标准</a></li>
                    <li><a href="#">海外配送</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <div className={style.title}>支付方式</div>
                <div className={style.words}>
                  <ul>
                    <li><a href="#">货到付款</a></li>
                    <li><a href="#">在线支付</a></li>
                    <li><a href="#">分期付款</a></li>
                    <li><a href="#">邮局汇款</a></li>
                    <li><a href="#">公司转账</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <div className={style.title}>售后服务</div>
                <div className={style.words}>
                  <ul>
                    <li><a href="#">售后政策</a></li>
                    <li><a href="#">价格保护</a></li>
                    <li><a href="#">退款说明</a></li>
                    <li><a href="#">返修/退换货</a></li>
                    <li><a href="#">取消订单</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <div className={style.title}>特色服务</div>
                <div className={style.words}>
                  <ul>
                    <li><a href="#">夺宝岛</a></li>
                    <li><a href="#">DIY装机</a></li>
                    <li><a href="#">延保服务</a></li>
                    <li><a href="#">品优购E卡</a></li>
                    <li><a href="#">品优购通信</a></li>
                  </ul>
                </div>
              </li>
              <li className={style.qrCode}>
                <div className={style.title}>帮助中心</div>
                <div className={style.pic}>
                  <img alt={`qr-code`} src={require("../../imgs/qr-code.png")}/>
                  <div>品优购客户端</div>
                </div>
              </li>
            </ul>
          </div>
          <div className={style.line}></div>
          {/* copyright */}
          <div className={style.copyright}>
            <div className={style.line1}>关于我们 | 联系我们 | 联系客服 | 商家入驻 | 营销中心 | 手机品优购 | 友情链接 | 销售联盟 | 品优购社区 | 品优购公益 |
              English
              Site | Contact U
            </div>
            <div className={style.line2}>地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100 邮箱:
              zhanghj+itcast.cn<br/>
              京ICP备08001421号京公网安备110108007702
            </div>
          </div>
        </div>
      </div>
    )
  }
}