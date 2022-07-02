import React from "react";
import {string} from "prop-types";
import "../../css/base/base.css"
import "../../css/commons/logo.css"

export default class Logo extends React.Component {
  static propTypes = {
    smallTitle: string,
    smallPic: string
  }
  static defaultProps = {
    smallTitle: undefined,
    smallPic: undefined // expect require("../../imgs/secKill_03.png") 传入的必须是require图片的结果
  }

  render() {
    console.log(this.props)
    if (this.props.smallTitle) {
      return (
        <h1 className={`Logo`}>
          <img alt={`main logo`} src={require("../../imgs/logo.png")} className={`logo`}/>
          <span className={`smallTitle`}>{this.props.smallTitle}</span>
        </h1>
      )
    } else if (this.props.smallPic) {
      return (
        <h1 className={`Logo`}>
          <img alt={`main logo`} src={require("../../imgs/logo.png")} className={`logo`}/>
          <span className={`line`}></span>
          <img alt={`smail pic`} src={this.props.smallPic}/>
        </h1>
      )
    } else {
      return (
        <h1 className={`Logo`}>
          <img alt={`main logo`} src={require("../../imgs/logo.png")} className={`logo`}/>
        </h1>
      )
    }
  }
}