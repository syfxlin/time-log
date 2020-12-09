# [347]前 K 个高频元素

> [前 K 个高频元素](https://leetcode-cn.com/problems/top-k-frequent-elements/description/)

给定一个非空的整数数组，返回其中出现频率前**_k_**高的元素。

**示例 1:**

```
输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
```

**示例 2:**

```
输入: nums = [1], k = 1
输出: [1]
```

**说明：**

- 你可以假设给定的*k*总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
- 你的算法的时间复杂度**必须**优于 O(*n*log*n*) ,*n*是数组的大小。

## 思考

利用堆即可解答，不过要先扫描一遍数组，否则会出现问题

## 代码

```java
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;

/*
 * @lc app=leetcode.cn id=347 lang=java
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
class Solution {

  public List<Integer> topKFrequent(int[] nums, int k) {
    Map<Integer, Integer> map = new HashMap<>();
    PriorityQueue<Integer> pq = new PriorityQueue<Integer>(
      new Comparator<Integer>() {
        public int compare(Integer n1, Integer n2) {
          return map.get(n1).compareTo(map.get(n2));
        }
      }
    );
    for (int i = 0; i < nums.length; i++) {
      map.put(nums[i], map.getOrDefault(nums[i], 0) + 1);
    }
    for (Integer key : map.keySet()) {
      pq.add(key);
      if (pq.size() > k) {
        pq.poll();
      }
    }
    List<Integer> list = new LinkedList<>(pq);
    Collections.reverse(list);
    return list;
  }
}
// @lc code=end

```
