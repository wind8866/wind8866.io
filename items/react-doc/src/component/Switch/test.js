import React from 'react';
import Switch from './index';

class SwitchTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    }
  }

  onChange = (checked, event) => {
    console.log(checked, event);
    this.setState({
      checked,
    });
  }

  render() {
    const {
      checked
    } = this.state;

    const disabled = true;
    return (<div>
      <Switch
        checked={checked}
        className="my-switch"
        onChange={this.onChange}
      />
    </div>)
  }
}

export default SwitchTest;