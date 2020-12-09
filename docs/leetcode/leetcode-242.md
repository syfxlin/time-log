# 有效的字母异位词

> https://leetcode-cn.com/problems/valid-anagram/description/

给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例 1:

```
输入: s = "anagram", t = "nagaram"
输出: true
```

示例 2:

```
输入: s = "rat", t = "car"
输出: false
```

说明:
你可以假设字符串只包含小写字母。

进阶:
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

## 思考

本题就是经典的 Map 题，扫描字符串将字母的个数存入 Map 中，然后扫描另一个字符串，将 Map 中的数据减小，然后扫描一遍 Map 判断是否为 0，若不为 0 则代表两个字符串不相等

## 代码

```java
/*
 * @lc app=leetcode.cn id=242 lang=java
 *
 * [242] 有效的字母异位词
 */
class Solution {

  public boolean isAnagram(String s, String t) {
    int[] map = new int[26];
    for (int i = 0; i < s.length(); i++) {
      map[s.charAt(i) - 'a']++;
    }
    for (int i = 0; i < t.length(); i++) {
      map[t.charAt(i) - 'a']--;
    }
    for (int i = 0; i < 26; i++) {
      if (map[i] != 0) {
        return false;
      }
    }
    return true;
  }
}

```
