# 快乐数 - LeetCode

> https://leetcode-cn.com/problems/happy-number/

编写一个算法来判断一个数是不是“快乐数”。

一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。

示例:

```
输入: 19
输出: true
解释:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

## 思考

通过观察可以知道不快乐的数必定会进入 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4 的循环中。所以可以建立几个哨兵通过跟哨兵进行对比可以得出不快乐数

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=202 lang=java
 *
 * [202] 快乐数
 */
class Solution {

  public boolean isHappy(int n) {
    int num = n;
    while (num != 1) {
      int temp = 0;
      while (num >= 10) {
        temp += (num % 10) * (num % 10);
        num /= 10;
      }
      temp += num * num;
      if (temp == 4 || temp == 16 || temp == 61 || temp == 89 || temp == 98) {
        return false;
      }
      num = temp;
    }
    return true;
  }
}

```
