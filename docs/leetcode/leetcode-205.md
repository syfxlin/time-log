# 同构字符串 - LeetCode

> https://leetcode-cn.com/problems/isomorphic-strings/description/

给定两个字符串 s 和 t，判断它们是否是同构的。

如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。

所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。

示例 1:

```
输入: s = "egg", t = "add"
输出: true
```

示例 2:

```
输入: s = "foo", t = "bar"
输出: false
```

示例 3:

```
输入: s = "paper", t = "title"
输出: true
```

说明:
你可以假设 s 和 t 具有相同的长度。

## 思考

此题的关键是在建立双向映射表，然后逐个将字符添加到映射表中，当映射表不存在值的时候将映射添加到表中，若已经存在就提取映射进行比较，若不等则代表不是同构的

为了提高运行效率，并且字符有限，可以使用数组的方式建立映射表

还有一种通过 indexOf 判断 indexOf 的位置判断是否同构，但是这种有不确定性，可能会导致时间过长

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=205 lang=java
 *
 * [205] 同构字符串
 */
class Solution {

  public boolean isIsomorphic(String s, String t) {
    if (s == null) return true;
    int[] set1 = new int[100];
    int[] set2 = new int[100];
    int len = s.length();
    if (len <= 1) return true;
    // 初始值 31 = 0
    for (int i = 0; i < len; i++) {
      int ch1 = s.charAt(i) - 31;
      int ch2 = t.charAt(i) - 31;
      if (set1[ch1] == 0) {
        set1[ch1] = ch2;
      } else {
        if (set1[ch1] != ch2) {
          return false;
        }
      }
      if (set2[ch2] == 0) {
        set2[ch2] = ch1;
      } else {
        if (set2[ch2] != ch1) {
          return false;
        }
      }
    }
    return true;
  }
}

```
