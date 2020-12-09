# [234]回文链表

> [回文链表](https://leetcode-cn.com/problems/palindrome-linked-list/description/)

请判断一个链表是否为回文链表。

**示例 1:**

```
输入: 1->2
输出: false
```

**示例 2:**

```
输入: 1->2->2->1
输出: true
```

**进阶：**  
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

## 思考

利用快慢指针，可以将链表分成两半，然后反转后半部分，最后从 head 和 mid 开始遍历就可以判断是否是回文链表，时间复杂度为 O(3/2n)，即 O(n)，只使用了指针的空间，空间复杂度为 O(1)

## 代码

```java
/*
 * @lc app=leetcode.cn id=234 lang=java
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode(int x) { val = x; } }
 */
class Solution {

  public boolean isPalindrome(ListNode head) {
    ListNode fast = head;
    ListNode slow = head;
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    fast = head;
    slow = reverseList(slow);
    while (slow != null) {
      if (slow.val != fast.val) {
        return false;
      }
      slow = slow.next;
      fast = fast.next;
    }
    return true;
  }

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
// @lc code=end

```
