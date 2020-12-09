# 最长公共前缀 - LeetCode

> https://leetcode-cn.com/problems/longest-common-prefix/

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

```
输入: ["flower","flow","flight"]
输出: "fl"
```

示例 2:

```
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```

说明:
所有输入只包含小写字母 a-z 。

## 思考

题目相对简单，只要先判断最短的的 String，然后逐个字符比较

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=14 lang=java
 *
 * [14] 最长公共前缀
 */
class Solution {

  public String longestCommonPrefix(String[] strs) {
    if (strs.length <= 0) return "";
    int min = Integer.MAX_VALUE;
    for (String var : strs) {
      min = min < var.length() ? min : var.length();
    }
    if (min == 0) return "";
    String s = "";
    for (int i = 0; i < min; i++) {
      boolean is = true;
      for (int j = 1; j < strs.length; j++) {
        if (strs[0].charAt(i) != strs[j].charAt(i)) {
          is = false;
        }
      }
      if (is) {
        s += strs[0].charAt(i);
      } else {
        return s;
      }
    }
    return s;
  }
}

```
