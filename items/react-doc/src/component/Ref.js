import React from 'react';

function CustomTextInput(props) {
  return (
  <div>
    <input ref={props.inputRef} />
  </div>
  );
}

class Ref extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.customInputRef = null;
    this.username = null;
    // ref赋值参数会主动调用
    this.callbackRef = (element) => {
      console.log(element);
      this.username = element;
    }
  }
  getUserName = () => {
    console.log(this.username.value)
  }
  componentDidMount() {
    console.log(this.myRef, this.customInputRef);
    this.myRef.current.focus()
  }
  render() {
    return (<div>
      <input ref={this.myRef}/>
      <input id="name" ref={this.callbackRef} />
      <button onClick={this.getUserName}>Get User Name</button>

      {/* 将子组件的元素传递给父组件最简单的方法 */}
      <CustomTextInput inputRef={el => this.customInputRef = el}/>
    </div>)
  }
}

export default Ref;