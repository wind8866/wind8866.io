import React from 'react';
import SwitchAntd from './index';

class SwitchTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    }
    this.ref = React.createRef();
  }
  componentDidMount() {
    console.log(this.ref)
  }
  onChange = (value, event) => {
    this.setState({
      checked: value
    })
  }
  render() {
    const {
      checked
    } = this.state;
    return (<div>
      <SwitchAntd
        loading={false}
        checked={checked}
        onChange={this.onChange}
        ref={this.ref}
      />
    </div>)
  }
}

export default SwitchTest;