# 移除链表元素 - LeetCode

> https://leetcode-cn.com/problems/remove-linked-list-elements/description/

删除链表中等于给定值 val 的所有节点。

示例:

```
输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5
```

## 思考

就是普通的删除链表元素，注意连续的 target 元素和前几个元素是 target 元素即可

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=203 lang=java
 *
 * [203] 移除链表元素
 */
/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode(int x) { val = x; } }
 */
class Solution {

  public ListNode removeElements(ListNode head, int val) {
    if (head == null) return null;
    if (head.next == null && head.val == val) return null;
    ListNode node = head;
    while (node != null && node.val == val) {
      node = node.next;
    }
    ListNode t = node;
    while (t != null && t.next != null) {
      if (t.next.val == val) {
        t.next = t.next.next;
      } else {
        t = t.next;
      }
    }
    return node;
  }
}

```
