import React from 'react';
import Switch from '../component/Switch/index';

function TopBar(props) {
  const topBarStyle = {
    backgroundColor: '#eee',
    padding: 30,
    marginBotton: 30
  }
  return (<div style={topBarStyle}>
    Size is Small: <Switch
      checked={props.checked}
      onChange={props.onChange}
    />
  </div>)
}

export default TopBar;