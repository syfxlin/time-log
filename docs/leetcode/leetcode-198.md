# [198]打家劫舍

> [打家劫舍](https://leetcode-cn.com/problems/house-robber/description/)

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，**如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警**。

给定一个代表每个房屋存放金额的非负整数数组，计算你**在不触动警报装置的情况下，**能够偷窃到的最高金额。

**示例 1:**

```
输入: [1,2,3,1]
输出: 4
解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
    偷窃到的最高金额 = 1 + 3 = 4 。
```

**示例 2:**

```
输入: [2,7,9,3,1]
输出: 12
解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
    偷窃到的最高金额 = 2 + 9 + 1 = 12 。
```

## 思考

本题就是经典的动态规划问题，利用 dp 方程[dp[i] = max(dp[i-2]+nums[i], dp[i-1])]，我们就能做出该题，然后我们发现，该题只需要使用 dp[i-2]和 dp[i-1]的数据，所以可以将本题原本 O(n)简化成 O(1)的空间复杂度

## 代码

```java
/*
 * @lc app=leetcode.cn id=198 lang=java
 *
 * [198] 打家劫舍
 */

// @lc code=start
class Solution {

  public int rob(int[] nums) {
    int dp_1 = 0;
    int dp_2 = 0;
    int max = 0;
    for (int i = 0; i < nums.length; i++) {
      int temp = dp_1;
      dp_1 = Math.max(dp_2 + nums[i], dp_1);
      dp_2 = temp;
      max = Math.max(max, dp_1);
    }
    return max;
  }
}
// @lc code=end

```
