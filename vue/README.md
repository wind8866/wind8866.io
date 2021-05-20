


```javascript

const Counter = {
  data() {
    return {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  }
}

const app = Vue.createApp(Counter)

app.component('todo-item', {
  props: ['todo'],
  template: `<li>{{ todo.text }}</li>`
})
app..mount('#counter')
```


Vue 插入/更新/移除元素时自动应用过渡效果。
每个 Vue 应用都是通过用 createApp 函数创建一个新的应用实例 `Vue.createApp`，应用实例暴露的大多数方法都会返回该同一实例，允许链式。
与大多数应用方法不同的是，mount 不返回应用本身。相反，它返回的是根组件实例。
组件的 property 不要使用箭头函数，找不到 this。
**指令 **(Directives) 是带有 v- 前缀的特殊 attribute。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。
Data Property 定义的数据，就在顶级组件实例和 $data 中暴露出来。
直接将不包含在 data 中的新 property 添加到组件实例是可行的。但由于该 property 不在背后的响应式 $data 对象内，所以 Vue 的响应性系统不会自动跟踪它。
Vue 使用 $ 前缀通过组件实例暴露自己的内置 API。它还为内部 property 保留 _ 前缀。你应该避免使用这两个字符开头的的顶级 data property 名称。
组件的 methods 里使用防抖函数，组件实例会共享，应该放在声明周期里。
模版中使用较为复杂的表达式，应该替换为计算属性。
模板中调用方法和计算属性都能达到目的，但是计算属性是根据所以依赖的值进行计算的，值不改变，不会重新计算。
[计算属性还支持setter](https://v3.cn.vuejs.org/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%9A%84-setter)
watch 和 computed相似，当需要在数据变化时执行异步或开销较大的操作时，可以是用 watch。
当你在带有单个根元素的自定义组件上使用 class attribute 时，这些 class 将被添加到该元素中。此元素上的现有 class 将不会被覆盖。
v-if、v-else、v-else-if、v-show；v-if 是惰性的；v-show 只是简单地基于 CSS 进行切换
【建议】你也可以用 of 替代 in 作为分隔符，因为它更接近 JavaScript 迭代器的语法
也可以用 v-for 来遍历一个对象的 property,v-for 也可以接受整数。在这种情况下，它会把模板重复对应次数。
Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。
- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()




```html
<span>Message: {{ msg }}</span>
<span v-once>这个将不会改变: {{ msg }}</span>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
<div v-bind:id="dynamicId"></div>
<a v-bind:[attributeName]="url"> ... </a>
<a :[attributeName]="url"> ... </a>
<form v-on:submit.prevent="onSubmit">...</form>
<a @click="doSomething"> ... </a>
<input v-model="question" />
<div
  class="static"
  :class="{ active: checked, 'text-danger': hasError }"
></div>
<div :class="[activeClass, errorClass]"></div>
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
<li v-for="(value, name, index) in myObject">
  {{ index }}. {{ name }}: {{ value }}
</li>
```

```javascript
const Counter = {
  data() {
    return {
      msg: 'message',
      rawHtml: '<span style="color: red">This should be red.</span>',
      dynamicId: '95535',
      attributeName: 'href',// 设置为 null 则移除绑定；最好不使用表达式，用计算属性替代
      checked: true,
      hasError: false,
      activeClass: 'active',
      errorClass: 'text-danger',
      activeColor: 'red',
      fontSize: 30,
      awesome: false,
      myObject: {// 内部应该是使用 Object.keys()
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
      }
    },
    watch: {
      question(newQuestion, oldQuestion) {
        if (newQuestion.indexOf('?') > -1) {
          this.getAnswer()
        }
      }
    },
    computed: {
      itemClass() {
        return this.checked ? 'item checked' : 'item';
      }
    },
    methods: {// 避免使用箭头函数
      onSubmit() {

      },
      doSomething() {

      },
      getAnswer() {
        // 异步请求
      }
    }
  }
}
```

深入阅读
- [ ] 安装
- [ ] [与自定义元素的关系](https://v3.cn.vuejs.org/guide/introduction.html#%E4%B8%8E%E8%87%AA%E5%AE%9A%E4%B9%89%E5%85%83%E7%B4%A0%E7%9A%84%E5%85%B3%E7%B3%BB )
- [ ] [MVVM 模型](https://en.wikipedia.org/wiki/Model_View_ViewModel)
- [ ] 在 dom 中不能使用驼峰变量，在项目中应该可以吧，[参考](https://v3.cn.vuejs.org/guide/template-syntax.html#%E5%AF%B9%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%BA%A6%E5%AE%9A)
- [ ] [维护状态](https://v3.cn.vuejs.org/guide/list.html#%E7%BB%B4%E6%8A%A4%E7%8A%B6%E6%80%81)
- [ ] 事件处理