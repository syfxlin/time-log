# [300]最长上升子序列

> [最长上升子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/description/)

给定一个无序的整数数组，找到其中最长上升子序列的长度。

**示例:**

```
输入: [10,9,2,5,3,7,101,18]
输出: 4
解释: 最长的上升子序列是[2,3,7,101]，它的长度是 4。
```

**说明:**

- 可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
- 你算法的时间复杂度应该为 O(_n<sup>2</sup>_) 。

**进阶:**你能将算法的时间复杂度降低到 O(*n*log*n*) 吗?

## 思考

1、子序列：不要求连续子序列，只要保证元素前后顺序一致即可；

2、上升：这里的“上升”是“严格上升”，类似于`[2, 3, 3, 6, 7]`这样的子序列是不符合要求的；

一个序列可能有多个最长上升子序列，题目中只要我们求这个最长的长度。如果使用回溯搜索，选择所有的子序列进行判断，时间复杂度为 $O( (2^n) \* n )$。

定义状态：`LIS(i)`表示以第`i`个数字为结尾的最长上升子序列的长度。即在`[0, ..., i]`的范围内，选择以数字`nums[i]`结尾可以获得的最长上升子序列的长度。关键字是：以第`i`个数字为结尾，即我们要求`nums[i]`必须被选取。反正一个子序列一定要以一个数字结尾，那我就将状态这么定义，这一点是重要且常见的。

状态转移方程：遍历到索引是`i`的数的时候，我们应该把索引是`[0, ... ,i - 1]`的`LIS`都看一遍，如果当前的数`nums[i]`大于之前的某个数，那么`nums[i]`就可以接在这个数后面形成一个更长的`LIS`。把前面的`i`个数都看了，`LIS[i]`就是它们的最大值加 $1$。即比当前数要小的那些里头，找最大的，然后加 $1$ 。

状态转移方程即：`LIS(i) = max( 1 + LIS(j) if j < i and nums[i] > nums[j])`

最后不要忘了，应该扫描一遍这个`LIS[i]`数组，其中最大的就是我们所求的。

## 代码

```java
import java.util.Arrays;

/*
 * @lc app=leetcode.cn id=300 lang=java
 *
 * [300] 最长上升子序列
 */

// @lc code=start
class Solution {

  public int lengthOfLIS(int[] nums) {
    if (nums.length <= 1) {
      return nums.length;
    }
    int[] dp = new int[nums.length];
    Arrays.fill(dp, 1);
    int max = Integer.MIN_VALUE;
    for (int i = 1; i < dp.length; i++) {
      for (int j = 0; j < i; j++) {
        if (nums[j] < nums[i]) {
          dp[i] = dp[j] + 1 > dp[i] ? dp[j] + 1 : dp[i];
        }
      }
      max = max > dp[i] ? max : dp[i];
    }
    return max;
  }
}
// @lc code=end

```
