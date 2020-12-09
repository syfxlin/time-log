# [322] 零钱兑换

> [https://leetcode-cn.com/problems/coin-change/](https://leetcode-cn.com/problems/coin-change/)

给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

示例 1:

```
输入: coins = [1, 2, 5], amount = 11
输出: 3
解释: 11 = 5 + 5 + 1
```

示例 2:

```
输入: coins = [2], amount = 3
输出: -1
```

说明:
你可以认为每种硬币的数量是无限的。

## 思考

我们采用自下而上的方式进行思考。仍定义 $$F(i)$$ 为组成金额 $$i$$ 所需最少的硬币数量，假设在计算 $$F(i)$$ 之前，我们已经计算出 $$F(0)-F(i-1)$$ 的答案。 则 $$F(i)$$ 对应的转移方程应为

$$F(i)=min_{j=0...n-1}{F(i - c_j)} + 1$$

其中 $$c_jc$$ 代表的是第 $$j$$ 枚硬币的面值，即我们枚举最后一枚硬币面额是 $$c_jc$$ ，那么需要从 $$i-c_j$$
这个金额的状态 $$F(i-c_j)$$ 转移过来，再算上枚举的这枚硬币数量 $$1$$ 的贡献，由于要硬币数量最少，所以 $$F(i)$$ 为前面能转移过来的状态的最小值加上枚举的硬币数量 $$1$$ 。

例子 1：假设

```
coins = [1, 2, 5], amount = 11
```

则，当 $$i==0$$ 时无法用硬币组成，为 0 。当 $$i<0$$ 时，忽略 $$F(i)$$

| F(i)      | 最小硬币数量                                     |
| --------- | ------------------------------------------------ |
| $$F(0)$$  | $$0$$ 金额为 0 不能由硬币组成                    |
| $$F(1)$$  | $$1$$ $$F(1)=min(F(1-1),F(1-2),F(1-5))+1=1$$     |
| $$F(2)$$  | $$1$$ $$F(2)=min(F(2-1),F(2-2),F(2-5))+1=1$$     |
| $$F(3)$$  | $$2$$ $$F(3)=min(F(3-1),F(3-2),F(3-5))+1=2$$     |
| $$F(4)$$  | $$2$$ $$F(4)=min(F(4-1),F(4-2),F(4-5))+1=2$$     |
| ...       | ...                                              |
| $$F(11)$$ | $$3$$ $$F(11)=min(F(11-1),F(11-2),F(11-5))+1=3$$ |

## 代码

```java
class Solution {

  public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    dp[0] = 0;
    for (int i = 1; i <= amount; i++) {
      dp[i] = Integer.MAX_VALUE;
      for (int j = 0; j < coins.length; j++) {
        dp[i] =
          Math.min(
            dp[i],
            i - coins[j] >= 0 && dp[i - coins[j]] != Integer.MAX_VALUE
              ? dp[i - coins[j]] + 1
              : Integer.MAX_VALUE
          );
      }
    }
    return dp[amount] == Integer.MAX_VALUE ? -1 : dp[amount];
  }
}

```
