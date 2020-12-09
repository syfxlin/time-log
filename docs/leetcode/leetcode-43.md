# [43]字符串相乘

> [字符串相乘](https://leetcode-cn.com/problems/multiply-strings/description/)

给定两个以字符串形式表示的非负整数`num1`和`num2`，返回`num1`和`num2`的乘积，它们的乘积也表示为字符串形式。

**示例 1:**

```
输入: num1 = "2", num2 = "3"
输出: "6"
```

**示例 2:**

```
输入: num1 = "123", num2 = "456"
输出: "56088"
```

**说明：**

1.  `num1`和`num2`的长度小于 110。
2.  `num1`和`num2`只包含数字`0-9`。
3.  `num1`和`num2`均不以零开头，除非是数字 0 本身。
4.  **不能使用任何标准库的大数类型（比如 BigInteger）**或**直接将输入转换为整数来处理**。

## 思考

假设，`num1`的长度为`m`，`num2`的长度为`n`，那么它们乘积的长度一定不超过`m + n`。

比如`9 * 9 = 81`，它绝不会到达三位数。

所以，我们可以创建一个数组`int[]`来保存结果，其长度为`m + n`。

先将相乘的数写入数组然后处理进位即可，由于 9\*9 之类的需要进位，所以，需要在数组的前方留出一个空位，用来给最高位进位，在输出的时候可以判断最高进位是否为 0，不为 0 则输出。

## 代码

```java
import java.util.Arrays;

/*
 * @lc app=leetcode.cn id=43 lang=java
 *
 * [43] 字符串相乘
 */

// @lc code=start
class Solution {

  public String multiply(String num1, String num2) {
    if (num1.charAt(0) == '0' || num2.charAt(0) == '0') return "0";
    int[] nums = new int[num1.length() + num2.length()];
    for (int i = num1.length() - 1; i >= 0; i--) {
      for (int j = num2.length() - 1; j >= 0; j--) {
        nums[i + j + 1] += (num1.charAt(i) - '0') * (num2.charAt(j) - '0');
      }
    }
    int carry = 0;
    for (int i = nums.length - 1; i >= 0; i--) {
      nums[i] += carry;
      carry = nums[i] / 10;
      nums[i] %= 10;
    }
    StringBuilder sb = new StringBuilder();
    for (int i = 0; i < nums.length; i++) {
      if (i == 0 && nums[i] == 0) continue;
      sb.append(nums[i]);
    }
    return sb.toString();
  }
}
// @lc code=end

```
