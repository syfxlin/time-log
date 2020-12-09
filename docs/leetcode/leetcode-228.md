# [228]汇总区间

> [汇总区间](https://leetcode-cn.com/problems/summary-ranges/description/)

给定一个无重复元素的有序整数数组，返回数组区间范围的汇总。

**示例 1:**

```
输入: [0,1,2,4,5,7]
输出: ["0->2","4->5","7"]
解释: 0,1,2 可组成一个连续的区间;4,5 可组成一个连续的区间。
```

**示例 2:**

```
输入: [0,2,3,4,6,8,9]
输出: ["0","2->4","6","8->9"]
解释: 2,3,4 可组成一个连续的区间;8,9 可组成一个连续的区间。
```

## 思考

就是进行一次遍历记录 start 和 pre 就可以了

## 代码

```java
import java.util.LinkedList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=228 lang=java
 *
 * [228] 汇总区间
 */

// @lc code=start
class Solution {

  public List<String> summaryRanges(int[] nums) {
    List<String> list = new LinkedList<>();
    if (nums.length == 0) {
      return list;
    }
    int start = nums[0];
    int pre = nums[0];
    for (int i = 1; i < nums.length; i++) {
      if (nums[i] - 1 == pre) {
        pre = nums[i];
      } else {
        if (pre == start) {
          list.add("" + pre);
        } else {
          list.add(start + "->" + pre);
        }
        pre = nums[i];
        start = nums[i];
      }
    }
    if (pre == nums[nums.length - 1]) {
      if (pre == start) {
        list.add("" + pre);
      } else {
        list.add(start + "->" + pre);
      }
    }
    return list;
  }
}
// @lc code=end

```
