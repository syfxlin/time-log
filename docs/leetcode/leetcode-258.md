# 各位相加 - LeetCode

> https://leetcode-cn.com/problems/add-digits/

给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。

示例:

```
输入: 38
输出: 2
解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。
```

进阶:
你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？

## 思考

本题若要达到 O(1)时间复杂度，需要使用数学方法，具体公式为`f(x*10+y)=f(x*9+x+y)=f(x+y), 成立当f(x)= x%9`，另外用三目运算符的运行效率会比用条件语句快些

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=258 lang=java
 *
 * [258] 各位相加
 */
class Solution {

  public int addDigits(int num) {
    if (num <= 9) {
      return num;
    }
    if (num % 9 == 0) return 9;
    return num % 9;
  }
}

```
