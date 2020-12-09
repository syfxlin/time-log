# [394]字符串解码

# [字符串解码](https://leetcode-cn.com/problems/decode-string/description/)

给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为:`k[encoded_string]`，表示其中方括号内部的*encoded_string*正好重复*k*次。注意*k*保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数*k*，例如不会出现像`3a`或`2[4]`的输入。

**示例:**

```
s = "3[a]2[bc]", 返回 "aaabcbc".
s = "3[a2[c]]", 返回 "accaccacc".
s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".
```

## 思考

利用递归可以将子模式串导入下一级递归中进行处理，然后返回字符串。

还有一种方式可以使用类似于正则表达式的方式来解题。

## 代码

```java
/*
 * @lc app=leetcode.cn id=394 lang=java
 *
 * [394] 字符串解码
 */

// @lc code=start
class Solution {

  public String decodeString(String s) {
    return decode(s);
  }

  public String decode(String s) {
    int num = 0;
    String res = "";
    for (int i = 0; i < s.length(); i++) {
      char ch = s.charAt(i);
      if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
        res += ch;
      } else if (ch >= '0' && ch <= '9') {
        num = 10 * num + (ch - '0');
      } else if (ch == '[') {
        int count = 0;
        String inner = "";
        i++;
        while (count != 0 || s.charAt(i) != ']') {
          if (s.charAt(i) == '[') {
            count++;
          } else if (s.charAt(i) == ']') {
            count--;
          }
          inner += s.charAt(i);
          i++;
        }
        String out = decode(inner);
        while (num > 0) {
          res += out;
          num--;
        }
      }
    }
    return res;
  }
}
// @lc code=end

```
