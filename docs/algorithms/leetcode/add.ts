/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
 class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const targetListNode = new ListNode();
  let balance = false;
  let targetListNodeHead = targetListNode;

  while(true) {
    const l1Val = l1 ? l1.val : 0;
    const l2Val = l2 ? l2.val : 0;
    targetListNodeHead.val = (l1Val + l2Val + (balance ? 1 : 0)) % 10;
    balance = l1Val + l2Val + (balance ? 1 : 0) >= 10;
    if ((l1 !== null && l1.next !== null || l2 !== null && l2.next !== null) || balance) {
      targetListNodeHead.next = {
        val: 0,
        next: null
      }
    } else {
      targetListNodeHead.next = null;
      break;
    }

    targetListNodeHead = targetListNodeHead.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return targetListNode;
};
// [2,4,3]
const linkedList1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
};
// [5,6,4]
const linkedList2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
};
console.log(addTwoNumbers(linkedList1, linkedList2));