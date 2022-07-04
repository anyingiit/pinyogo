import React from "react";
import PropTypes from "prop-types";
import "../../css/base/base.scss"
import style from "../../css/commons/bread_crumb.scss"

interface Props {
  list: {
    value: string,
    href: string
  }[]
}

export default class BreadCrumb extends React.Component<Props> {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      href: PropTypes.string
    }))
  }
  static defaultProps = {
    list: [
      {
        value: '演示1',
        href: '#'
      }, {
        value: '演示2',
        href: '#'
      }, {
        value: '演示3',
        href: '#'
      }, {
        value: '演示4',
        href: '#'
      }
    ]
  }

  render() {
    return (
      <span className={style.container}>
        <ul>
            {
              this.props.list.map((item, index, array) => {
                const iconRight = (() => {
                  if (index != array.length - 1) {
                    return <i className={`icon-ctrl-left`}></i>
                  }
                })()
                return (
                  <li key={index}>
                    <a href={`${item.href}`}><span>{item.value}</span></a>
                    {iconRight}
                  </li>
                )
              })
            }
        </ul>
      </span>
    )
  }
}