# Excel 表列名称 - LeetCode

> https://leetcode-cn.com/problems/excel-sheet-column-title/

给定一个正整数，返回它在 Excel 表中相对应的列名称。

例如，

```
    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB
    ...
```

示例 1:

```
输入: 1
输出: "A"
```

示例 2:

```
输入: 28
输出: "AB"
```

示例 3:

```
输入: 701
输出: "ZY"
```

## 思考

折腾了我很久的题目，草

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=168 lang=java
 *
 * [168] Excel表列名称
 */
class Solution {

  public String convertToTitle(int n) {
    char base = 'A';
    String out = "";
    while (n > 26) {
      n--;
      out = (char) (base + n % 26) + out;
      n /= 26;
    }
    n--;
    out = (char) (base + n) + out;
    return out;
  }
}

```
