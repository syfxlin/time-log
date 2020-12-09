# [279]完全平方数

> [完全平方数](https://leetcode-cn.com/problems/perfect-squares/description)

给定正整数*n*，找到若干个完全平方数（比如`1, 4, 9, 16, ...`）使得它们的和等于*n*。你需要让组成和的完全平方数的个数最少。

**示例 1:**

```
输入: n = 12
输出: 3
解释: 12 = 4 + 4 + 4.
```

**示例 2:**

```
输入: n = 13
输出: 2
解释: 13 = 4 + 9.
```

## 思考

1.  任何正整数都可以拆分成不超过 4 个数的平方和 ---> 答案只可能是 1,2,3,4
2.  如果一个数最少可以拆成 4 个数的平方和，则这个数还满足 n = (4^a)\*(8b+7) ---> 因此可以先看这个数是否满足上述公式，如果不满足，答案就是 1,2,3 了
3.  如果这个数本来就是某个数的平方，那么答案就是 1，否则答案就只剩 2,3 了
4.  如果答案是 2，即 n=a^2+b^2，那么我们可以枚举 a，来验证，如果验证通过则答案是 2
5.  只能是 3

## 代码

```java
/*
 * @lc app=leetcode.cn id=279 lang=java
 *
 * [279] 完全平方数
 */

// @lc code=start
class Solution {

  public int numSquares(int n) {
    if (n == 0) {
      return 0;
    }
    while (n % 4 == 0) {
      n /= 4;
    }
    if (n % 8 == 7) {
      return 4;
    }
    int a = 0;
    while (a * a <= n) {
      int b = (int) Math.sqrt(n - a * a);
      if (a * a + b * b == n) {
        return (a != 0 ? 1 : 0) + (b != 0 ? 1 : 0);
      }
      a += 1;
    }
    return 3;
  }
}
// @lc code=end

```
