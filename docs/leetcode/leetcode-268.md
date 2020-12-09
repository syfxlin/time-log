# 缺失数字 - LeetCode

> https://leetcode-cn.com/problems/missing-number

给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。

示例 1:

```
输入: [3,0,1]
输出: 2
```

示例 2:

```
输入: [9,6,4,2,3,5,7,0,1]
输出: 8
```

说明:
你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?

## 思考

最简单的方式是求和，然后通过等差数列求和减去数组和然后就是返回值，缺少的元素，当数组中间没有缺失值的时候就应该补上最大值的后一位

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=268 lang=java
 *
 * [268] 缺失数字
 */
class Solution {

  public int missingNumber(int[] nums) {
    int max = 0;
    int sum = 0;
    for (int i = 0; i < nums.length; i++) {
      max = max > nums[i] ? max : nums[i];
      sum += nums[i];
    }
    if (max == nums.length - 1) return max + 1;
    return (nums.length + 1) * max / 2 - sum;
  }
}

```
