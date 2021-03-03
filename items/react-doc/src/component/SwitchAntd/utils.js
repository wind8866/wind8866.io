import React from 'react';

function useMergedState(defaultStateValue, option) {
  const { defaultValue, value, onChange } = option || {};
  const [innerValue, setInnerValue] = React.useState(() => {
    if (value !== undefined) {
      return value;
    }
    if (defaultValue !== undefined) {
      return typeof defaultValue === 'function'
        ? (defaultValue)()
        : defaultValue;
    }
    return typeof defaultStateValue === 'function'
      ? (defaultStateValue)()
      : defaultStateValue;
  });

  function triggerChange(newValue) {
    setInnerValue(newValue);
  }

  let mergedValue = value !== undefined ? value : innerValue;
  // 这里不懂什么意思：https://github.com/react-component/util/blob/master/src/hooks/useMergedState.ts#L40
  return [mergedValue, triggerChange];
}

export {
  useMergedState
}