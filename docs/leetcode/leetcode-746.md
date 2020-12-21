# [746]使用最小花费爬楼梯

> [使用最小花费爬楼梯](https://leetcode-cn.com/problems/min-cost-climbing-stairs)

## 思考

动态规划，要求得最后一步的最优解，就要求得前两步的最优解，以此类推就可以求得公式

dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])

## 代码

```java
class Solution {

  public int minCostClimbingStairs(final int[] cost) {
    int m1 = 0;
    int m2 = 0;
    for (int i = 1; i < cost.length; i++) {
      // 临时存储上一步最优解
      int temp = m2;
      // 计算当前最优解
      m2 = Math.min(m2 + cost[i], m1 + cost[i - 1]);
      // 保存上一步最优解
      m1 = temp;
    }
    // 最后一步最优解
    return m2;
  }
}

```
