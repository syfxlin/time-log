# 两个数组的交集

> https://leetcode-cn.com/problems/intersection-of-two-arrays/

给定两个数组，编写一个函数来计算它们的交集。

示例 1:

```
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2]
```

示例 2:

```
输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [9,4]
```

说明:

输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。

## 思考

本题的关键在于提取两个集合中重复的元素，通过 Set 我们可以高效且方便的判断出重复的元素，并将其添加到另一个 Set 中，如果有重复则会自动归一除去麻烦

## AC 代码

```java
import java.util.Arrays;
import java.util.HashSet;
import java.util.Iterator;

/*
 * @lc app=leetcode.cn id=349 lang=java
 *
 * [349] 两个数组的交集
 */
class Solution {

  public int[] intersection(int[] nums1, int[] nums2) {
    if (
      nums1.length == 0 || nums2.length == 0 || nums1 == null || nums2 == null
    ) return new int[0];
    HashSet<Integer> set = new HashSet<Integer>();
    HashSet<Integer> list = new HashSet<Integer>();
    for (int i = 0; i < nums1.length; i++) {
      set.add(nums1[i]);
    }
    for (int i = 0; i < nums2.length; i++) {
      if (set.contains(nums2[i])) {
        list.add(nums2[i]);
      }
    }
    int[] r = new int[list.size()];
    Iterator<Integer> it = list.iterator();
    for (int i = 0; i < r.length; i++) {
      if (!it.hasNext()) return Arrays.copyOf(r, i);
      r[i] = it.next();
    }
    return r;
  }
}

```
