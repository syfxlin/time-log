# [438]找到字符串中所有字母异位词

> [找到字符串中所有字母异位词](https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/description/)

给定一个字符串**s**和一个非空字符串**p**，找到**s**中所有是**p**的字母异位词的子串，返回这些子串的起始索引。

字符串只包含小写英文字母，并且字符串**s**和**p**的长度都不超过 20100。

**说明：**

- 字母异位词指字母相同，但排列不同的字符串。
- 不考虑答案输出的顺序。

**示例 1:**

```
输入:
s: "cbaebabacd" p: "abc"

输出:
[0, 6]

解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
```

**示例 2:**

```
输入:
s: "abab" p: "ab"

输出:
[0, 1, 2]

解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。
```

## 思考

下面画图理解一下，needs 和 window 相当于计数器，分别记录 T 中字符出现次数和窗口中的相应字符的出现次数。

初始状态：

![](/storage/images/uid_1/W96tgnurGe2BplFXzB4KGnv0zMJc3Ug4f79alqB4.png)

增加 right，直到窗口 [left, right] 包含了 T 中所有字符：

![](/storage/images/uid_1/43ymMXZ8OQGPi16uP1uYR8RZLupqCdl5RKI8GsTz.png)

现在开始增加 left，缩小窗口 [left, right]。

![](/storage/images/uid_1/dVKj5IEhPycFl76G9Z1xT7AAsWj8mpX4BDMSX8j9.png)

直到窗口中的字符串不再符合要求，left 不再继续移动。

![](/storage/images/uid_1/KWieBqi83zJoWWx1GyuzsZngHi4Yswejm7SYrbP1.png)

之后重复上述过程，先移动 right，再移动 left…… 直到 right 指针到达字符串 S 的末端，算法结束。

此方法稍加改造即可完成本题

## 代码

```java
import java.util.LinkedList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=438 lang=java
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
class Solution {

  public List<Integer> findAnagrams(String s, String p) {
    List<Integer> list = new LinkedList<>();
    int left = 0;
    int right = 0;
    int[] needs = new int[26];
    int[] windows = new int[26];
    int total = 0;
    int plen = p.length();
    for (int i = 0; i < plen; i++) {
      needs[p.charAt(i) - 'a']++;
    }
    while (right < s.length()) {
      int chr = s.charAt(right) - 'a';
      if (needs[chr] > 0) {
        windows[chr]++;
        if (windows[chr] <= needs[chr]) {
          total++;
        }
      }
      while (total == plen) {
        if (right - left + 1 == plen) {
          list.add(left);
        }
        int chl = s.charAt(left) - 'a';
        if (needs[chl] > 0) {
          windows[chl]--;
          if (windows[chl] < needs[chl]) {
            total--;
          }
        }
        left++;
      }
      right++;
    }
    return list;
  }
}
// @lc code=end

```
