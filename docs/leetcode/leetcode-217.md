# 存在重复元素 - LeetCode

> https://leetcode-cn.com/problems/contains-duplicate/description/

给定一个整数数组，判断是否存在重复元素。

如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

示例 1:

```
输入: [1,2,3,1]
输出: true
```

示例 2:

```
输入: [1,2,3,4]
输出: false
```

示例 3:

```
输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
```

## 思考

本题采用 Set 即可解决，就是效率不太好，也可以使用有统计的计数排序。

## AC 代码

```java
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

/*
 * @lc app=leetcode.cn id=217 lang=java
 *
 * [217] 存在重复元素
 */
class Solution {

  public boolean containsDuplicate(int[] nums) {
    HashSet<Integer> set = new HashSet<Integer>(nums.length);
    for (int i = 0; i < nums.length; i++) {
      if (!set.add(nums[i])) {
        return true;
      }
    }
    return false;
  }
}

```

```java
class Solution {

  public boolean containsDuplicate(final int[] nums) {
    Arrays.sort(nums);
    for (int i = 1; i < nums.length; i++) {
      if (nums[i - 1] == nums[i]) {
        return true;
      }
    }
    return false;
  }
}

```
