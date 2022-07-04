import React from "react";
import {string} from "prop-types";
import "../../css/base/base.scss"
import style from "../../css/commons/logo.module.scss"

interface Props {
  smallTitle: string,
  smallPic: string
}

// React.Component定义时能够指定两个泛型参数, 第一个是Props的类型(运行检查this.props), 二个是对this.state的类型检查
// 指定父类React.Component泛型第一个参数(即对props的检查)的泛型类型为自定义类型Props, 父类内部会创建绑定到实例的this.props, 这样在子类(即Logo)中使用时this.props就会拥有类型检查, 类型为我们一开始给父类指定的泛型Props
// 另外一个注意的是, 传入的Props是编译时检查类型, 而我们在Log类中定义的静态属性propTypes是运行时检查
export default class Logo extends React.Component<Props, any> {
  static propTypes = {
    smallTitle: string,
    smallPic: string
  }
  static defaultProps = {
    smallTitle: undefined,
    smallPic: undefined // expect require("../../imgs/secKill_03.png") 传入的必须是require图片的结果
  }

  render() {
    // console.log(this.props)
    if (this.props.smallTitle) {
      return (
        <h1 className={style.Logo}>
          <img alt={`main logo`} src={require("../../imgs/logo.png")} className={style.logo}/>
          <span className={style.smallTitle}>{this.props.smallTitle}</span>
        </h1>
      )
    } else if (this.props.smallPic) {
      return (
        <h1 className={style.Logo}>
          <img alt={`main logo`} src={require("../../imgs/logo.png")} className={style.logo}/>
          <span className={style.line}></span>
          <img alt={`smail pic`} src={this.props.smallPic}/>
        </h1>
      )
    } else {
      return (
        <h1 className={style.Logo}>
          <img alt={`main logo`} src={require("../../imgs/logo.png")} className={style.logo}/>
        </h1>
      )
    }
  }
}