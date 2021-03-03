import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('只有改变了才会更新', count);
    document.title = `You clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    const loop = setInterval(() => console.log(count), 1000);
    return () => {
      // 解除副作用
      clearInterval(loop);
    }
  });// 这里传空数组始终返回0

  return (<div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
  </div>)
}

export default Example;