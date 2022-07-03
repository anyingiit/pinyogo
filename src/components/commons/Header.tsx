import React from "react";
import PropTypes from 'prop-types'
import "../../css/base/base.css"
import "../../css/commons/header.css"
import Logo from "./Logo";

// header
interface Props {
    showLogo: boolean,
    showSearch: boolean,
    showHotWords: boolean,
    showShoppingCard: boolean,
    logoSmailTitle: string,
    logoSmailPic: string
}

export default class Header extends React.Component<Props, any> {
    static propTypes = {
        showLogo: PropTypes.bool,
        showSearch: PropTypes.bool,
        showHotWords: PropTypes.bool,
        showShoppingCard: PropTypes.bool,
        logoSmailTitle: PropTypes.string,
        logoSmailPic: PropTypes.string
    }
    static defaultProps = {
        showLogo: true,
        showSearch: true,
        showHotWords: true,
        showShoppingCard: true,
        logoSmailTitle: undefined,
        logoSmailPic: undefined
    }

    render() {
        return (
            <div className="header w">
                {/* logo */}
                <div className="Component-Logo" style={this.props.showLogo ? {display: 'block'} : {display: 'none'}}>
                    <Logo smallPic={this.props.logoSmailPic} smallTitle={this.props.logoSmailTitle}/>
                </div>
                {/* search */}
                <div className="search" style={this.props.showSearch ? {display: 'block'} : {display: 'none'}}>
                    <input type="text" placeholder="请搜索"/>
                    <button>搜索</button>
                </div>
                {/* hot-words */}
                <div className="hot-words" style={this.props.showHotWords ? {display: 'block'} : {display: 'none'}}>
                    <a href="#" className="font-red">优惠购首发</a>
                    <a href="#">亿元优惠</a>
                    <a href="#">9.9元团购</a>
                    <a href="#">每满99减30</a>
                    <a href="#">办公用品</a>
                    <a href="#">电脑</a>
                    <a href="#">通信</a>
                </div>
                {/* shopping-card */}
                <div className="shopping-card"
                     style={this.props.showShoppingCard ? {display: 'block'} : {display: 'none'}}>
                    <i className="icon-cart"/>我的购物车<i className="icon-ctrl-right"/>
                    <i className="count">8</i>
                </div>
            </div>
        )
    }
}