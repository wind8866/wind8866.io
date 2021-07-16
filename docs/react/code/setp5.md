
# 辅助分析 miniReact 第 5 步的执行过程

原始写法
```html
<div id='foo'>
  <a>bar</a>
  <b></b>
</div>
```

编译成
```js
const element = Didact.createElement(
  'div',
  {
    id: 'foo'
  },
  Didact.createElement('a', null, 'bar'),
  Didact.createElement('b'),
)
```

createElement 生成树型数据结构
```js
const element = {
  type: 'div',
  props: {
    id: 'foo',
    children: [
      {
        type: 'a',
        props: {
          children: {// 这里编程对象了而不是数组？
            type: 'TEXT_ELEMENT',
            props: {
              nodeValue: 'bar',
              children: [],
            }
          }
        }
      },
      {// 这里似乎有问题，该节点应该没有子元素了，undefined会执行 createTextElement ？
        type: 'b',
        props: {
          children: {
            type: 'TEXT_ELEMENT',
            props: {
              nodeValue: '',
              children: [],
            }
          }
        },
      }
    ]
  }
}
```

render 生成 fiber
```js
// Didact.render(element, container)
wipRoot = {
  dom: container,
  props: {
    children: [
      {
        type: 'div',
        props: {
          id: 'foo',
          children: [
            {
              type: 'a',
              props: {
                children: {// 这里编程对象了而不是数组？
                  type: 'TEXT_ELEMENT',
                  props: {
                    nodeValue: 'bar',
                    children: [],
                  }
                }
              }
            },
            {// 这里似乎有问题，该节点应该没有子元素了，undefined会执行 createTextElement ？
              type: 'b',
              props: {
                children: {
                  type: 'TEXT_ELEMENT',
                  props: {
                    nodeValue: '',
                    children: [],
                  }
                }
              },
            }
          ]
        }
      }
    ],
  },
}
nextUnitOfWork = wipRoot
```

调用空闲时间执行工作调度
```js
// performUnitOfWork(nextUnitOfWork)

const wipRoot = {
  dom: '<div id="root"></div>',
  parent: wipRoot,
  child: {
    dom: '<div id="foo"></div>'
    type: 'div',
    child: {
      dom: '<a></a>',
      type: 'a',
      parent: wipRoot.child,
      child: {
        dom: 'bar',
        type: 'TEXT_ELEMENT',
        parent: wipRoot.child.child.child,
        props: {
          nodeValue: 'bar',
          children: [],
        }
      },
      sibling: {
        dom: '<b></b>',
        type: 'b',
        parent: wipRoot.child,
        props: {
          children: {
            type: 'TEXT_ELEMENT',
            props: {
              nodeValue: '',
              children: [],
            }
          }
        },
      },
      props: {
        children: {
          type: 'TEXT_ELEMENT',
          props: {
            nodeValue: 'bar',
            children: [],
          }
        }
      },
    },
    props: {
      id: 'foo',
      children: [
        {
          type: 'a',
          props: {
            children: {
              type: 'TEXT_ELEMENT',
              props: {
                nodeValue: 'bar',
                children: [],
              }
            }
          }
        },
        {// 这里似乎有问题，该节点应该没有子元素了，undefined会执行 createTextElement ？
          type: 'b',
          props: {
            children: {
              type: 'TEXT_ELEMENT',
              props: {
                nodeValue: '',
                children: [],
              }
            }
          },
        }
      ]
    },
  },
  props: {
    children: [
      {
        type: 'div',
        props: {
          id: 'foo',
          children: [
            {
              type: 'a',
              props: {
                children: {// 这里编程对象了而不是数组？
                  type: 'TEXT_ELEMENT',
                  props: {
                    nodeValue: 'bar',
                    children: [],
                  }
                }
              }
            },
            {// 这里似乎有问题，该节点应该没有子元素了，undefined会执行 createTextElement ？
              type: 'b',
              props: {
                children: {
                  type: 'TEXT_ELEMENT',
                  props: {
                    nodeValue: '',
                    children: [],
                  }
                }
              },
            }
          ]
        }
      }
    ],
  },
}
```

同步的对链表"深度优先遍历"，遍历过程中添加到dom节点
