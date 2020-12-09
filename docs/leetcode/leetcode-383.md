# 赎金信

> https://leetcode-cn.com/problems/ransom-note/description/

给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。如果可以构成，返回 true ；否则返回 false。

(题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。)

注意：

```
你可以假设两个字符串均只含有小写字母。

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
```

## 思考

本题利用的是 Map 的思想，不难。

## 代码

```java
/*
 * @lc app=leetcode.cn id=383 lang=java
 *
 * [383] 赎金信
 */
class Solution {

  public boolean canConstruct(String ransomNote, String magazine) {
    int[] value = new int[26];
    for (int i = 0; i < magazine.length(); i++) {
      int index = magazine.charAt(i) - 'a';
      value[index]++;
    }
    for (int i = 0; i < ransomNote.length(); i++) {
      int index = ransomNote.charAt(i) - 'a';
      value[index]--;
      if (value[index] < 0) return false;
    }
    return true;
  }
}

```
