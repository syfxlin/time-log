# 反转链表 - LeetCode

> https://leetcode-cn.com/problems/reverse-linked-list/description/

反转一个单链表。

示例:

```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

## 思考

本题就是一题普通的操作题，只需要 3 个指针即可

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=206 lang=java
 *
 * [206] 反转链表
 */
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {

  public ListNode reverseList(ListNode head) {
    ListNode left = null;
    ListNode mid = head;
    ListNode right = head;
    while (right != null) {
      right = mid.next;
      mid.next = left;
      left = mid;
      mid = right;
    }
    return left;
  }
}

```
