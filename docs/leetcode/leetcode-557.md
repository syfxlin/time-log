# [557]反转字符串中的单词 III

> [反转字符串中的单词 III](https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/description/)

给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

**示例 1:**

```
输入: "Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc"
```

**注意：**在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

## 思考

利用 Java 的 StringBuilder 的反转和 Split 即可完成本题，如果使用 Java8 的 Stream 可以将代码缩短到一行

## 代码

```java
import java.util.Arrays;
import java.util.stream.Collectors;

/*
 * @lc app=leetcode.cn id=557 lang=java
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
class Solution {

  public String reverseWords(String s) {
    return Arrays
      .stream(s.split(" "))
      .map(item -> new StringBuilder(item).reverse().toString())
      .collect(Collectors.joining(" "));
  }
}
// @lc code=end

```
