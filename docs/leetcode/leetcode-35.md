# 搜索插入位置 - LeetCode

> https://leetcode-cn.com/problems/search-insert-position

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

```
输入: [1,3,5,6], 5
输出: 2
```

示例 2:

```
输入: [1,3,5,6], 2
输出: 1
```

示例 3:

```
输入: [1,3,5,6], 7
输出: 4
```

示例 4:

```
输入: [1,3,5,6], 0
输出: 0
```

## 思考

这题目其实就是二分查找的变种，只不过将没找到的情况做一些处理即可

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=35 lang=java
 *
 * [35] 搜索插入位置
 */
class Solution {

  public int searchInsert(int[] nums, int target) {
    // 由于二分查找不会搜索索引外的数据，当target大于或小于索引的时候会导致定位错误，使用这种方式可以节约时间同时又可以解决索引问题。
    if (target > nums[nums.length - 1]) return nums.length;
    if (target < nums[0]) return 0;
    int index = -1;
    int start = 0;
    int end = nums.length - 1;
    while (start + 1 < end) {
      int mid = start + (end - start) / 2;
      if (nums[mid] == target) {
        if (index == -1) {
          end = mid;
        } else if (index == 1) {
          start = mid;
        }
      } else if (nums[mid] < target) {
        start = mid;
      } else {
        end = mid;
      }
    }
    if (nums[start] == target) {
      return start;
    }
    if (nums[end] == target) {
      return end;
    }
    return end;
  }
}

```
