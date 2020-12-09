# 猜数字大小

> https://leetcode-cn.com/problems/guess-number-higher-or-lower/description/

我们正在玩一个猜数字游戏。 游戏规则如下：
我从 1 到 n 选择一个数字。 你需要猜我选择了哪个数字。
每次你猜错了，我会告诉你这个数字是大了还是小了。
你调用一个预先定义好的接口 guess(int num)，它会返回 3 个可能的结果（-1，1 或 0）：

```
-1 : 我的数字比较小
 1 : 我的数字比较大
 0 : 恭喜！你猜对了！
```

示例 :

```
输入: n = 10, pick = 6
输出: 6
```

## 思考

本题使用的方法就是二分法，只是把 key 当作数组中的值而已，本题依旧需要注意二分中的一些问题，即 left 和 right 交错而过，和 mid 计算时越界问题，以及如果没有进入 mid 循环中判断 left 和 right 那个是指定数字，只要将这些问题解决了本题就很好解答了

## 代码

```java
/*
 * @lc app=leetcode.cn id=374 lang=java
 *
 * [374] 猜数字大小
 */
/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */

public class Solution extends GuessGame {

  public int guessNumber(int n) {
    int left = 1;
    int right = n;
    while (left + 1 < right) {
      int mid = left + (right - left) / 2;
      int num = guess(mid);
      if (num == -1) {
        right = mid - 1;
      }
      if (num == 1) {
        left = mid + 1;
      }
      if (num == 0) {
        return mid;
      }
    }
    if (guess(left) == 0) {
      return left;
    } else {
      return right;
    }
  }
}

```
