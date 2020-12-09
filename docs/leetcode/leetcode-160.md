# 相交链表 - LeetCode

> https://leetcode-cn.com/problems/intersection-of-two-linked-lists/

编写一个程序，找到两个单链表相交的起始节点。

如下面的两个链表：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png)

在节点 c1 开始相交。

示例 1：
![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_1.png)

```
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Reference of the node with value = 8
输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
```

示例 2：
![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_2.png)

```
输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Reference of the node with value = 2
输入解释：相交节点的值为 2 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
```

示例 3：
![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_3.png)

```
输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：null
输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
解释：这两个链表不相交，因此返回 null。
```

注意：

```
如果两个链表没有交点，返回 null.
在返回结果后，两个链表仍须保持原有的结构。
可假定整个链表结构中没有循环。
程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。
```

## 思考

本题的可以有许多种做法，一种是利用 hash，将整个 headA 链表存入 Set 中，然后将 headB 存入 Set 中，当返回值为 false 时代表相交，若返回值都是 true 则代表没有相交，但是由于计算 hash 需要时间，所以效率并不高
还有一种是将一个链表构成环，这样本题就变为了和之前的环形链表一样的题目了，利用快慢指针判断是否存在环，若存在环则代表有相交，由于快慢指针相遇的时候并不是链表的交点，所以还要进一步循环，将 slow 或者 fast 指针指向 head 并同时进行单步循环，当相遇的时候就是链表相交的点

## AC 代码

```java
import java.util.HashSet;

/*
 * @lc app=leetcode.cn id=160 lang=java
 *
 * [160] 相交链表
 */
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {

  public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    ListNode temp = headA;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = headB;
    ListNode fast = headA;
    ListNode slow = headA;
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast == slow) {
        fast = headA;
        while (fast != slow) {
          fast = fast.next;
          slow = slow.next;
          temp.next = null;
        }
        return fast;
      }
    }
    temp.next = null;
    return null;
  }
}

```
