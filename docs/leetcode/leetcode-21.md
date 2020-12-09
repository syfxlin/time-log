# 合并两个有序链表 - LeetCode

> https://leetcode-cn.com/problems/merge-two-sorted-lists/

将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

示例：

```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

## 思考

题目相对简单，但为了能更快的运行不应该拼接后再进行排序，而是要逐位进行排序，将小数存入新链表同时移动引用的指向，循环直到一个列表为空

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=21 lang=java
 *
 * [21] 合并两个有序链表
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

  public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    ListNode list = null;
    if (l1.val < l2.val) {
      list = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      list = new ListNode(l2.val);
      l2 = l2.next;
    }
    ListNode temp = list;
    while (l1 != null || l2 != null) {
      if (l1 == null) {
        temp.next = l2;
        return list;
      } else if (l2 == null) {
        temp.next = l1;
        return list;
      }
      if (l1.val < l2.val) {
        temp.next = new ListNode(l1.val);
        l1 = l1.next;
      } else {
        temp.next = new ListNode(l2.val);
        l2 = l2.next;
      }
      temp = temp.next;
    }
    return list;
  }
}

```
