# 二进制求和 - LeetCode

> https://leetcode-cn.com/problems/add-binary/

给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为非空字符串且只包含数字 1 和 0。

示例 1:

```
输入: a = "11", b = "1"
输出: "100"
```

示例 2:

```
输入: a = "1010", b = "1011"
输出: "10101"
```

## 思考

题目就是将两个二进制相加，只要计算进位，当前位的两个值，然后进行计算得出当前位和进位，如此循坏即可

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=67 lang=java
 *
 * [67] 二进制求和
 */
class Solution {

  public String addBinary(String a, String b) {
    if (a == null) return b;
    if (b == null) return a;
    String out = "";
    int len_a = a.length();
    int len_b = b.length();
    if (len_a == 0) return b;
    if (len_b == 0) return a;
    int up = 0;
    for (int i = 0; i < (len_a > len_b ? len_a : len_b); i++) {
      int ch_a;
      int ch_b;
      if (len_a - i - 1 < 0) {
        ch_a = 0;
      } else {
        ch_a = a.charAt(len_a - i - 1) - '0';
      }
      if (len_b - i - 1 < 0) {
        ch_b = 0;
      } else {
        ch_b = b.charAt(len_b - i - 1) - '0';
      }
      if (up + ch_a + ch_b == 3) {
        out = '1' + out;
        up = 1;
      } else if (up + ch_a + ch_b == 2) {
        out = '0' + out;
        up = 1;
      } else if (up + ch_a + ch_b == 1) {
        out = '1' + out;
        up = 0;
      } else if (up + ch_a + ch_b == 0) {
        out = '0' + out;
        up = 0;
      }
    }
    if (up != 0) {
      out = '1' + out;
    }
    return out;
  }
}

```
