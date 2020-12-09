# 最后一个单词的长度 - LeetCode

> https://leetcode-cn.com/problems/length-of-last-word/

给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。

如果不存在最后一个单词，请返回 0 。

说明：一个单词是指由字母组成，但不包含任何空格的字符串。

示例:

```
输入: "Hello World"
输出: 5
```

## 思考

题目是简单的，但是为了提高运行效率可以自己写判断，而不用分片
由于有后面有空行的情况，直接使用 trim 会相对方便些，实际性能并没有损失

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=58 lang=java
 *
 * [58] 最后一个单词的长度
 */
class Solution {

  public int lengthOfLastWord(String s) {
    if (
      s == null || s.length() <= 0 || (s.length() == 1 && s.charAt(0) == ' ')
    ) return 0;
    s = s.trim();
    int len = 0;
    for (int i = s.length() - 1; i >= 0; i--) {
      if (s.charAt(i) != ' ') {
        len++;
      } else {
        break;
      }
    }
    return len;
  }
}

```
