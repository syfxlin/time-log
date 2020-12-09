# [238]除自身以外数组的乘积

> [除自身以外数组的乘积](https://leetcode-cn.com/problems/product-of-array-except-self/description/)

给定长度为*n*的整数数组`nums`，其中*n*\> 1，返回输出数组`output`，其中`output[i]`等于`nums`中除`nums[i]`之外其余各元素的乘积。

**示例:**

```
输入: [1,2,3,4]
输出: [24,12,8,6]
```

**说明:**请**不要使用除法，**且在 O(_n_) 时间复杂度内完成此题。

**进阶：**  
你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组**不被视为**额外空间。）

## 思考

由于是计算除该处的其他 nums 的乘积，所以可以认为是，该位置的左右总乘积相乘的结果，通过 2 次遍历即可分别得出各个的左右乘积，然后相乘即可。

## 代码

```java
/*
 * @lc app=leetcode.cn id=238 lang=java
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
class Solution {

  public int[] productExceptSelf(int[] nums) {
    if (nums.length == 0) return nums;
    int pro = 1;
    int[] output = new int[nums.length];
    output[0] = 1;
    output[nums.length - 1] = 1;
    for (int i = 1; i < output.length; i++) {
      pro *= nums[i - 1];
      output[i] = pro;
    }
    pro = 1;
    for (int i = output.length - 2; i >= 0; i--) {
      pro *= nums[i + 1];
      output[i] = output[i] * pro;
    }
    return output;
  }
}
// @lc code=end

```
