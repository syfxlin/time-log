# 面试题 [02.05] 链表求和

> https://leetcode-cn.com/problems/sum-lists-lcci/

给定两个用链表表示的整数，每个节点包含一个数位。

这些数位是反向存放的，也就是个位排在链表首部。

编写函数对这两个整数求和，并用链表形式返回结果。

示例：

```
输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295
输出：2 -> 1 -> 9，即912
```

进阶：假设这些数位是正向存放的，请再做一遍。

示例：

```
输入：(6 -> 1 -> 7) + (2 -> 9 -> 5)，即617 + 295
输出：9 -> 1 -> 2，即912
```

## 思考

将`l1`作为返回链表

## 代码

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {

  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    if (l1 == null) {
      return l2;
    }
    if (l2 == null) {
      return l1;
    }
    int sum = 0;
    ListNode re = l1;
    while (l1 != null) {
      if (l2 != null) {
        int curr = l1.val + l2.val + sum;
        sum = curr / 10;
        l1.val = curr % 10;
        l2 = l2.next;
      } else if (sum != 0) {
        int curr = l1.val + sum;
        sum = curr / 10;
        l1.val = curr % 10;
      } else {
        break;
      }
      if (l1.next == null) {
        if (l2 != null) {
          l1.next = l2;
          l2 = null;
        } else if (sum != 0) {
          l1.next = new ListNode(sum);
          break;
        }
      }
      l1 = l1.next;
    }
    return re;
  }
}

```
