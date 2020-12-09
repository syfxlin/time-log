# 加一 - LeetCode

> https://leetcode-cn.com/problems/plus-one/

给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:

```
输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
```

示例 2:

```
输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
```

## 思考

为了提高运行效率，不能将数组转换为 int 后再转换为数组，较快的解决方案是从最低位向上加，需要注意有可能会多出一位，还有空数组的情况

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=66 lang=java
 *
 * [66] 加一
 */
class Solution {

  public int[] plusOne(int[] digits) {
    if (digits.length <= 0) return new int[0];
    int addHigh = 1;
    for (int i = digits.length - 1; i >= 0; i--) {
      digits[i] = (digits[i] + addHigh);
      addHigh = digits[i] / 10;
      digits[i] = digits[i] % 10;
      if (addHigh == 0) return digits;
    }
    if (addHigh != 0) {
      int[] nums = new int[digits.length + 1];
      nums[0] = addHigh;
      for (int i = 0; i < digits.length; i++) {
        nums[i + 1] = digits[i];
      }
      return nums;
    }
    return digits;
  }
}

```
