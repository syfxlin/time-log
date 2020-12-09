# [76]最小覆盖子串

> [最小覆盖子串](https://leetcode-cn.com/problems/minimum-window-substring/description/)

给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字母的最小子串。

**示例：**

```
输入: S = "ADOBECODEBANC", T = "ABC"
输出: "BANC"
```

**说明：**

- 如果 S 中不存这样的子串，则返回空字符串`""`。
- 如果 S 中存在这样的子串，我们保证它是唯一的答案。

## 思考

见 [438] 找到字符串中所有字母异位词

## 代码

```java
/*
 * @lc app=leetcode.cn id=76 lang=java
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
class Solution {

  public String minWindow(String s, String t) {
    if (s.length() < t.length()) {
      return "";
    }
    int[] needs = new int[128];
    int[] window = new int[128];
    int tlen = t.length();
    int total = 0;
    for (int i = 0; i < tlen; i++) {
      needs[t.charAt(i) - 'A']++;
    }
    int left = 0;
    int right = 0;
    String result = "";
    while (right < s.length()) {
      int chr = s.charAt(right) - 'A';
      if (needs[chr] > 0) {
        window[chr]++;
        if (window[chr] <= needs[chr]) {
          total++;
        }
      }
      while (total == tlen) {
        int chl = s.charAt(left) - 'A';
        if (needs[chl] > 0) {
          window[chl]--;
          if (window[chl] < needs[chl]) {
            total--;
          }
        }
        if (total != tlen) {
          result =
            result.length() == 0 || result.length() > right - left + 1
              ? s.substring(left, right + 1)
              : result;
        }
        left++;
      }
      right++;
    }
    return result;
  }
}
// @lc code=end

```
