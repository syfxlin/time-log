# 找不同

> https://leetcode-cn.com/problems/find-the-difference/comments/

给定两个字符串 s 和 t，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

请找出在 t 中被添加的字母。

示例:

```
输入：
s = "abcd"
t = "abcde"

输出：
e

解释：
'e' 是那个被添加的字母。
```

## 思考

本题可以使用 Map 的方式进行解决，但似乎用异或思想会更好些，因为有两个字符串，只有一个字符是不同的，其他都是成对的

## 代码

```java
/*
 * @lc app=leetcode.cn id=389 lang=java
 *
 * [389] 找不同 66%
 */
class Solution {

  public char findTheDifference(String s, String t) {
    int len = s.length();
    int[] map = new int[26];
    char[] chs = s.toCharArray();
    char[] cht = t.toCharArray();
    for (int i = 0; i < len; i++) {
      map[chs[i] - 'a']++;
    }
    for (int i = 0; i < len; i++) {
      map[cht[i] - 'a']--;
      if (map[cht[i] - 'a'] < 0) {
        return cht[i];
      }
    }
    return cht[len];
  }
}

/*
 * @lc app=leetcode.cn id=389 lang=java
 *
 * [389] 找不同 96%
 */
class Solution {

  public char findTheDifference(String s, String t) {
    int len = s.length();
    char[] chs = s.toCharArray();
    char[] cht = t.toCharArray();
    char diff = 0;
    for (int i = 0; i < len; i++) {
      diff ^= chs[i];
    }
    for (int i = 0; i < len + 1; i++) {
      diff ^= cht[i];
    }
    return diff;
  }
}

```
