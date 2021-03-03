// https://github.com/react-component/switch/blob/master/src/index.tsx
import * as React from 'react';
import classNames from 'classnames';
import './switch-rc.css';
import { useMergedState } from './utils';


const Switch = React.forwardRef((props, ref) => {
  const {
    prefixCls = 'rc-switch',
    loadingIcon,
    disabled,
    checkedChildren,
    unCheckedChildren,
    checked,
    defaultChecked,
    className,
    onChange,
    onClick,
  } = props;

  const [innerChecked, setInnerChecked] = useMergedState(false, {
    value: checked,
    defaultValue: defaultChecked,
  });

  function triggerChange(newChecked, event) {
    let mergedChecked = innerChecked;

    if (!disabled) {
      mergedChecked = newChecked;
      setInnerChecked(mergedChecked);
      onChange?.(mergedChecked, event);
    }

    return mergedChecked;
  }

  function onInternalClick(e) {
    const ret = triggerChange(!innerChecked, e);
    // [Legacy] trigger onClick with value
    onClick?.(ret, e);
  }

  const switchClassName = classNames(prefixCls, className, {
    [`${prefixCls}-checked`]: innerChecked,
    [`${prefixCls}-disabled`]: disabled,
  });

  const onInternalKeyDown = (event) => {
    if (event.keyCode === 39) {
      triggerChange(true, event)
    } else if (event.keyCode === 37) {
      triggerChange(false, event)
    } 
  }
  return (
    <button
      ref={ref}
      className={switchClassName}
      type="button"
      role="switch"
      disabled={disabled}
      onClick={onInternalClick}
      onKeyDown={onInternalKeyDown}
    >
      {loadingIcon}
      <span className={`${prefixCls}-inner`}>
        {innerChecked ? checkedChildren : unCheckedChildren}
      </span>
    </button>
  );
});

Switch.displayName = 'RC-Switch';

export default Switch;