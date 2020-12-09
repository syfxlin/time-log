# 合并两个有序数组 - LeetCode

> https://leetcode-cn.com/problems/merge-sorted-array

给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

说明:

- 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
- 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

示例:

```
输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
```

## 思考

受评论区指点，该题要提高运行效率，应该从后向前开始判断，而不是从前向后判断，因为从前向后判断需要大量的移动 nums1 数组，造成时间浪费。

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=88 lang=java
 *
 * [88] 合并两个有序数组
 */
class Solution {

  public void merge(int[] nums1, int m, int[] nums2, int n) {
    int index_m = m - 1;
    int index_n = n - 1;
    for (int i = 0; i < m + n; i++) {
      if (index_m < 0) {
        nums1[m + n - i - 1] = nums2[index_n];
        index_n--;
        continue;
      } else if (index_n < 0) {
        nums1[m + n - i - 1] = nums1[index_m];
        index_m--;
        continue;
      }
      if (nums1[index_m] > nums2[index_n]) {
        nums1[m + n - i - 1] = nums1[index_m];
        index_m--;
      } else {
        nums1[m + n - i - 1] = nums2[index_n];
        index_n--;
      }
    }
  }
}

```
