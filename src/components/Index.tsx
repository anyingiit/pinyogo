import React from "react";
import "../css/base/base.scss"
import style from "../css/index.module.scss"
import Shortcut from "./commons/Shortcut";
import Header from "./commons/Header";
import Nav from "./commons/Nav";
import Footer from "./commons/Footer";


export default class Index extends React.Component {
  render() {
    return (
      <div>
        {/* 顶部导航 */}
        <Shortcut/>
        {/* header */}
        <Header/>
        {/* nav */}
        <Nav defaultShowClassifyDetail={true}/>


        {/* TODO: 将所有硬编码的列表替换为使用数据遍历得到的列表 */}
        {/* main */}
        <div className={`w`}>
          {/* main */}
          <div className={style.main}>
            <div className={style.focus}>
              <ul>
                {/* 由于我们使用了webpack对静态资源处理的loader, 所以我们可以通过js引入图片 */}
                <li><a href="#"><img alt={`focus img`} src={require('../upload/img.png')}/></a></li>
              </ul>
              <ol>
                <li></li>
                <li className={style.select}></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ol>
              <div className={style.left}><i className={`icon-ctrl-left`}></i></div>
              <div className={style.right}><i className={`icon-ctrl-right`}></i></div>
            </div>
            <div className={style.newsflash}>
              <div className={style.a}>
                <div className={style.title}>
                  <div className={style.words}>品优购快报</div>
                  <div className={style.more}><p>更多</p><i className={`icon-ctrl-right`}></i></div>
                </div>
                <div className={style.list}>
                  <ul>
                    <li>
                      <a href="#">
                        <span className={style.tips}>[特惠]</span>
                        <span className={style.words}>备战开学季 全民低价搬家购数码</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className={style.tips}>[公告]</span>
                        <span className={style.words}>备品优稳占家电网购六成份额</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className={style.tips}>[特惠]</span>
                        <span className={style.words}>百元中秋全品类礼券限量领</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className={style.tips}>[公告]</span>
                        <span className={style.words}>上品优生鲜 向阳澄湖大闸蟹</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className={style.tips}>[特惠]</span>
                        <span className={style.words}>每次享折扣品优品质游</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={style.b}>
                <ul>
                  <li className={style.a1}>
                    <div className={style.pic}></div>
                    <div>话费</div>
                  </li>
                  <li className={style.a2}>
                    <div className={style.pic}></div>
                    <div>机票</div>
                    <div className={style.cut}></div>
                  </li>
                  <li className={style.a3}>
                    <div className={style.pic}></div>
                    <div>电影票</div>
                  </li>
                  <li className={style.a4}>
                    <div className={style.pic}></div>
                    <div>游戏</div>
                  </li>
                  <li className={style.b1}>
                    <div className={style.pic}></div>
                    <div>彩票</div>
                  </li>
                  <li className={style.b2}>
                    <div className={style.pic}></div>
                    <div>加油卡</div>
                  </li>
                  <li className={style.b3}>
                    <div className={style.pic}></div>
                    <div>酒店</div>
                  </li>
                  <li className={style.b4}>
                    <div className={style.pic}></div>
                    <div>火车票</div>
                  </li>
                  <li className={style.c1}>
                    <div className={style.pic}></div>
                    <div>众筹</div>
                  </li>
                  <li className={style.c2}>
                    <div className={style.pic}></div>
                    <div>理财</div>
                  </li>
                  <li className={style.c3}>
                    <div className={style.pic}></div>
                    <div>礼品卡</div>
                  </li>
                  <li className={style.c4}>
                    <div className={style.pic}></div>
                    <div>白条</div>
                  </li>
                </ul>
              </div>
              <div className={style.c}><a href="#"></a></div>
            </div>
          </div>
        </div>
        {/* good-goods */}
        <div className={[style.goodGoods, 'w'].join(' ')}>
          <div className={style.left}>
            <div className={style.pic}></div>
            <h3 className={style.words}>今日推荐</h3>
          </div>
          <div className={style.right}>
            <ul>
              <li className={style.a}></li>
              <li className={style.b}></li>
              <li className={style.c}></li>
              <li className={style.d}></li>
            </ul>
          </div>
        </div>
        {/* guest-you-like */}
        <div className={[style.guestYouLike, 'w'].join(' ')}>
          <div className={style.title}>
            <div className={style.left}>猜你喜欢</div>
            <div className={style.right}>换一批<i className={`icon-ctrl-left`}></i></div>
          </div>
          <div className={style.goods}>
            <ul>
              <li>
                <div className={style.imgBox}>
                  <img alt={[style.guestYouLike, style.pic].join(' ')}
                       className={[style.pic, style.a].join(' ')} src={require("../upload/like_01.png")}></img>
                </div>
                <div className={style.box}>
                    <span>
                      <div className={style.words}>
                        阳光美包新款单肩包女<br/>
                        包时尚子母包四件套女
                      </div>
                      <br/>
                      <div className={style.price}>¥116.00</div>
                    </span>
                </div>
              </li>
              <li>
                <div className={style.imgBox}>
                  <img className={[style.pic, style.a].join(' ')} alt={`guest-you-like item pic`}
                       src={require("../upload/like_02.png")}></img>
                </div>
                <div className={style.box}>
                    <span>
                      <div className={style.words}>
                        爱仕达 30CM炒锅不粘<br/>
                        锅NWG8330E电磁炉炒
                      </div>
                      <br/>
                      <div className={style.price}>¥99.00</div>
                    </span>
                </div>
              </li>
              <li>
                <div className={style.imgBox}>
                  <img className={[style.pic, style.a].join(' ')} alt={`guest-you-like item pic`}
                       src={require("../upload/like_03.png")}></img>
                </div>
                <div className={style.box}>
                    <span>
                      <div className={style.words}>
                        捷波朗<br/>
                        （jabra）BOOSI劲步
                      </div>
                      <br/>
                      <div className={style.price}>¥245.00</div>
                    </span>
                </div>
              </li>
              <li>
                <div className={style.imgBox}>
                  <img className={[style.pic, style.a].join(' ')} alt={`guest-you-like item pic`}
                       src={require("../upload/like_04.png")}></img>
                </div>
                <div className={style.box}>
                    <span>
                      <div className={style.words}>
                        欧普<br/>
                        JYLZ08面板灯平板灯铝
                      </div>
                      <br/>
                      <div className={style.price}>¥238.00</div>
                    </span>
                </div>
              </li>
              <li>
                <div className={style.imgBox}>
                  <img alt={`guest-you-like item pic`} className={[style.pic, style.a].join(' ')}
                       src={require("../upload/like_05.png")}></img>
                </div>
                <div className={style.box}>
                    <span>
                      <div className={style.words}>
                        三星<br/>
                        JYLZ08面板灯平板灯铝
                      </div>
                      <br/>
                      <div className={style.price}>¥649.00</div>
                    </span>
                </div>
              </li>
              <li>
                <div className={style.imgBox}>
                  <img alt={`guest-you-like item pic`} className={[style.pic, style.a].join(' ')}
                       src={require("../upload/like_06.png")}></img>
                </div>
                <div className={style.box}>
                    <span>
                      <div className={style.words}>
                        韩国所望<br/>
                        紧致湿润精华露400ml
                      </div>
                      <br/>
                      <div className={style.price}>¥649.00</div>
                    </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* funny */}
        <div className={[style.funny, 'w'].join(' ')}>
          <div className={style.title}>
            <div className={style.left}>传智博客 · 有趣区</div>
          </div>
          <div className={style.container}>
            <div className={style.a}><img alt={`interest pic1`} src={require("../upload/interest01.png")}/></div>
            <div className={style.b}>
              <div className={style.box}>好东西</div>
              <div className={style.pics}>
                <div className={style.pic1}><img alt={`interest pic2`} src={require("../upload/interest02.png")}/></div>
                {/* TODO: 图有问题, 少1px */}
                <div className={style.pic2}><img alt={`interest pic3`} src={require("../upload/interest03.png")}/></div>
              </div>
            </div>
            <div className={style.c}>
              <div className={style.box}>品牌街</div>
              <div className={style.pics}>
                {/* TODO: 图有问题, 少1px */}
                <div className={style.top}><img alt={`interest pic4`} src={require("../upload/interest04.png")}/></div>
                <div className={style.bottom}>
                  <div className={style.left}><img alt={`interest pic5`} src={require("../upload/interest05.png")}/>
                  </div>
                  <div className={style.right}><img alt={`interest pic6`} src={require("../upload/interest06.png")}/>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.d}>
              <ul>
                <li className={style.a}>
                  <div className={style.pic}></div>
                </li>
                <li className={style.b}>
                  <div className={style.pic}></div>
                </li>
                <li className={style.c}>
                  <div className={style.pic}></div>
                </li>
                <li className={style.d}>
                  <div className={style.pic}></div>
                </li>
                <li className={style.e}>
                  <div className={style.pic}></div>
                </li>
                <li className={style.f}>
                  <div className={style.pic}></div>
                </li>
                <li className={style.g}>
                  <div className={style.pic}></div>
                </li>
                <li className={style.h}>
                  <div className={style.pic}></div>
                </li>
                <li className={style.i}>
                  <div className={style.pic}></div>
                </li>
                <li className={style.j}>
                  <div className={style.pic}></div>
                </li>
                <li className={style.k}>
                  <div className={style.pic}></div>
                </li>
                <li className={style.l}>
                  <div className={style.pic}></div>
                </li>
                <li className={style.m}>
                  <div className={style.pic}></div>
                </li>
                <li className={style.n}>
                  <div className={style.pic}></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* floors */}
        <div className={[style.floors, 'w'].join(' ')}>
          <div className={style.floor}>
            <div className={style.title}>
              <div className={style.left}>家用电器</div>
              <div className={style.right}>
                <ul>
                  <li><a href="#" className={`font-red`}>热门</a></li>
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
            <div className={style.pics}>
              <div className={[style.pic, style.pic1].join(' ')}>
                <div className={style.top}>
                  <ul>
                    <li>
                      <a className={style.box} href="#">节能减排</a>
                    </li>
                    <li>
                      <a className={style.box} href="#">4K电视</a>
                    </li>
                    <li>
                      <a className={style.box} href="#">空气净化器</a>
                    </li>
                    <li>
                      <a className={style.box} href="#">IH电饭煲</a>
                    </li>
                    <li>
                      <a className={style.box} href="#">滚筒洗衣机</a>
                    </li>
                    <li>
                      <a className={style.box} href="#">电热水器</a>
                    </li>
                  </ul>
                </div>
                <div className={style.bottom}>
                  <img className={style.box} alt={`floor pic`} src={require("../upload/floor-1-1.png")}></img>
                </div>
              </div>
              <div className={[style.pic, style.pic2].join(' ')}>
                <img className={style.box} alt={`floor pic2`} src={require("../upload/floor-1-b01.png")}></img>
                <div className={style.buttons}>
                  <ul>
                    <li className={style.select}></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className={[style.pic, style.pic3].join(' ')}>
                <img className={style.top} alt={`floor pic3-top`} src={require("../upload/floor-1-5.png")}></img>
                <img className={style.bottom} alt={`floor pic3-bottom`} src={require("../upload/floor-1-6.png")}></img>
              </div>
              <div className={[style.pic, style.pic4].join(' ')}><img alt={`floor pic4`}
                                                                      src={require("../upload/floor-1-4.png")}/></div>
              <div className={[style.pic, style.pic5].join(' ')}>
                <div className={style.top}><img alt={`floor pic5 top`} src={require("../upload/floor-1-5.png")}/></div>
                <div className={style.bottom}><img alt={`floor pic5 bottom`} src={require("../upload/floor-1-6.png")}/>
                </div>
              </div>
            </div>

            <div className={style.icons}>
              <ul>
                <li>
                  <div className={style.box}><img alt={`brand1`} src={require("../upload/brand_03.png")}/></div>
                </li>
                <li>
                  <div className={style.box}><img alt={`brand2`} src={require("../upload/brand_05.png")}/></div>
                </li>
                <li>
                  <div className={style.box}><img alt={`brand3`} src={require("../upload/brand_07.png")}/></div>
                </li>
                <li>
                  <div className={style.box}><img alt={`brand4`} src={require("../upload/brand_09.png")}/></div>
                </li>
                <li>
                  <div className={style.box}><img alt={`brand5`} src={require("../upload/brand_11.png")}/></div>
                </li>
                <li>
                  <div className={style.box}><img alt={`brand6`} src={require("../upload/brand_13.png")}/></div>
                </li>
                <li>
                  <div className={style.box}><img alt={`brand7`} src={require("../upload/brand_09.png")}/></div>
                </li>
                <li>
                  <div className={style.box}><img alt={`brand8`} src={require("../upload/brand_03.png")}/></div>
                </li>
                <li>
                  <div className={style.box}><img alt={`brand9`} src={require("../upload/brand_03.png")}/></div>
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
