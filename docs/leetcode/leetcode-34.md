# [34]在排序数组中查找元素的第一个和最后一个位置

> [在排序数组中查找元素的第一个和最后一个位置](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/)

给定一个按照升序排列的整数数组`nums`，和一个目标值`target`。找出给定目标值在数组中的开始位置和结束位置。

你的算法时间复杂度必须是*O*(log*n*) 级别。

如果数组中不存在目标值，返回`[-1, -1]`。

**示例 1:**

```
输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]
```

**示例 2:**

```
输入: nums = [5,7,7,8,8,10], target = 6
输出: [-1,-1]
```

## 思考

这个就是二分搜索的变种，只需要在二分搜索的基础上稍加修改即可。如果找最前的位置则在找到的时候不退出，移动 end 指针继续查找，如果找最后一个位置则在找到的时候不退出，移动 start 指针继续查找。需要注意当两个元素的时候会遇到 Bug，需要加一个判断。

## 代码

```java
/*
 * @lc app=leetcode.cn id=34 lang=java
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
class Solution {

  public int[] searchRange(int[] nums, int target) {
    if (nums.length <= 0) return new int[] { -1, -1 };
    return new int[] {
      binarySearch(nums, target, -1),
      binarySearch(nums, target, 1),
    };
  }

  public int binarySearch(int[] nums, int key, int index) {
    int start = 0;
    int end = nums.length - 1;
    while (start + 1 < end) {
      int mid = start + (end - start) / 2;
      if (nums[mid] == key) {
        if (index == -1) {
          end = mid;
        } else if (index == 1) {
          start = mid;
        }
      } else if (nums[mid] < key) {
        start = mid;
      } else {
        end = mid;
      }
    }
    int in = -1;
    if (nums[start] == key && nums[end] == key) {
      in = index == -1 ? start : end;
    } else if (nums[start] == key) {
      in = start;
    } else if (nums[end] == key) {
      in = end;
    }
    return in;
  }
}
// @lc code=end

```
