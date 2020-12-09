# [75]颜色分类

> [颜色分类](https://leetcode-cn.com/problems/sort-colors/description/)

给定一个包含红色、白色和蓝色，一共*n*个元素的数组，**[原地](https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95 "https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95")**对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、1 和 2 分别表示红色、白色和蓝色。

**注意:**  
不能使用代码库中的排序函数来解决这道题。

**示例:**

```
输入: [2,0,2,1,1,0]
输出: [0,0,1,1,2,2]
```

**进阶：**

- 一个直观的解决方案是使用计数排序的两趟扫描算法。  
  首先，迭代计算出 0、1 和 2 元素的个数，然后按照 0、1、2 的排序，重写当前数组。
- 你能想出一个仅使用常数空间的一趟扫描算法吗？

## 思考

本题可以通过计数排序的方法进行排序，利用计数排序的先计数然后填充，可以达到 O(n)的时间复杂度，但是有一种更巧妙的方法称之为荷兰国旗问题，通过双指针的方式解决。

## 代码

```java
/*
 * @lc app=leetcode.cn id=75 lang=java
 *
 * [75] 颜色分类
 */

// @lc code=start
class Solution {

  public void sortColors(int[] nums) {
    int[] count = new int[3];
    for (int i = 0; i < nums.length; i++) {
      count[nums[i]]++;
    }
    int i = 0;
    for (; i < count[0]; i++) {
      nums[i] = 0;
    }
    for (; i < count[0] + count[1]; i++) {
      nums[i] = 1;
    }
    for (; i < count[0] + count[1] + count[2]; i++) {
      nums[i] = 2;
    }
  }
}
// @lc code=end

```
