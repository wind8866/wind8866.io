class SingleLinkedList {
  constructor(...values) {
    this.headValue = Symbol('headValue');
    this.nodes = { next: null, value: this.headValue };
    this.init(...values);
  }
  /**
   * 初始化
   * @param  {...any} values 参数
   */
  init(...values) {
    let hand = this.nodes;
    for (let val of values) {
      hand.next = {
        value: val,
        next: null,
      };
      hand = hand.next;
    }
  }
  /**
   * 链表头部追加节点
   * @param {any} val 
   */
  unshift(val) {
    const temp = this.nodes.next;
    this.nodes.next = {
      value: val,
      next: temp,
    }
  }
  /**
   * 链表头部删除节点
   * @param {*} val 
   * @returns node.value | undefined
   */
  shift() {
    const temp = this.nodes.next;
    if (temp) {
      this.nodes.next = temp.next;
      return temp?.value
    }
  }
  /**
   * 链表末尾追加节点
   * @param {any} val 
   */
  push(val) {
    let hand = this.nodes;
    while (true) {
      if (hand.next === null) {
        hand.next = {
          value: val,
          next: null
        }
        break;
      } else {
        hand = hand.next;
      }
    }
  }
  /**
   * 链表末尾删除节点
   * @param {any} val 
   */
  pop() {
    let hand = this.nodes;
    let before = null;
    while (true) {
      if (hand.next === null) {
        if (before != null) {
          const temp = hand.value;
          before.next = null;
          return temp;
        }
      }
      before = hand;
      hand = hand.next;
    }
  }
  /**
   * 根据value查找节点
   * @param {any} val 要查询的值
   * @returns {number} -1 0 1 2 3...
   */
  find(val) {
    let hand = this.nodes.next;
    let index = 0;
    while (hand !== null) {
      // NaN
      if (Object.is(val, hand.value)) {
        return [hand, index];
      }
      hand = hand.next;
      index++;
    }
    return [null, -1]
  }
  /**
   * 根据index查找节点，下标从0开始
   * @param {number} index 下标
   * @returns {node | null}
   */
  getIndex(index) {
    let hand = this.nodes.next;
    let i = 0;
    while (hand !== null) {
      if (i === index) {
        return hand;
      }
      hand = hand.next;
      i++;
    }
    return false;
  }
  /**
   * 转换成数组
   * @returns {Array}
   */
  toArray() {
    const arrTemp = [];
    let hand = this.nodes.next;
    while (hand != null) {
      arrTemp.push(hand.value);
      hand = hand.next;
    }
    return arrTemp;
  }
  /**
   * 转换为字符串
   * @param {String} sign 间隔符号
   * @returns {String}
   */
  toString(sign = ', ') {
    const str = this.toArray().join(sign);
    console.log(str);
    return str;
  }
  /**
   * 删除
   * @param {any} val 要删除的值
   * @returns Boolean
   */
  delete(val) {
    let hand = this.nodes.next;
    let before = hand;
    while (hand != null) {
      if (Object.is(val, hand.value)) {
        before.next = hand.next;
        return true;
      }
      before = hand;
      hand = hand.next;
    }
    return false;
  }
  /**
   * 遍历
   * @param {Function} fun callback
   * @param {*} thisArg this
   */
  forEach(fun, thisArg) {
    const that = thisArg || this;
    try {
      let hand = that.nodes.next;
      let i = 0;
      while (hand != null) {
        fun(hand.value, i, that);
        i++;
        hand = hand.next;
      }
    } catch (e) {
      console.error(e);
    }
  }
  // for of 循环
  [Symbol.iterator]() {
    let hand = this.nodes;
    return {
      next() {
        hand = hand.next;
        if (hand) {
          return { done: false, value: hand.value };
        } else {
          return { done: true };
        }
      }
    }
  }
}

// export default SingleLinkedList;
// TODO: 值不支持 undefined