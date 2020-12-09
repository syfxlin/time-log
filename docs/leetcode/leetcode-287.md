# [287]寻找重复数

> [寻找重复数](https://leetcode-cn.com/problems/find-the-duplicate-number/description/)

给定一个包含*n*\+ 1 个整数的数组*nums*，其数字都在 1 到*n*之间（包括 1 和*n*），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。

**示例 1:**

```
输入: [1,3,4,2,2]
输出: 2
```

**示例 2:**

```
输入: [3,1,3,4,2]
输出: 3
```

**说明：**

1.  **不能**更改原数组（假设数组是只读的）。
2.  只能使用额外的*O*(1) 的空间。
3.  时间复杂度小于*O*(_n_<sup>2</sup>) 。
4.  数组中只有一个重复的数字，但它可能不止重复出现一次。

## 思考

如果要符合题目的所有要求就需要使用二分法或者快慢指针，但是这些方法比较巧妙，一般情况下使用哈希表即可。

## 代码

```java
import java.util.HashSet;
import java.util.Set;

/*
 * @lc app=leetcode.cn id=287 lang=java
 *
 * [287] 寻找重复数
 */

// @lc code=start
class Solution {

  public int findDuplicate(int[] nums) {
    Set<Integer> set = new HashSet<>();
    for (int i = 0; i < nums.length; i++) {
      if (!set.add(nums[i])) {
        return nums[i];
      }
    }
    return 0;
  }
}
// @lc code=end

```
