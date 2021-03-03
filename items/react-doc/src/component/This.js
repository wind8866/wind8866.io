/**
 * 探讨 this
 */

import React from 'react';

function Button(props) {
    return (
        <button onClick={props.onClick}>{props.children}</button>
    )
}
function ButtonArgs(props) {
  return (
      <button onClick={props.onClick.bind(null, props.type)}>{props.children}</button>
  )
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }
    push = (e) => {
      console.log(e, this)
    }
    pushArgs = (args, e) => {
      console.log(e, this, args)
    }
    render() {
        return (<div>
            <Button type="save" onClick={this.push}>暂存</Button>
            <ButtonArgs type="submit" onClick={this.pushArgs}>提交</ButtonArgs>
        </div>)
    }
}

export default Toggle;
// 对比
// 普通函数：1、自动传递 event，2、this 指向执行时环境，经常 undefined，3、传递参数需要 bind
// 箭头函数：1、手动传递 event，2、this 指向定义时环境，不会出错3、可直接传递参数，但中间过程要不间断传递
// 结论：在传递时使用普通函数，因为不用重复绑定，在接收时使用箭头函数，防止 this 为 undefined

// 不传第二个参数时，父组件使用箭头函数，这样this和event都能保证
// 传入其他参数时，子组件使用bind绑定要传入的参数(null, value)。父组件接收时是(value, event)
// 尽量避免在render中使用箭头函数：1、箭头函数是匿名函数，每次都要重新绑定2、匿名函数需要接收并传递子组件的event