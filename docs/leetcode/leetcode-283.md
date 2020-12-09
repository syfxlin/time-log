# 移动零

> https://leetcode-cn.com/problems/move-zeroes/description/

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

```
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
```

说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

## 思考

简单

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=283 lang=java
 *
 * [283] 移动零
 */
class Solution {

  public void moveZeroes(int[] nums) {
    int start = 0;
    int end = 0;
    int len = nums.length;
    if (len <= 1) return;
    out:for (int i = 0; i < len && start < len; i++) {
      while (nums[start] == 0) {
        start++;
        if (start >= len) {
          break out;
        }
      }
      if (start == end) {
        start++;
        end++;
      }
      if (start != end) {
        nums[end] = nums[start];
        start++;
        end++;
      }
    }
    for (int i = end; i < len; i++) {
      nums[i] = 0;
    }
  }
}

```
