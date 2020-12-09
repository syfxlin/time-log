# x 的平方根 - LeetCode

> https://leetcode-cn.com/problems/sqrtx/

实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

```
输入: 4
输出: 2
```

示例 2:

```
输入: 8
输出: 2
说明: 8 的平方根是 2.82842...,
     由于返回类型是整数，小数部分将被舍去。
```

## 思考

抄的那来的思考

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=69 lang=java
 *
 * [69] x 的平方根
 */
class Solution {

  public int mySqrt(int x) {
    double g = x;
    while (Math.abs(g * g - x) > 0.000001) {
      g = (g + x / g) / 2;
    }
    return (int) Math.floor(g);
  }
}

```
