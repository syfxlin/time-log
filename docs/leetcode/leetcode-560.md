# [560]和为 K 的子数组

> [和为 K 的子数组](https://leetcode-cn.com/problems/subarray-sum-equals-k/description/)

给定一个整数数组和一个整数**k，**你需要找到该数组中和为**k**的连续的子数组的个数。

**示例 1 :**

```
输入:nums = [1,1,1], k = 2
输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
```

**说明 :**

1.  数组的长度为 [1, 20,000]。
2.  数组中元素的范围是 [-1000, 1000] ，且整数**k** 的范围是[-1e7, 1e7]。

## 思考

这种方法背后的想法如下：如果累积总和（由 $$sum[i]$$ 表示加到 $$i^{th}$$ 的和）最多两个指数是相同的，那么这些元素之间的元素总和为零。进一步扩展相同的想法，如果累计总和，在索引 $$i$$ 和 $$j$$ 处相差 $$k$$，即 $$sum[i]−sum[j]=k$$，则位于索引 $$i$$ 和 $$j$$ 之间的元素之和是 $$k$$。

基于这些想法，可以使用了一个哈希表 $$map$$，它用于存储所有可能的索引的累积总和以及相同累加和发生的次数。我们以以下形式存储数据：($$sum_i$$​，$$sum_i$$​ 的出现次数)。我们遍历数组$$nums$$并继续寻找累积总和。每当我们遇到一个新的和时，我们在$$hashmap$$中创建一个与该总和相对应的新条目。如果再次出现相同的和，我们增加与$$map$$中的和相对应的计数。此外，对于遇到的每个总和，我们还确定已经发生 $$sum−k$$ 总和的次数，因为它将确定具有总和 $$k$$ 的子阵列发生到当前索引的次数。我们将 $$count$$ 增加相同的量。

在完成便利数组后，$$count$$ 记录了所需结果

## 代码

```java
import java.util.HashMap;
import java.util.Map;

/*
 * @lc app=leetcode.cn id=560 lang=java
 *
 * [560] 和为K的子数组
 */

// @lc code=start
class Solution {

  public int subarraySum(int[] nums, int k) {
    Map<Integer, Integer> map = new HashMap<>();
    int sum = 0;
    int count = 0;
    map.put(0, 1);
    for (int item : nums) {
      sum += item;
      if (map.containsKey(sum - k)) {
        count += map.get(sum - k);
      }
      map.put(sum, map.getOrDefault(sum, 0) + 1);
    }
    return count;
  }
}
// @lc code=end

```
