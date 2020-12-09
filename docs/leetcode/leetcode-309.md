# [309]最佳买卖股票时机含冷冻期 - 尚未完全看懂

> [最佳买卖股票时机含冷冻期](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/)

给定一个整数数组，其中第*i*个元素代表了第*i*天的股票价格 。​

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

- 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
- 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。

**示例:**

```
输入: [1,2,3,0,2]
输出: 3
解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
```

## 思考

[https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solution/309-zui-jia-mai-mai-gu-piao-shi-ji-han-leng-dong-q/](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solution/309-zui-jia-mai-mai-gu-piao-shi-ji-han-leng-dong-q/)

## 代码

```java
/*
 * @lc app=leetcode.cn id=309 lang=java
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
class Solution {

  public int maxProfit(int[] prices) {
    int wait = 0;
    int hold = Integer.MIN_VALUE;
    int sold = 0;
    for (int p : prices) {
      int pre_s = sold;
      sold = hold + p;
      hold = Math.max(hold, wait - p);
      wait = Math.max(wait, pre_s);
    }
    return Math.max(wait, sold);
  }
}
// @lc code=end

```
