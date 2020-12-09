# 4 的幂

> https://leetcode-cn.com/problems/power-of-four/description/

给定一个整数 (32 位有符号整数)，请编写一个函数来判断它是否是 4 的幂次方。

示例 1:

```
输入: 16
输出: true
```

示例 2:

```
输入: 5
输出: false
```

进阶：
你能不使用循环或者递归来完成本题吗？

## 思考

神游出来的代码，比较简短容易理解，但是性能不怎么样。。基于 3 的幂的方法扩展出来的，由于会有 2 的单次幂干扰所以剔除 2 的单次幂的干扰的方法就是取平方根，如果平方根不为整数则说明是 2 的单次幂。

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=342 lang=java
 *
 * [342] 4的幂
 */
class Solution {

  public boolean isPowerOfFour(int num) {
    if (num < 1 || num > 1073741824) return false;
    return (
      Math.round(Math.sqrt(1073741824 / num)) == Math.sqrt(1073741824 / num)
    );
  }
}

```
