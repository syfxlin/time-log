# 买卖股票的最佳时机 - LeetCode

> https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/description/

给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

注意你不能在买入股票前卖出股票。

示例 1:

```
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
```

示例 2:

```
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

## 思考

此题的关键是记录最小值和在最小值之后的最大值，所以需要两个索引来记录。
先建立两个 index，首先前进 one index，若 one index 指向的值 - two index 指向的值小于 0，就将 two index 指向到 one index 指向的值，若不小于 0 则记录差值的最大值
最后可以得到最大的利润。

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=121 lang=java
 *
 * [121] 买卖股票的最佳时机
 */
class Solution {

  public int maxProfit(int[] prices) {
    int re = 0;
    int start = 0;
    int end = 0;
    for (; start < prices.length; start++) {
      int diff = prices[start] - prices[end];
      if (diff < 0) {
        end = start;
      } else {
        re = re > diff ? re : diff;
      }
    }
    return re;
  }
}

```
