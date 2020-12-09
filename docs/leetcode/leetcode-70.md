# [70]爬楼梯

> [爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/description/)

假设你正在爬楼梯。需要*n*阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**注意：**给定*n*是一个正整数。

**示例 1：**

```
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
```

**示例 2：**

```
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```

## 思考

斐波那契数列：
设跳 n 个台阶有 f(n)种方法，
爬 1 个：1 种
爬 2 个：2 种
爬 n 个：面临两种选择：
（1） 第一次爬 1 个，此时剩余 n-1 个台阶，有 f(n-1)种方法
（2） 第一次爬 2 个，此时剩余 n-2 个台阶，有 f(n-2)种方法
所以 f(n) = f(n-1) + f(n-2)

## 代码

```java
/*
 * @lc app=leetcode.cn id=70 lang=java
 *
 * [70] 爬楼梯
 */

// @lc code=start
class Solution {

  public int climbStairs(int n) {
    if (n <= 2) {
      return n;
    }
    int num1 = 1;
    int num2 = 2;
    int numN = 0;
    for (int i = 2; i < n; i++) {
      numN = num1 + num2;
      num1 = num2;
      num2 = numN;
    }
    return numN;
  }

  // 暴力法，不能通过
  public int walk(int n, int i) {
    if (i == n) {
      return 1;
    }
    int sum = 0;
    if (i + 1 <= n) {
      sum += walk(n, i + 1);
    }
    if (i + 2 <= n) {
      sum += walk(n, i + 2);
    }
    return sum;
  }
}
// @lc code=end

```
