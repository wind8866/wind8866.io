/**
 * 探讨 this
 */

import React from 'react';

function Button(props) {
    return (
        <button onClick={(e) => props.toggle(1, e)}>toggle</button>
    )
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }
    // 三种方法设置this
    // 1、在回调使用箭头函数（babel的实验特性）
    // 2、bind绑定this：可绑定参数
    // 3、在JSX中使用箭头函数：可绑定参数，event必须显示的传入
    // 4、在 constructor 中绑定 this
    toggle = (index, e) => {
        console.log(index, e);
        this.setState({
            show: !this.state.show
        })        
    }
    render() {
        return (<div>
            {this.state.show ? 'show' : 'hide'}
            <Button
                toggle={this.toggle}
            />
        </div>)
    }
}

export default Toggle;