# [78]子集

> [子集](https://leetcode-cn.com/problems/subsets/description/)

给定一组**不含重复元素**的整数数组*nums*，返回该数组所有可能的子集（幂集）。

**说明：**解集不能包含重复的子集。

**示例:**

```
输入: nums = [1,2,3]
输出:
[
  [3],
 [1],
 [2],
 [1,2,3],
 [1,3],
 [2,3],
 [1,2],
 []
]
```

## 思考

可以直接从后遍历，遇到一个数就把所有子集加上该数组成新的子集，遍历完毕即是所有子集，此方法较为巧妙，但并不是最好的方法。

## 代码

```java
import java.util.LinkedList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=78 lang=java
 *
 * [78] 子集
 */

// @lc code=start
class Solution {

  public List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> list = new LinkedList<>();
    list.add(new LinkedList<>());
    for (int i = 0; i < nums.length; i++) {
      int len = list.size();
      for (int j = 0; j < len; j++) {
        List<Integer> temp = new LinkedList<>(list.get(j));
        temp.add(nums[i]);
        list.add(temp);
      }
    }
    return list;
  }
}
// @lc code=end

```
