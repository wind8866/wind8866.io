import List from './List';



class SingleLinkedList<T> implements List<T> {
  hend: null;
  head: {
    value: T;
    next: Head;
  };
  constructor() {
    this.hend = null;
  }
  findByValue(value: T) {
    let temp: null | T = this.head;
    let index: number = 0;
    while (temp !== null) {
      if (value === temp.value) {
        break;
      }
      ++index;
      temp = temp.next;
    }
    return index;
  }
  findByIndex(index: number) {
    let temp: null | T = this.head;
    let i: number = 0;
    while (index === i) {
      if (value === temp.value) {
        break;
      }
      ++index;
      temp = temp.next;
    }
    return index;
  }
}

export default SingleLinkedList;