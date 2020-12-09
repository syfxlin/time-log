# [215]数组中的第 K 个最大元素

> [数组中的第 K 个最大元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/description/)

在未排序的数组中找到第**k**个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

**示例 1:**

```
输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
```

**示例 2:**

```
输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
```

**说明:**

你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

## 思考

利用优先队列即可完成此题，或者使用快速排序，以及更快的快速检索

## 代码

```java
import java.util.Comparator;
import java.util.PriorityQueue;

/*
 * @lc app=leetcode.cn id=215 lang=java
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
class Solution {

  public int findKthLargest(int[] nums, int k) {
    if (k > nums.length) return -1;
    PriorityQueue<Integer> pq = new PriorityQueue<>(
      new Comparator<Integer>() {
        public int compare(Integer o1, Integer o2) {
          return Integer.compare(o2, o1);
        }
      }
    );
    for (int i = 0; i < nums.length; i++) {
      pq.add(nums[i]);
    }
    for (int i = 0; i < k - 1; i++) {
      pq.poll();
    }
    return pq.poll();
  }
}
// @lc code=end

```
