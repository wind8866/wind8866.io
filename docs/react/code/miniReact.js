
// 0
const element = <h1 title="foo">Hello</h1>
const container = document.getElementById("root")
ReactDOM.render(element, container)


const element = React.create(
  'h1',
  {
    title: 'foo'
  },
  'Hello',
);
const container = document.getElementById("root")
ReactDOM.render(element, container)


const element = {
  type: 'h1',
  props: {
    title: 'foo',
    children: 'Hello'
  }
};
const container = document.getElementById("root")

const h1 = document.createElement('h1');
h1.title = 'foo';
const text = document.createTextNode('');
text.nodeValue = element.props.children;

h1.appendChild(text);
container.appendChild(h1);

// ########################################
// 1
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)
const container = document.getElementById("root")
ReactDOM.render(element, container)



const element = React.create(
  'div',
  {
    id: 'foo'
  },
  React.create('a', null, 'bar'),
  React.create('b', null, null),
)
const container = document.getElementById("root")
ReactDOM.render(element, container)

// ########################################
// 2
const Didact = {
  createTextElement(node) {
    return {
      type: 'TEXT_ELEMENT',
      props: {
        nodeValue: node,
        children: [],
      }
    }
  },
  createElement(type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        children: children.map(child => typeof child === 'object' ? child : this.createTextElement(child))
      }
    }
  },
  render(element, container) {
    const dom = element.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(element.type);
    for ([key, value] of Object.entries(element.props)) {
      if (key === 'children') continue;
      dom[key] = value;
    }
    element.props.children.forEach(child => this.render(child, dom))

    container.appendChild(dom);
  },
}
/** @jsx Didact.createElement */
const element = Didact.createElement(
  'div',
  {
    id: 'foo'
  },
  Didact.createElement('a', null, 'bar'),
  Didact.createElement('b'),
)
const container = document.getElementById("root")
Didact.render(element, container)

// ########################################
// 3
// 下一个单元任务
let nextUnitOfWork = null
​
function workLoop(deadline) {
  // 应该暂停？
  let shouldYield = false
  // 如果有下一个任务且当前不应该暂停执行
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(
      nextUnitOfWork
    )
    // 将要完成 = 截止时间.剩余时间很少？（浏览器需要控制之前还需要多长时间）
    shouldYield = deadline.timeRemaining() < 1
  }
  requestIdleCallback(workLoop)
}
​
// 向浏览器发起请求，空闲时回调
requestIdleCallback(workLoop)
​
// 执行工作单元，返回下一个工作单元
function performUnitOfWork(nextUnitOfWork) {
  // TODO
}

// ########################################
// 4
if (node === root) {
  // 遍历完成
  return;
}
if (node.child) {
  head = node.child;
} else if (node.sibling) {
  head = node.sibling;
} else if (node.parent.sibling) {
  head = node.parent.sibling;
} else {
  // 这里不进行操作，只是向上查找，直到找到父节点的兄弟节点或者找到根
  head = node.parent;
}


const Didact = {
  createTextElement(node) {
    return {
      type: 'TEXT_ELEMENT',
      props: {
        nodeValue: node,
        children: [],
      }
    }
  },
  createElement(type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        children: children.map(child => typeof child === 'object' ? child : this.createTextElement(child))
      }
    }
  },
  createDom(fiber) {
    const dom = fiber.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(fiber.type);
    for ([key, value] of Object.entries(fiber.props)) {
      if (key === 'children') continue;
      dom[key] = value;
    }
    return dom;
  },
  render(element, container) {
    nextUnitOfWork = {
      dom: container,
      props: {
        children: [element],
      },
    }
  }
}

let nextUnitOfWork = null
function workLoop(deadline) {
  let shouldYield = false
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(
      nextUnitOfWork
    )
    shouldYield = deadline.timeRemaining() < 1
  }
  requestIdleCallback(workLoop)
}
requestIdleCallback(workLoop)

// 将树形结构转换为链表
function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
  }
​
  if (fiber.parent) {
    fiber.parent.dom.appendChild(fiber.dom)
  }

  const elements = fiber.props.children
  let index = 0
  let prevSibling = null
​
  while (index < elements.length) {
    const element = elements[index]
​
    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    }

    if (index === 0) {
      fiber.child = newFiber
    } else {
      prevSibling.sibling = newFiber
    }
​
    prevSibling = newFiber
    index++;
  }
  
  if (fiber.child) {
    return fiber.child
  }
  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent
  }
}

/** @jsx Didact.createElement */
const element = Didact.createElement(
  'div',
  {
    id: 'foo'
  },
  Didact.createElement('a', null, 'bar'),
  Didact.createElement('b'),
)
const container = document.getElementById("root")
Didact.render(element, container)

// ########################################
// 5
const Didact = {
  createTextElement(node) {
    return {
      type: 'TEXT_ELEMENT',
      props: {
        nodeValue: node,
        children: [],
      }
    }
  },
  createElement(type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        children: children.map(child => typeof child === 'object' ? child : this.createTextElement(child))
      }
    }
  },
  createDom(fiber) {
    const dom = fiber.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(fiber.type);
    for ([key, value] of Object.entries(fiber.props)) {
      if (key === 'children') continue;
      dom[key] = value;
    }
    return dom;
  },
  render(element, container) {
    wipRoot = {
      dom: container,
      props: {
        children: [element],
      },
    }
    nextUnitOfWork = wipRoot
  },
  commitRoot() {
    this.commitWork(wipRoot.child)
    wipRoot = null
  },
  commitWork(fiber) {
    if (!fiber) {
      return
    }
    const domParent = fiber.parent.dom
    domParent.appendChild(fiber.dom)
    commitWork(fiber.child)
    commitWork(fiber.sibling)
  }
}

// 下一个工作单元
let nextUnitOfWork = null
let wipRoot = null

function workLoop(deadline) {
  let shouldYield = false
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(
      nextUnitOfWork
    )
    shouldYield = deadline.timeRemaining() < 1
  }
  // 如果没有发下一个工作单元 且有根节点
  if (!nextUnitOfWork && wipRoot) {
    Didact.commitRoot()
  }
  requestIdleCallback(workLoop)
}
requestIdleCallback(workLoop)

// 将树形结构转换为链表
function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
  }

  const elements = fiber.props.children
  let index = 0
  let prevSibling = null
​
  while (index < elements.length) {
    const element = elements[index]
​
    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    }

    if (index === 0) {
      fiber.child = newFiber
    } else {
      prevSibling.sibling = newFiber
    }
​
    prevSibling = newFiber
    index++;
  }
  
  if (fiber.child) {
    return fiber.child
  }
  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent
  }
}

/** @jsx Didact.createElement */
const element = Didact.createElement(
  'div',
  {
    id: 'foo'
  },
  Didact.createElement('a', null, 'bar'),
  Didact.createElement('b'),
)
const container = document.getElementById("root")
Didact.render(element, container)


// ########################################
// 6
// 需要将我们在渲染函数上收到的元素与我们提交给 DOM 的最后一个光纤树进行比较
const Didact = {
  createTextElement(node) {
    return {
      type: 'TEXT_ELEMENT',
      props: {
        nodeValue: node,
        children: [],
      }
    }
  },
  createElement(type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        children: children.map(child => typeof child === 'object' ? child : this.createTextElement(child))
      }
    }
  },
  createDom(fiber) {
    const dom = fiber.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(fiber.type);
    for ([key, value] of Object.entries(fiber.props)) {
      if (key === 'children') continue;
      dom[key] = value;
    }
    return dom;
  },
  render(element, container) {
    wipRoot = {
      dom: container,
      props: {
        children: [element],
      },
      alternate: currentRoot,
    }
    deletions = []
    nextUnitOfWork = wipRoot
  },
  commitRoot() {
    deletions.forEach(commitWork)
    this.commitWork(wipRoot.child)
    currentRoot = wipRoot
    wipRoot = null
  },
  updateDom(dom, prevProps, nextProps) {
    // TODO
  },
  commitWork(fiber) {
    if (!fiber) {
      return
    }
    const domParent = fiber.parent.dom
    if (
      fiber.effectTag === "PLACEMENT" &&
      fiber.dom != null
    ) {
      domParent.appendChild(fiber.dom)
    } else if (
      fiber.effectTag === "UPDATE" &&
      fiber.dom != null
    ) {
      updateDom(
        fiber.dom,
        fiber.alternate.props,
        fiber.props
      )
    } else if (fiber.effectTag === "DELETION") {
      domParent.removeChild(fiber.dom)
    }
    commitWork(fiber.child)
    commitWork(fiber.sibling)
  }
}

// 下一个工作单元
let nextUnitOfWork = null
let wipRoot = null
let currentRoot = null
let deletions = null

function workLoop(deadline) {
  let shouldYield = false
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(
      nextUnitOfWork
    )
    shouldYield = deadline.timeRemaining() < 1
  }
  // 如果没有发下一个工作单元 且有根节点
  if (!nextUnitOfWork && wipRoot) {
    Didact.commitRoot()
  }
  requestIdleCallback(workLoop)
}
requestIdleCallback(workLoop)

// 将树形结构转换为链表
function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
  }

  const elements = fiber.props.children
  reconcileChildren(fiber, elements)

  if (fiber.child) {
    return fiber.child
  }
  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent
  }
}

function reconcileChildren(wipFiber, elements) {
  let index = 0
  let oldFiber = wipFiber.alternate && wipFiber.alternate.child
  let prevSibling = null
​
  while (index < elements.length || oldFiber != null) {
    const element = elements[index]

    let newFiber = null;
    // TODO compare oldFiber to element
    const sameType = oldFiber && element && element.type == oldFiber.type
​
    if (sameType) {
      newFiber = {
        type: oldFiber.type,
        props: element.props,
        dom: oldFiber.dom,
        parent: wipFiber,
        alternate: oldFiber,
        effectTag: "UPDATE",
      }
    }
    if (element && !sameType) {
      newFiber = {
        type: element.type,
        props: element.props,
        dom: null,
        parent: wipFiber,
        alternate: null,
        effectTag: "PLACEMENT",
      }
    }
    if (oldFiber && !sameType) {
      oldFiber.effectTag = "DELETION"
      deletions.push(oldFiber)
    }
​
    if (oldFiber) {
      oldFiber = oldFiber.sibling
    }

    if (index === 0) {
      wipFiber.child = newFiber
    } else {
      prevSibling.sibling = newFiber
    }
​
    prevSibling = newFiber
    index++;
  }
}

/** @jsx Didact.createElement */
const element = Didact.createElement(
  'div',
  {
    id: 'foo'
  },
  Didact.createElement('a', null, 'bar'),
  Didact.createElement('b'),
)
const container = document.getElementById("root")
Didact.render(element, container)

