# [33]搜索旋转排序数组

> [搜索旋转排序数组](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/description/)

假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组`[0,1,2,4,5,6,7]`可能变为`[4,5,6,7,0,1,2]`)。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回`-1`。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是*O*(log*n*) 级别。

**示例 1:**

```
输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
```

**示例 2:**

```
输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1
```

## 思考

如果中间的数小于最右边的数，则右半段是有序的，若中间数大于最右边数，则左半段是有序的，我们只要在有序的半段里用首尾两个数组来判断目标值是否在这一区域内，这样就可以确定保留哪半边了

## 代码

```java
/*
 * @lc app=leetcode.cn id=33 lang=java
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
class Solution {

  public int search(int[] nums, int target) {
    if (nums.length <= 0) {
      return -1;
    }
    int start = 0;
    int end = nums.length - 1;
    while (start + 1 < end) {
      int mid = start + (end - start) / 2;
      if (nums[mid] == target) {
        return mid;
      } else if (nums[mid] < nums[end]) {
        if (nums[mid] < target && nums[end] >= target) {
          start = mid;
        } else {
          end = mid;
        }
      } else {
        if (nums[start] <= target && nums[mid] > target) {
          end = mid;
        } else {
          start = mid;
        }
      }
    }
    if (nums[start] == target) {
      return start;
    }
    if (nums[end] == target) {
      return end;
    }
    return -1;
  }
}
// @lc code=end

```
