# 实现 strstr - LeetCode

> https://leetcode-cn.com/problems/implement-strstr/

实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从 0 开始)。如果不存在，则返回 -1。

示例 1:

```
输入: haystack = "hello", needle = "ll"
输出: 2
```

示例 2:

```
输入: haystack = "aaaaa", needle = "bba"
输出: -1
说明:
```

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。

## 思考

解决这种题目的最佳算法是 KMP，它的时间复杂度最小，但是 KMP 算法并不好写，这题就使用暴力解法

暴力解法的方案只需两个 for，通过判断开头是否相等，若相等就进入模式匹配，即第二个 for 循环中，若匹配到不符合的字符就退出匹配，同时若剩余的 haystack 字符串字符数少于 needle 的时候就直接退出，节省时间。

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=28 lang=java
 *
 * [28] 实现strStr()
 */
class Solution {

  public int strStr(String haystack, String needle) {
    int hay_len = haystack.length();
    int nee_len = needle.length();
    if (haystack == null || needle == null) return -1;
    if (hay_len < nee_len) return -1;
    if (nee_len == 0) return 0;
    for (int i = 0; i < hay_len; i++) {
      if (haystack.charAt(i) == needle.charAt(0)) {
        boolean is = true;
        if (nee_len > hay_len - i) return -1;
        for (int j = 1; j < nee_len; j++) {
          if (haystack.charAt(i + j) != needle.charAt(j)) {
            is = false;
            break;
          }
        }
        if (is) {
          return i;
        }
      }
    }
    return -1;
  }
}

```
