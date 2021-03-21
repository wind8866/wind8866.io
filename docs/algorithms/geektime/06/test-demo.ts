import SingleLinkedList from './SingleLinkedList';

let single = new SingleLinkedList<Number>();
single.insertToTail(12)
single.insertToHead(11)
console.log(single.toString());

console.log(single.findByIndex(1))
console.log(single.findByValue(12))

console.log(single.remove(12))
console.log(single.toString());