# 验证回文串 - LeetCode

> https://leetcode-cn.com/problems/valid-palindrome

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

```
输入: "A man, a plan, a canal: Panama"
输出: true
```

示例 2:

```
输入: "race a car"
输出: false
```

## 思考

本题只是判断回文串，而且是整个回文串判断，所以较为简单

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=125 lang=java
 *
 * [125] 验证回文串
 */
class Solution {

  public boolean isPalindrome(String s) {
    if (s.length() <= 0) return true;
    int start = 0;
    int end = s.length() - 1;
    Re:while (start < end) {
      char startCh = s.charAt(start);
      while (
        !(
          (startCh >= 'a' && startCh <= 'z') ||
          (startCh >= 'A' && startCh <= 'Z') ||
          (startCh >= '0' && startCh <= '9')
        )
      ) {
        start++;
        if (start >= end) break Re;
        startCh = s.charAt(start);
      }
      char endCh = s.charAt(end);
      while (
        !(
          (endCh >= 'a' && endCh <= 'z') ||
          (endCh >= 'A' && endCh <= 'Z') ||
          (endCh >= '0' && endCh <= '9')
        )
      ) {
        end--;
        if (start >= end) break Re;
        endCh = s.charAt(end);
      }
      if (startCh >= 'A' && startCh <= 'Z') {
        startCh += 32;
      }
      if (endCh >= 'A' && endCh <= 'Z') {
        endCh += 32;
      }
      if (startCh == endCh) {
        start++;
        end--;
      } else {
        return false;
      }
    }
    return true;
  }
}

```
