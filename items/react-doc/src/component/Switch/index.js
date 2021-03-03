import React from 'react';
import classnames from 'classnames';
import './index.css';

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  onClick = (event) => {
    if (this.props.disabled || this.props.loading) {
      return
    }
    const checked = !this.props.checked;
    this.props.onChange && this.props.onChange(checked, event);
    this.props.onClick && this.props.onClick(checked, event);
  }
  componentDidMount() {
    // this.ref.focuse();
  }

  render() {
    const {
      checked,
      defaultChecked,
      disabled,
      checkedChildren,
      unCheckedChildren,
      className,
      size,
      loading,
    } = this.props;
    const {
      onClick,
    } = this;

    let isChecked = defaultChecked || checked;
    const butCls = classnames({
      switch: true,
      'switch-checked': isChecked,
      disabled: disabled || loading,
      [className]: className || false,
      'switch-small': size === 'small',
      loading
    })

    const loadingDom = (<span class="anticon anticon-loading anticon-spin ant-switch-loading-icon">
    <svg viewBox="0 0 1024 1024" focusable="false" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path></svg>
  </span>);

    return (<React.Fragment>
      <button
        ref={this.ref}
        onClick={(event) => onClick(event)}
        className={butCls}
      >
        <span className="switch-inner">
          {isChecked ? checkedChildren : unCheckedChildren}
        </span>
        <div className="switch-handle">
        {loading && loadingDom}
        </div>
      </button>
    </React.Fragment>)
  }
}

Switch.defaultProps = {
  defaultChecked: false,
  checked: false,
  disabled: false,
  size: 'default',
  loading: false,
};

export default Switch;