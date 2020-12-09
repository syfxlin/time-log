# 反转字符串中的元音字母

> https://leetcode-cn.com/problems/reverse-vowels-of-a-string/description/

编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

示例 1:

```
输入: "hello"
输出: "holle"
```

示例 2:

```
输入: "leetcode"
输出: "leotcede"
```

说明:
元音字母不包含字母"y"。

## 思考

本题就是上一个反转字符的加强版，但问题不大

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=345 lang=java
 *
 * [345] 反转字符串中的元音字母
 */
class Solution {

  public String reverseVowels(String s) {
    if (s == null || s.trim().equals("")) return s;
    char[] chs = s.toCharArray();
    int start = 0;
    int end = chs.length - 1;
    out:while (start < end) {
      if (
        chs[start] == 'a' ||
        chs[start] == 'e' ||
        chs[start] == 'i' ||
        chs[start] == 'o' ||
        chs[start] == 'u' ||
        chs[start] == 'A' ||
        chs[start] == 'E' ||
        chs[start] == 'I' ||
        chs[start] == 'O' ||
        chs[start] == 'U'
      ) {
        while (
          chs[end] != 'a' &&
          chs[end] != 'e' &&
          chs[end] != 'i' &&
          chs[end] != 'o' &&
          chs[end] != 'u' &&
          chs[end] != 'A' &&
          chs[end] != 'E' &&
          chs[end] != 'I' &&
          chs[end] != 'O' &&
          chs[end] != 'U'
        ) {
          if (start >= end) break out;
          end--;
        }
        char ch = chs[start];
        chs[start] = chs[end];
        chs[end] = ch;
        end--;
      }
      start++;
    }
    return new String(chs);
  }
}

```
