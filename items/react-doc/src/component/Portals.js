import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.modalDom = document.createElement('div');
    this.modalDom.id = 'modal';
    document.body.appendChild(this.modalDom);
  }

  componentWillUnmount() {
    document.body.removeChild(document.querySelector('#modal'));
  }
  onClose = () => {
    // 这里演示了直接删除dom，也可以只是隐藏，antd就是这么干的
    this.modalDom.parentElement.removeChild(this.modalDom);
  }
  
  render() {
    const style = {
      position: 'fixed',
      top: '20%',
      left: '50%',
      marginLeft: '-210px',
      width: '420px',
      height: '320px',
      border: '1px solid #aaf',
      zIndex: 1000,
      padding: '1em'
    };
    const closeStyle = {
      position: 'absolute',
      top: '0.5em',
      right: '0.5em',
      cursor: 'pointer',
      background: '#eee',
      height: '1.5em',
      width: '1.5em',
      textAlign: 'center',
      borderRadius: '50%'
    }

    return ReactDOM.createPortal(
      <div style={style}>
        <div onClick={this.onClose} style={closeStyle}>x</div>
        {this.props.children}
      </div>,
      document.querySelector('#modal')
    );
  }
}
class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    }
  }
  // 只要在React的DOM树中存在父子关系，父元素即可以捕获子元素触发的冒泡事件
  onClick = (e) =>  {
    const target = e.target;
    console.log(target, '被点击')
    if (target.tagName.toLowerCase() === 'button') {
      this.setState({
        index: ++this.state.index,
      });
    }
  }
  render() {
    return <div onClick={this.onClick}>
      Index: {this.state.index}
      <Modal>
        <button>add Index</button>
      </Modal>
    </div>;
  }
}

export default Article;
