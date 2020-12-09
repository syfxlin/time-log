# [24]两两交换链表中的节点

> [两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/)

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

**你不能只是单纯的改变节点内部的值**，而是需要实际的进行节点交换。

**示例:**

```
给定 1->2->3->4, 你应该返回 2->1->4->3.
```

## 思考

本题就是典型的链表操作题，只不过要进行部分修改而已

## 代码

```java
/*
 * @lc app=leetcode.cn id=24 lang=java
 *
 * [24] 两两交换链表中的节点
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode(int x) { val = x; } }
 */
class Solution {

  public ListNode swapPairs(ListNode head) {
    ListNode left = new ListNode(0);
    ListNode re = left;
    left.next = head;
    ListNode index = head;
    while (index != null && index.next != null) {
      ListNode right = index.next;
      index.next = right.next;
      right.next = index;
      left.next = right;
      left = index;
      index = index.next;
    }
    return re.next;
  }
}
// @lc code=end

```
