# [714]买卖股票的最佳时机含手续费

> [买卖股票的最佳时机含手续费](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee)

## 思路

贪心算法

题目中说明了要计算手续费，那么我们可以把手续费加入到购买成本里，**注意**：当天买入和当天卖出的不计算手续费（相当于这天没卖也没卖）

我们只需记录购买成本，一旦当天股票的价格高于购买成本，则进行交易，同时将购买成本设置为当天的价格（如果后续有更合适的卖出时机，则这天相当于没有卖出，这样就能节省手续费），如此循环直到最后一天。

## 代码

```java
class Solution {

  public int maxProfit(final int[] prices, final int fee) {
    int sum = 0;
    int min = prices[0] + fee;
    for (int i = 1; i < prices.length; i++) {
      if (min > prices[i] + fee) {
        min = prices[i] + fee;
      } else if (prices[i] > min) {
        sum += prices[i] - min;
        min = prices[i];
      }
    }
    return sum;
  }
}

```
