import List from './List';

class SingleLinkedList<T> implements List<T> {
  head: { value?: T, next: any };
  constructor() {
    this.head = {
      next: null,
    };
  }
  insertToTail(value: T) {
    let temp = this.head;
    while(true) {
      if (temp.next === null) {
        temp.next = {
          value,
          next: null,
        };
        break;
      } else {
        temp = temp.next;
      }
    }
  }
  insertToHead(value: T) {
    const beforeNext = this.head.next;
    this.head.next = {
      value,
      next: beforeNext,
    }
  }
  findByValue(value: T) {
    let temp = this.head;
    while(true) {
      if (temp.next === null) {
        return null;
      } else {
        if (temp.next.value === value) {
          return temp.next;
        }
      }
      temp = temp.next;
    }
  }
  findByIndex(index: number) {
    let thisIndex = 0;
    let temp = this.head.next;
    while(true) {
      if (thisIndex === index) {
        return temp;
      } else if (temp === null) {
        console.error(new Error('index 值超出范围'));
        return null;
      } else {
        temp = temp.next;
        thisIndex++;
      }
    }
  }
  insertToIndex(value: T, index: number) {
    const target = this.findByIndex(index);
    if (target !== null) {
      const beforeNext = target.next;
      target.next = {
        value,
        next: beforeNext,
      }
    } else {
      throw new Error('index 值超出范围，插入失败');
    }
  }
  remove(value: T) {
    let temp = this.head.next;
    let beforeTemp = this.head;
    while(true) {
      if (temp === null) {
        return false;
      } else {
        if (temp.value === value) {
          beforeTemp.next = temp.next;
          return true;
        }
      }
      beforeTemp = temp;
      temp = temp.next;
    }
  }
  toString(symble = ',') {
    let str = '';
    let temp = this.head.next;
    while(true) {
      if (temp !== null) {
        if (typeof temp.value.toString === 'function') {
          str = str + (str === '' ? '' : symble) + temp.value.toString();
        }
      } else {
        break;
      }
      temp = temp.next;
    }
    return str;
  }
}

/**
 * 在设计实际的程序是，需要考虑：
 *  不能执行的程序是提示错误并优雅退出（不能得到准确的值），还是直接抛出错误，还是引入一些特性
 *  对于边缘情况的处理
 */
export default SingleLinkedList;