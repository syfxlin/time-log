# 3 的幂

> https://leetcode-cn.com/problems/power-of-three/comments/

给定一个整数，写一个函数来判断它是否是 3 的幂次方。

示例 1:

```
输入: 27
输出: true
```

示例 2:

```
输入: 0
输出: false
```

示例 3:

```
输入: 9
输出: true
```

示例 4:

```
输入: 45
输出: false
```

进阶：
你能不使用循环或者递归来完成本题吗？

## 思考

本题由于是 int 型所以 3 的次方数是有上限的，只要上限的数能够整除指定的数，则代表该数是 3 的次方，也可以列出所有的次方数。

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=326 lang=java
 *
 * [326] 3的幂
 */
class Solution {

  public boolean isPowerOfThree(int n) {
    if (n < 1) return false;
    return 1162261467 % n == 0;
  }
}

```
