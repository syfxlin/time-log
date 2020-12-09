# [19]删除链表的倒数第 N 个节点

> [删除链表的倒数第 N 个节点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/)

给定一个链表，删除链表的倒数第*n*个节点，并且返回链表的头结点。

**示例：**

```
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
```

**说明：**

给定的*n*保证是有效的。

**进阶：**

你能尝试使用一趟扫描实现吗？

## 思考

利用快慢指针，当快指针到达末尾的时候，慢指针就达到了中点，这同时可以得到链表的长度和中点的位置，通过计算即可从 head 出发或者从 slow 中点出发，此方法需要先走半个链表，然后再走最多半个链表，即整个链表，所以时间复杂度是 O(n)

LeetCode 有另外一种方式，即 fast 先走 n+1 个长度，当 fast 到达了末尾，则 slow 就到达了要删除的节点的上一个节点，通过 slow.next = slow.next.next 就可以删除指定节点，该方法相对巧妙，效率也相对较高，因为少了很多计算和判断的时间。

## 代码

```java
/*
 * @lc app=leetcode.cn id=19 lang=java
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode(int x) { val = x; } }
 */
class Solution {

  public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode slow = head;
    ListNode fast = head;
    int count = 0;
    int mid = 0;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      mid++;
      count += 2;
    }
    if (fast != null) {
      count++;
    }
    if (n == count) {
      head = head.next;
    } else if (count - mid > n) {
      for (int i = 0; i < count - mid - n - 1; i++) {
        slow = slow.next;
      }
      slow.next = slow.next.next;
    } else {
      ListNode index = head;
      for (int i = 0; i < count - n - 1; i++) {
        index = index.next;
      }
      index.next = index.next.next;
    }
    return head;
  }
}
// @lc code=end

```
