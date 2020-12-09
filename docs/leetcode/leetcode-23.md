# [23]合并 K 个排序链表

> [合并 K 个排序链表](https://leetcode-cn.com/problems/merge-k-sorted-lists/description/)

合并*k*个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

**示例:**

```
输入:
[
 1->4->5,
 1->3->4,
 2->6
]
输出: 1->1->2->3->4->4->5->6
```

## 思考

本题可以利用优先队列求解，也可以采用分治方法，两两合并，分治效率较高，但是写起来麻烦，由于本题是排序列表，所以逐个添加 ListNode 子项的效率较高。

## 代码

```java
import java.util.Comparator;
import java.util.PriorityQueue;

/*
 * @lc app=leetcode.cn id=23 lang=java
 *
 * [23] 合并K个排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode(int x) { val = x; } }
 */
class Solution {

  public ListNode mergeKLists(ListNode[] lists) {
    if (lists == null || lists.length <= 0) {
      return null;
    }
    PriorityQueue<ListNode> pq = new PriorityQueue<ListNode>(
      lists.length,
      new Comparator<ListNode>() {
        @Override
        public int compare(ListNode o1, ListNode o2) {
          if (o1.val < o2.val) return -1; else if (
            o1.val == o2.val
          ) return 0; else return 1;
        }
      }
    );
    for (int i = 0; i < lists.length; i++) {
      if (lists[i] != null) pq.add(lists[i]);
    }
    ListNode head = new ListNode(0);
    ListNode index = head;
    while (!pq.isEmpty()) {
      index.next = pq.poll();
      index = index.next;
      if (index.next != null) {
        pq.add(index.next);
      }
    }
    return head.next;
  }
}
// @lc code=end

```
