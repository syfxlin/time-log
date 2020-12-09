# [3] 无重复字符的最长子串

> [无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/)

给定一个字符串，请你找出其中不含有重复字符的 **最长子串** 的长度。

**示例 1:**

```
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

**示例 2:**

```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

**示例 3:**

```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是"wke"，所以其长度为 3。
    请注意，你的答案必须是 子串 的长度，"pwke"是一个子序列，不是子串。
```

## 思考

利用滑动窗口解决此题，通过数组的 ASCII 映射可以进一步减少时间复杂度

## 代码

```java
/*
 * @lc app=leetcode.cn id=3 lang=java
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
class Solution {

  public int lengthOfLongestSubstring(String s) {
    if (s.length() <= 1) {
      return s.length();
    }
    int[] window = new int[128];
    int left = 0;
    int right = 0;
    int max = 0;
    while (right < s.length()) {
      int chr = s.charAt(right);
      window[chr]++;
      if (window[chr] > 1) {
        max = Math.max(max, right - left);
      }
      while (window[chr] > 1) {
        int chl = s.charAt(left);
        if (window[chl] >= 1) {
          window[chl]--;
        }
        left++;
      }
      right++;
    }
    max = Math.max(max, right - left);
    return max;
  }
}
// @lc code=end

```
