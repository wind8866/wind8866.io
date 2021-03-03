import React from 'react';

class Children extends React.Component {
  static displayname = 'isChildren'
  constructor(props) {
    super(props);
    this.props.myRef.current = this;
  }
  queryAPI() {
    console.log('请求接口', this.props.url);
  }
  render() {
    return (
      <div>
        children
      </div>
    );
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  search = () => {
    // 父组件调用子组件的接口请求方法
    console.log(this.ref)
    this.ref.current.queryAPI();
  }
  render() {
    return (
      <>
        <h1 onClick={this.search}>搜索</h1>
        <Children url='/api/userList' myRef={this.ref} />
      </>
    );
  }
}

export default Parent;


