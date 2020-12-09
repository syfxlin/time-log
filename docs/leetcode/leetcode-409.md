# 最长回文串

> https://leetcode-cn.com/problems/longest-palindrome

给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

注意:
假设字符串的长度不会超过 1010。

示例 1:

```
输入:
"abccccdd"

输出:
7

解释:
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
```

## 思考

如果是回文串的话则必须有两个相同的字符，另外还可以另外添加一个单字符作为中心字符，这样只需要扫描双数字符有多少并判断有没有单数字符，并注意单数字符也是包含双数的除了 1，如 3，可以分成 2+1，那个 2 也是双数

## 代码

```java
/*
 * @lc app=leetcode.cn id=409 lang=java
 *
 * [409] 最长回文串
 * 87% 81%
 */
class Solution {

  public int longestPalindrome(String s) {
    if (s == null || s.length() == 0) return 0;
    int[] map = new int[52];
    for (int i = 0; i < s.length(); i++) {
      char ch = s.charAt(i);
      map[ch >= 'a' ? ch - 'a' : ch - 'A' + 26]++;
    }
    int num = 0;
    boolean flag = false;
    for (int i = 0; i < 52; i++) {
      if (map[i] != 0) {
        if (map[i] % 2 == 0) {
          num += map[i];
        } else {
          num += map[i] - 1;
          flag = true;
        }
      }
    }
    if (flag) {
      num++;
    }
    return num;
  }
}

```
