import React from 'react';
import PropTypes, { string } from 'prop-types';

class Cat extends React.Component {
  // 方式二
  static defaultProps = {
    name: 'Tom'
  }
  render() {
    const mouse = this.props.mouse;
    return (
      <span style={{ position: 'absolute', left: mouse.x, top: mouse.y }} >
        🐱
        {this.props.name}
      </span>
    );
  }
}
// 方式一
Cat.propTypes = {
  mouse: PropTypes.object
}

const CatWrap = () => {
  return (<>
    <Cat mouse={120} />
    <PureFunction name="12" firstName={13} />
  </>)
}

const PureFunction = (props) => {
  return <div style={{marginTop: '3em'}}>age: {props.age}</div>
}
PureFunction.defaultProps = {
  age: 12
}
PureFunction.propTypes = {
  firstName: string
}

export default CatWrap;


