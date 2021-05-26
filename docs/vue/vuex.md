## 如何快速的使用 vuex

### 1、声明
```javascript
import { createStore } from 'vuex';

export default createStore({
  state: {
    width: 1920,
    scale: 1,
    dpr: 1,
  },
  mutations: {
    resize(state, options) {
      state.width = options.width;
      state.scale = options.scale;
      state.dpr = options.dpr;
    },
  },
  actions: {
  },
  modules: {
  },
});
```

### 2、关联
```javascript
import store from './store';

createApp(App).use(store).use(router).mount('#app');
```

### 3、使用
```javascript
import store from './store';

// 取值：
console.log(store.state.scale, this.$store.state);
Math.max(16 * this.$store.state.scale, 12)

// 修改
this.$store.commit('resize', {
  width: 1366,
  scale: 2,
  dpr: 1,
});
```
