# [674]最长连续递增序列

> [最长连续递增序列](https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/description/)

给定一个未经排序的整数数组，找到最长且**连续**的的递增序列。

**示例 1:**

```
输入: [1,3,5,4,7]
输出: 3
解释: 最长连续递增序列是 [1,3,5], 长度为3。
尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为5和7在原数组里被4隔开。
```

**示例 2:**

```
输入: [2,2,2,2,2]
输出: 1
解释: 最长连续递增序列是 [2], 长度为1。
```

**注意：**数组长度不会超过 10000。

## 思考

就是双指针题

## 代码

```java
/*
 * @lc app=leetcode.cn id=674 lang=java
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
class Solution {

  public int findLengthOfLCIS(int[] nums) {
    if (nums.length == 0) {
      return 0;
    }
    if (nums.length == 1) {
      return 1;
    }
    int max = 0;
    int left = 0;
    int right = 1;
    while (right < nums.length) {
      if (nums[right - 1] >= nums[right]) {
        max = Math.max(max, right - left);
        left = right;
      }
      right++;
    }
    max = Math.max(max, right - left);
    return max;
  }
}
// @lc code=end

```
