# [273]整数转换英文表示

> [整数转换英文表示](https://leetcode-cn.com/problems/integer-to-english-words/description/)

将非负整数转换为其对应的英文表示。可以保证给定输入小于 2<sup>31</sup>\- 1 。

**示例 1:**

```
输入: 123
输出: "One Hundred Twenty Three"
```

**示例 2:**

```
输入: 12345
输出: "Twelve Thousand Three Hundred Forty Five"
```

**示例 3:**

```
输入: 1234567
输出: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
```

**示例 4:**

```
输入: 1234567891
输出: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
```

## 思考

此题只要了解英文的规则即可完成

## 代码

```java
/*
 * @lc app=leetcode.cn id=273 lang=java
 *
 * [273] 整数转换英文表示
 */

// @lc code=start
class Solution {

  public String numberToWords(int num) {
    String[] map1 = {
      "Zero",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    };
    String[] map2 = {
      "",
      "Ten",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    };
    if (num < 20) {
      return map1[num];
    }
    if (num < 100) {
      return map2[num / 10] + (num % 10 == 0 ? "" : " " + map1[num % 10]);
    }
    if (num < 1_000) {
      return (
        map1[num / 100] +
        " Hundred" +
        (num % 100 == 0 ? "" : " " + numberToWords(num % 100))
      );
    }
    if (num < 1_000_000) {
      return (
        numberToWords(num / 1_000) +
        " Thousand" +
        (num % 1_000 == 0 ? "" : " " + numberToWords(num % 1_000))
      );
    }
    if (num < 1_000_000_000) {
      return (
        numberToWords(num / 1_000_000) +
        " Million" +
        (num % 1_000_000 == 0 ? "" : " " + numberToWords(num % 1_000_000))
      );
    }
    return (
      numberToWords(num / 1_000_000_000) +
      " Billion" +
      (num % 1_000_000_000 == 0 ? "" : " " + numberToWords(num % 1_000_000_000))
    );
  }
}
// @lc code=end

```
