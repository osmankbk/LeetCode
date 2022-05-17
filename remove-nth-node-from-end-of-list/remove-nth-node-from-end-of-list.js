/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let node = new ListNode(0);
    node.next = head;
    let prevNode = node;
    let count = 0;
     while(prevNode) {
         prevNode = prevNode.next;
         count++;
    }
    prevNode = node;
    for(let i = 1; i < count - n; i++) {
        prevNode  = prevNode.next;
    }
    prevNode.next = prevNode.next.next;
    return node.next;
};