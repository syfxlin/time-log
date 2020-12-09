# 有效的括号 - LeetCode

> https://leetcode-cn.com/problems/valid-parentheses/

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

```
输入: "()"
输出: true
```

示例 2:

```
输入: "()[]{}"
输出: true
```

示例 3:

```
输入: "(]"
输出: false
```

## 思考

这题就是那种典型的数据栈题目，判断如果是左括号就压栈，如果是右括号就查看栈顶，若不是与之配对的左括号就直接 return false，节省时间，若是这继续下一个字符。

**注意点**

- 数据中会有 null 和空字符串的出现
- 数据中有单独的右括号出现
- 数据中有单独的左括号出现，这时当循环结束后 flag 依旧时 true，要注意判断这时栈是否为空

## AC 代码

```java
import java.util.LinkedList;

/*
 * @lc app=leetcode.cn id=20 lang=java
 *
 * [20] 有效的括号
 */
class Solution {

  public boolean isValid(String s) {
    if (s == null) return false;
    if (s.length() == 0) return true;
    LinkedList<Character> queue = new LinkedList<Character>();
    boolean is = true;
    for (int i = 0; i < s.length(); i++) {
      char ch = s.charAt(i);
      if (ch == '(' || ch == '{' || ch == '[') {
        queue.push(ch);
      } else if (ch == ')') {
        if (queue.size() <= 0 || queue.peek() != '(') {
          is = false;
          return is;
        }
        queue.pop();
      } else if (ch == ']') {
        if (queue.size() <= 0 || queue.peek() != '[') {
          is = false;
          return is;
        }
        queue.pop();
      } else if (ch == '}') {
        if (queue.size() <= 0 || queue.peek() != '{') {
          is = false;
          return is;
        }
        queue.pop();
      }
    }
    if (queue.size() != 0) {
      is = false;
    }
    return is;
  }
}

```
