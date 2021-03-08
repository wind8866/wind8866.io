import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// 最基础
import Clock from './component/Clock';

// 所有设置 this 的方式
import Toggle from './component/Toggle';

// 探索 react 中 this 问题的最佳实践
import This from './component/This';

// React 教程中的代码实现
import Product from './component/Product';

// Context 的实现代码
import Context from './component/Context';

// 捕获错误
import Error from './component/Error/index';

// ref的几种使用方式
import Ref from './component/Ref';

// 父组件调用子组件的方法
import ParentUseChildFun from './component/ParentUseChildFun';

// 参数类型检查
import PropTypes from './component/PropTypes';

// 渲染到父节点以外的节点
import Portals from './component/Portals';

// HOC
import HOC from './component/HOC';

// 简单的hook
import Hook from './component/Hook/index';

// 自己实现 antd 的 Button 组件
import SwitchTest from './component/Switch/test';

// antd 的 Button 组件
import SwitchAntd from './component/SwitchAntd/test';

// Context 综合实例（参考antd）：
import { Size, prefixCls as PrefixCls } from './tools/index';
import TopBar from './view/Topbar';

const App = () => {
  const [size, setSize] = useState('default');
  const onChangeSize = () => {
    const newSize = size === 'default' ? 'small' : 'default';
    setSize(newSize);
  }
  return <HOC />
  return (<Size.Provider value={size}>
    <PrefixCls.Provider value="ant-">
      <TopBar
        checked={size === 'small'}
        onChange={onChangeSize}
      />
      <SwitchAntd />
    </PrefixCls.Provider>
    {/* <SwitchTest/> */}
  </Size.Provider>)
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);