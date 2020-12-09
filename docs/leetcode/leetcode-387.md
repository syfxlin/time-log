# 字符串中的第一个唯一字符

> https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/

给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

案例:

```
s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.
```

注意事项：您可以假定该字符串只包含小写字母。

## 思考

本题依旧采用 Map 思路，利用 26 个字母的 Map 记录所有字母出现的次数，然后进行第二次循环，第二次不是制作 Map 而是读取 Map 的值，判断哪个才是最先唯一的字母

## 代码

```java
/*
 * @lc app=leetcode.cn id=387 lang=java
 *
 * [387] 字符串中的第一个唯一字符
 */
class Solution {

  public int firstUniqChar(String s) {
    int len = s.length();
    int[] map = new int[26];
    char[] chs = s.toCharArray();
    for (int i = 0; i < len; i++) {
      map[chs[i] - 'a']++;
    }
    for (int i = 0; i < len; i++) {
      if (map[chs[i] - 'a'] == 1) {
        return i;
      }
    }
    return -1;
  }
}

```
