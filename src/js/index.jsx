import React from "react";
import "../css/base/base.css"
import "../css/index.css"
import Shortcut from "./commons/shortcut";
import Header from "./commons/header";
import Nav from "./commons/nav";
import Footer from "./commons/footer";


export default class Index extends React.Component {
  render() {
    return (
      <div>
        {/* 顶部导航 */}
        <Shortcut/>
        {/* header */}
        <Header/>
        {/* nav */}
        <Nav/>


        {/* main */}
        <div className="w">
          {/* main */}
          <div className="main">
            <div className="focus">
              <ul>
                <li><a href="#"><img src={require('../upload/img.png')}/></a></li>
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
                <div className="img-box">
                  <img className="pic a" src={require("../upload/like_01.png")}></img>
                </div>
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
                <div className="img-box">
                  <img className="pic a" src={require("../upload/like_02.png")}></img>
                </div>
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
                <div className="img-box">
                  <img className="pic a" src={require("../upload/like_03.png")}></img>
                </div>
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
                <div className="img-box">
                  <img className="pic a" src={require("../upload/like_04.png")}></img>
                </div>
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
                <div className="img-box">
                  <img className="pic a" src={require("../upload/like_05.png")}></img>
                </div>
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
                <div className="img-box">
                  <img className="pic a" src={require("../upload/like_06.png")}></img>
                </div>
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
            <div className="a"><img src={require("../upload/interest01.png")}/></div>
            <div className="b">
              <div className="box">好东西</div>
              <div className="pics">
                <div className="pic1"><img src={require("../upload/interest02.png")}/></div>
                {/* TODO: 图有问题, 少1px */}
                <div className="pic2"><img src={require("../upload/interest03.png")}/></div>
              </div>
            </div>
            <div className="c">
              <div className="box">品牌街</div>
              <div className="pics">
                {/* TODO: 图有问题, 少1px */}
                <div className="top"><img src={require("../upload/interest04.png")}/></div>
                <div className="bottom">
                  <div className="left"><img src={require("../upload/interest05.png")}/></div>
                  <div className="right"><img src={require("../upload/interest06.png")}/></div>
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
                  <img className="box" src={require("../upload/floor-1-1.png")}></img>
                </div>
              </div>
              <div className="pic pic2">
                <img className="box" src={require("../upload/floor-1-b01.png")}></img>
                <div className="buttons">
                  <ul>
                    <li className="select"></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="pic pic3">
                <img className="top" src={require("../upload/floor-1-5.png")}></img>
                <img className="bottom" src={require("../upload/floor-1-6.png")}></img>
              </div>
              <div className="pic pic4"><img src={require("../upload/floor-1-4.png")}/></div>
              <div className="pic pic5">
                <div className="top"><img src={require("../upload/floor-1-5.png")}/></div>
                <div className="bottom"><img src={require("../upload/floor-1-6.png")}/></div>
              </div>
            </div>

            <div className="icons">
              <ul>
                <li>
                  <div className="box"><img src={require("../upload/brand_03.png")}/></div>
                </li>
                <li>
                  <div className="box"><img src={require("../upload/brand_05.png")}/></div>
                </li>
                <li>
                  <div className="box"><img src={require("../upload/brand_07.png")}/></div>
                </li>
                <li>
                  <div className="box"><img src={require("../upload/brand_09.png")}/></div>
                </li>
                <li>
                  <div className="box"><img src={require("../upload/brand_11.png")}/></div>
                </li>
                <li>
                  <div className="box"><img src={require("../upload/brand_13.png")}/></div>
                </li>
                <li>
                  <div className="box"><img src={require("../upload/brand_09.png")}/></div>
                </li>
                <li>
                  <div className="box"><img src={require("../upload/brand_03.png")}/></div>
                </li>
                <li>
                  <div className="box"><img src={require("../upload/brand_03.png")}/></div>
                </li>
              </ul>
            </div>
          </div>
        </div>


        {/* footer */}
        <Footer/>
      </div>
    )
  }
}
