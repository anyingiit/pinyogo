import React from "react";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        {/* 顶部导航开始 */}
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
                  <i className="icon-ctrl1"></i>
                </li>
                <li className="spacer"></li>
                <li><a href="#">品优购会员</a></li>
                <li className="spacer"></li>
                <li><a href="#">企业采购</a></li>
                <li className="spacer"></li>
                <li>
                  <a href="#">关注品优购</a>
                  <i className="icon-ctrl1"></i>
                </li>
                <li className="spacer"></li>
                <li>
                  <a href="#">客户服务</a>
                  <i className="icon-ctrl1"></i>
                </li>
                <li className="spacer"></li>
                <li>
                  <a href="#">网站导航</a>
                  <div className="icon-ctrl1"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 顶部导航结束 */}
        {/* header开始 */}
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
            <i className="icon-cart"/>我的购物车<i className="icon-ctrl2"/>
            <i className="count">8</i>
          </div>
        </div>
        {/* header结束 */}
        {/* nav开始 */}
        <div className="nav">
          <div className="w">
            <div className="drop-down fl">
              <div className="dt">全部商品分类</div>
              <div className="dd">
                <ul>
                  <li><a href="#">家用电器</a><i className="icon-ctrl2"></i></li>
                  <li><a href="#">手机、数码、通信</a><i className="icon-ctrl2"></i></li>
                  <li><a href="#">电脑、办公</a><i className="icon-ctrl2"></i></li>
                  <li><a href="#">家居、家具、家装、厨具</a><i className="icon-ctrl2"></i></li>
                  <li><a href="#">男装、女装、童装、内衣</a><i className="icon-ctrl2"></i></li>
                  <li><a href="#">个户化妆、清洁用品、宠物</a><i className="icon-ctrl2"></i></li>
                  <li><a href="#">鞋靴、箱包、珠宝、奢侈品</a><i className="icon-ctrl2"></i></li>
                  <li><a href="#">运动户外、钟表</a><i className="icon-ctrl2"></i></li>
                  <li><a href="#">汽车、汽车用品</a><i className="icon-ctrl2"></i></li>
                  <li><a href="#">母婴、玩具乐器</a><i className="icon-ctrl2"></i></li>
                  <li><a href="#">食品、酒类、生鲜、特产</a><i className="icon-ctrl2"></i></li>
                  <li><a href="#">医药保健</a><i className="icon-ctrl2"></i></li>
                  <li><a href="#">图书、音像、电子书</a><i className="icon-ctrl2"></i></li>
                  <li><a href="#">彩票、旅行、充值、票务</a><i className="icon-ctrl2"></i></li>
                  <li><a href="#">理财、众筹、白条、保险</a><i className="icon-ctrl2"></i></li>
                </ul>
              </div>
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
        {/* nav结束 */}

        {/* main */}
        <div className="w">
          {/* main */}
          <div className="main">
            <div className="focus">
              <ul>
                <li><a href="#"><img src="upload/img.png"/></a></li>
              </ul>
              <ol>
                <li></li>
                <li className="select"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ol>
              <div className="left"><i className="icon-ctrl"></i></div>
              <div className="right"><i className="icon-ctrl2"></i></div>
            </div>
            <div className="newsflash">
              <div className="a">
                <div className="title">
                  <div className="words">品优购快报</div>
                  <div className="more"><p>更多</p><i className="icon-ctrl2"></i></div>
                </div>
                <div className="list">
                  <ul>
                    <li>
                      <a href="#">
                        <span className="tips">[特惠]</span>
                        <span className="words">备战开学季 全民低价搬家购数码</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="tips">[公告]</span>
                        <span className="words">备品优稳占家电网购六成份额</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="tips">[特惠]</span>
                        <span className="words">百元中秋全品类礼券限量领</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="tips">[公告]</span>
                        <span className="words">上品优生鲜 向阳澄湖大闸蟹</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="tips">[特惠]</span>
                        <span className="words">每次享折扣品优品质游</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="b">
                <ul>
                  <li className="a1">
                    <div className="pic"></div>
                    <div className="name">话费</div>
                  </li>
                  <li className="a2">
                    <div className="pic"></div>
                    <div className="name">机票</div>
                    <div className="cut"></div>
                  </li>
                  <li className="a3">
                    <div className="pic"></div>
                    <div className="name">电影票</div>
                  </li>
                  <li className="a4">
                    <div className="pic"></div>
                    <div className="name">游戏</div>
                  </li>
                  <li className="b1">
                    <div className="pic"></div>
                    <div className="name">彩票</div>
                  </li>
                  <li className="b2">
                    <div className="pic"></div>
                    <div className="name">加油卡</div>
                  </li>
                  <li className="b3">
                    <div className="pic"></div>
                    <div className="name">酒店</div>
                  </li>
                  <li className="b4">
                    <div className="pic"></div>
                    <div className="name">火车票</div>
                  </li>
                  <li className="c1">
                    <div className="pic"></div>
                    <div className="name">众筹</div>
                  </li>
                  <li className="c2">
                    <div className="pic"></div>
                    <div className="name">理财</div>
                  </li>
                  <li className="c3">
                    <div className="pic"></div>
                    <div className="name">礼品卡</div>
                  </li>
                  <li className="c4">
                    <div className="pic"></div>
                    <div className="name">白条</div>
                  </li>
                </ul>
              </div>
              <div className="c"><a href="#"></a></div>
            </div>
          </div>
        </div>
        {/* good-goods */}
        <div className="good-goods w">
          <div className="left">
            <div className="pic"></div>
            <h3 className="words">今日推荐</h3>
          </div>
          <div className="right">
            <ul>
              <li className="a"></li>
              <li className="b"></li>
              <li className="c"></li>
              <li className="d"></li>
            </ul>
          </div>
        </div>
        {/* guest-you-like */}
        <div className="guest-you-like w">
          <div className="title">
            <div className="left">猜你喜欢</div>
            <div className="right">换一批<i className="icon-ctrl"></i></div>
          </div>
          <div className="goods">
            <ul>
              <li>
                <div className="pic a"></div>
                <div className="box">
                    <span className="another-box">
                      <div className="words">
                        阳光美包新款单肩包女<br/>
                        包时尚子母包四件套女
                      </div>
                      <br/>
                      <div className="price">¥116.00</div>
                    </span>
                </div>
              </li>
              <li>
                <div className="pic b"></div>
                <div className="box">
                    <span className="another-box">
                      <div className="words">
                        爱仕达 30CM炒锅不粘<br/>
                        锅NWG8330E电磁炉炒
                      </div>
                      <br/>
                      <div className="price">¥99.00</div>
                    </span>
                </div>
              </li>
              <li>
                <div className="pic c"></div>
                <div className="box">
                    <span className="another-box">
                      <div className="words">
                        捷波朗<br/>
                        （jabra）BOOSI劲步
                      </div>
                      <br/>
                      <div className="price">¥245.00</div>
                    </span>
                </div>
              </li>
              <li>
                <div className="pic d"></div>
                <div className="box">
                    <span className="another-box">
                      <div className="words">
                        欧普<br/>
                        JYLZ08面板灯平板灯铝
                      </div>
                      <br/>
                      <div className="price">¥238.00</div>
                    </span>
                </div>
              </li>
              <li>
                <div className="pic e"></div>
                <div className="box">
                    <span className="another-box">
                      <div className="words">
                        三星<br/>
                        JYLZ08面板灯平板灯铝
                      </div>
                      <br/>
                      <div className="price">¥649.00</div>
                    </span>
                </div>
              </li>
              <li>
                <div className="pic f"></div>
                <div className="box">
                    <span className="another-box">
                      <div className="words">
                        韩国所望<br/>
                        紧致湿润精华露400ml
                      </div>
                      <br/>
                      <div className="price">¥649.00</div>
                    </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* funny */}
        <div className="funny w">
          <div className="title">
            <div className="left">传智博客 · 有趣区</div>
          </div>
          <div className="container">
            <div className="a"><img src="upload/interest01.png"/></div>
            <div className="b">
              <div className="box">好东西</div>
              <div className="pics">
                <div className="pic1"><img src="upload/interest02.png"/></div>
                {/* TODO: 图有问题, 少1px */}
                <div className="pic2"><img src="upload/interest03.png"/></div>
              </div>
            </div>
            <div className="c">
              <div className="box">品牌街</div>
              <div className="pics">
                {/* TODO: 图有问题, 少1px */}
                <div className="top"><img src="upload/interest04.png"/></div>
                <div className="bottom">
                  <div className="left"><img src="upload/interest05.png"/></div>
                  <div className="right"><img src="upload/interest06.png"/></div>
                </div>
              </div>
            </div>
            <div className="d">
              <ul>
                <li className="a">
                  <div className="pic"></div>
                </li>
                <li className="b">
                  <div className="pic"></div>
                </li>
                <li className="c">
                  <div className="pic"></div>
                </li>
                <li className="d">
                  <div className="pic"></div>
                </li>
                <li className="e">
                  <div className="pic"></div>
                </li>
                <li className="f">
                  <div className="pic"></div>
                </li>
                <li className="g">
                  <div className="pic"></div>
                </li>
                <li className="h">
                  <div className="pic"></div>
                </li>
                <li className="i">
                  <div className="pic"></div>
                </li>
                <li className="j">
                  <div className="pic"></div>
                </li>
                <li className="k">
                  <div className="pic"></div>
                </li>
                <li className="l">
                  <div className="pic"></div>
                </li>
                <li className="m">
                  <div className="pic"></div>
                </li>
                <li className="n">
                  <div className="pic"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* floors */}
        <div className="floors w">
          <div className="floor">
            <div className="title">
              <div className="left">家用电器</div>
              <div className="right">
                <ul>
                  <li><a href="#" className="font-red">热门</a></li>
                  <li><a href="#">大家电</a></li>
                  <li><a href="#">生活电器</a></li>
                  <li><a href="#">厨房电器</a></li>
                  <li><a href="#">个护健康</a></li>
                  <li><a href="#">应季电器</a></li>
                  <li><a href="#">空气/净水</a></li>
                  <li><a href="#" style={{border: 'none'}}>新奇特</a></li>
                </ul>
              </div>
            </div>
            <div className="pics">
              <div className="pic pic1">
                <div className="top">
                  <ul>
                    <li>
                      <a className="box" href="#">节能减排</a>
                    </li>
                    <li>
                      <a className="box" href="#">4K电视</a>
                    </li>
                    <li>
                      <a className="box" href="#">空气净化器</a>
                    </li>
                    <li>
                      <a className="box" href="#">IH电饭煲</a>
                    </li>
                    <li>
                      <a className="box" href="#">滚筒洗衣机</a>
                    </li>
                    <li>
                      <a className="box" href="#">电热水器</a>
                    </li>
                  </ul>
                </div>
                <div className="bottom">
                  <img className="box" src="upload/floor-1-1.png"></img>
                </div>
              </div>
              <div className="pic pic2">
                <img className="box" src="upload/floor-1-b01.png"></img>
                <div className="buttons">
                  <ul>
                    <li className="select"></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="pic pic3">
                <img className="top" src="upload/floor-1-5.png"></img>
                <img className="bottom" src="upload/floor-1-6.png"></img>
              </div>
              <div className="pic pic4"><img src="upload/floor-1-4.png"/></div>
              <div className="pic pic5">
                <div className="top"><img src="upload/floor-1-5.png"/></div>
                <div className="bottom"><img src="upload/floor-1-6.png"/></div>
              </div>
            </div>

            <div className="icons">
              <ul>
                <li>
                  <div className="box"><img src="upload/brand_03.png"/></div>
                </li>
                <li>
                  <div className="box"><img src="upload/brand_05.png"/></div>
                </li>
                <li>
                  <div className="box"><img src="upload/brand_07.png"/></div>
                </li>
                <li>
                  <div className="box"><img src="upload/brand_09.png"/></div>
                </li>
                <li>
                  <div className="box"><img src="upload/brand_11.png"/></div>
                </li>
                <li>
                  <div className="box"><img src="upload/brand_13.png"/></div>
                </li>
                <li>
                  <div className="box"><img src="upload/brand_09.png"/></div>
                </li>
                <li>
                  <div className="box"><img src="upload/brand_03.png"/></div>
                </li>
                <li>
                  <div className="box"><img src="upload/brand_03.png"/></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="footer">
          <div className="w">
            {/* mod_service */}
            <div className="mod_service">
              <li className="a">
                <div className="left"></div>
                <div className="right">
                  <div className="title">正品保障</div>
                  <div className="words">正品保障，提供发票</div>
                </div>
              </li>
              <li className="b">
                <div className="left"></div>
                <div className="right">
                  <div className="title">正品保障</div>
                  <div className="words">正品保障，提供发票</div>
                </div>
              </li>
              <li className="c">
                <div className="left"></div>
                <div className="right">
                  <div className="title">正品保障</div>
                  <div className="words">正品保障，提供发票</div>
                </div>
              </li>
              <li className="d">
                <div className="left"></div>
                <div className="right">
                  <div className="title">正品保障</div>
                  <div className="words">正品保障，提供发票</div>
                </div>
              </li>
              <li className="e">
                <div className="left"></div>
                <div className="right">
                  <div className="title">正品保障</div>
                  <div className="words">正品保障，提供发票</div>
                </div>
              </li>
            </div>
            <div className="line"></div>
            {/* helps */}
            <div className="helps">
              <ul>
                <li>
                  <div className="title">购物指南</div>
                  <div className="words">
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
                  <div className="title">配送方式</div>
                  <div className="words">
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
                  <div className="title">支付方式</div>
                  <div className="words">
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
                  <div className="title">售后服务</div>
                  <div className="words">
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
                  <div className="title">特色服务</div>
                  <div className="words">
                    <ul>
                      <li><a href="#">夺宝岛</a></li>
                      <li><a href="#">DIY装机</a></li>
                      <li><a href="#">延保服务</a></li>
                      <li><a href="#">品优购E卡</a></li>
                      <li><a href="#">品优购通信</a></li>
                    </ul>
                  </div>
                </li>
                <li className="qr-code">
                  <div className="title">帮助中心</div>
                  <div className="pic">
                    <img src="imgs/qr-code.png"/>
                    <div className="smail-title">品优购客户端</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="line"></div>
            {/* copyright */}
            <div className="copyright">
              <div className="line1">关于我们 | 联系我们 | 联系客服 | 商家入驻 | 营销中心 | 手机品优购 | 友情链接 | 销售联盟 | 品优购社区 | 品优购公益 | English
                Site | Contact U
              </div>
              <div className="line2">地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100 邮箱:
                zhanghj+itcast.cn<br/>
                京ICP备08001421号京公网安备110108007702
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
