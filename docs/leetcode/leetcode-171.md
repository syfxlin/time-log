# Excel 表列序号 - LeetCode

> https://leetcode-cn.com/problems/excel-sheet-column-number/

给定一个 Excel 表格中的列名称，返回其相应的列序号。

例如，

```
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...
```

示例 1:

```
输入: "A"
输出: 1
```

示例 2:

```
输入: "AB"
输出: 28
```

示例 3:

```
输入: "ZY"
输出: 701
```

## 思考

本题就是上一题 Excel 的逆向

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=171 lang=java
 *
 * [171] Excel表列序号
 */
class Solution {

  public int titleToNumber(String s) {
    int len = s.length();
    int re = 0;
    for (int i = len - 1; i >= 0; i--) {
      re += Math.pow(26, ((len - 1) - i)) * (s.charAt(i) - 'A' + 1);
    }
    return re;
  }
}

```
