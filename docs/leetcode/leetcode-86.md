# [86]分隔链表

> [分隔链表](https://leetcode-cn.com/problems/partition-list)

## 思路

遍历的时候碰到第一个大于等于 x 的节点的时候保存把上一个节点保存，后续碰到小于 x 的节点的时候就将当前节点移动到保存的节点的下一个节点

## 代码

```java
class Solution {

  public ListNode partition(final ListNode head, final int x) {
    if (head == null || head.next == null) {
      return head;
    }
    final ListNode guard = new ListNode(-1);
    guard.next = head;
    ListNode pre = guard;
    ListNode curr = head;
    ListNode mark = null;
    while (curr != null) {
      if (mark == null && curr.val >= x) {
        mark = pre;
      }
      if (mark != null && curr.val < x) {
        final ListNode node = new ListNode(curr.val);
        node.next = mark.next;
        mark.next = node;
        mark = mark.next;
        pre.next = curr.next;
      } else {
        pre = curr;
      }
      curr = curr.next;
    }
    return guard.next;
  }
}

```
