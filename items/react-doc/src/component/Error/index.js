import React from 'react';
import ErrorBoundary from './ErrorBoundary';

/**
 * antd 中对该方法进行了支持
 * https://github.com/ant-design/ant-design/blob/master/components/alert/ErrorBoundary.tsx
 * https://ant.design/components/alert-cn/#Alert.ErrorBoundary
 * 使用 Alert.ErrorBoundary 包裹可能出错的组件即可
 * antd pro 中并未使用，可能这个特性的使用频率不高，我们在引用第三方组件时可以使用。
 */
class Bug extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 1,
    }
  }
  changeAge = (event) => {
    this.setState({
      age: event.target.value
    })
  }
  render() {
    if (this.state.age < 0) {
      throw new Error('年龄不能为负值');
    }
    return (<input onChange={this.changeAge} />)
  }
}

const Other = () => (<div>这没有错误</div>);

class Error extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
      <ErrorBoundary>
        <Bug />
      </ErrorBoundary>
      <Other/>
    </div>)
  }
}
export default Error;