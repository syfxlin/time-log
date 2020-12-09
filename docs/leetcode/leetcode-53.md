# [53]最大子序和

> [最大子序和](https://leetcode-cn.com/problems/maximum-subarray/description/)

给定一个整数数组`nums`，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

**示例:**

```
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释:连续子数组[4,-1,2,1] 的和最大，为6。
```

**进阶:**

如果你已经实现复杂度为 O(_n_) 的解法，尝试使用更为精妙的分治法求解。

## 思考

本题用动态规划可以解决这个问题

![](/storage/images/uid_1/LsEWdQh529AAUztUJc6sI7MydYz97b0RCuwVMOkZ.png)

由于只需要使用到 dp[i-1]，所以可以将 dp 数组退化成 int 型的单数字，退化后的算法也可以认为是贪心法

## 代码

```java
/*
 * @lc app=leetcode.cn id=53 lang=java
 *
 * [53] 最大子序和
 */

// @lc code=start
class Solution {

  public int maxSubArray(int[] nums) {
    int max = nums[0];
    int sum = nums[0];
    for (int i = 1; i < nums.length; i++) {
      sum = sum + nums[i] > nums[i] ? sum + nums[i] : nums[i];
      max = max > sum ? max : sum;
    }
    return max;
  }
}
// @lc code=end

```
