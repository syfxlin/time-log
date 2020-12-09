# 计数质数 - LeetCode

> https://leetcode-cn.com/problems/count-primes

统计所有小于非负整数 n 的质数的数量。

示例:

```
输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
```

## 思考

要使用`埃拉托斯特尼筛法`或者`欧拉筛法`

[埃拉托斯特尼筛法](https://zh.wikipedia.org/wiki/%E5%9F%83%E6%8B%89%E6%89%98%E6%96%AF%E7%89%B9%E5%B0%BC%E7%AD%9B%E6%B3%95)

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=204 lang=java
 *
 * [204] 计数质数
 */
class Solution {

  public int countPrimes(int n) {
    int[] base = {
      2,
      3,
      5,
      7,
      11,
      13,
      17,
      19,
      23,
      29,
      31,
      37,
      41,
      43,
      47,
      53,
      59,
      61,
      67,
      71,
      73,
      79,
      83,
      89,
      97,
      101,
      103,
      107,
      109,
      113,
    };
    if (n <= 114) {
      for (int i = 0; i < base.length; i++) {
        if (n <= base[i]) {
          return i;
        }
      }
    }
    boolean[] noprimes = new boolean[n];
    int count = 0;
    for (int i = 2; i < n; i++) {
      if (noprimes[i] == false) {
        count++;
        for (int j = 2; j * i < n; j++) {
          noprimes[j * i] = true;
        }
      }
    }
    return count;
  }
}

```
