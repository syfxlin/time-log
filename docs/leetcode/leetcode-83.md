# 删除排序链表中的重复元素 - LeetCode

> https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/solution/shan-chu-pai-xu-lian-biao-zhong-de-zhong-fu-yuan-s/

给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:

```
输入: 1->1->2
输出: 1->2
```

示例 2:

```
输入: 1->1->2->3->3
输出: 1->2->3
```

## 思考

null

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=83 lang=java
 *
 * [83] 删除排序链表中的重复元素
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

  public ListNode deleteDuplicates(ListNode head) {
    if (head == null) return head;
    ListNode list = head;
    int val;
    while (list.next != null) {
      if (list.val != list.next.val) {
        list = list.next;
      } else {
        list.next = list.next.next;
      }
    }
    return head;
  }
}

```
