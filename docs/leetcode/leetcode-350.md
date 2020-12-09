# 两个数组的交集 II

> https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/

给定两个数组，编写一个函数来计算它们的交集。

示例 1:

```
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
```

示例 2:

```
输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]
```

说明：

- 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
- 我们可以不考虑输出结果的顺序。

进阶:

- 如果给定的数组已经排好序呢？你将如何优化你的算法？
- 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
- 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

## 思考

本题可以使用数组的方式进行操作，也可以用集合或者映射表的方式进行操作，我用映射表的方式，相对容易理解，但是效率不是很高

## 代码

```java
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedList;

/*
 * @lc app=leetcode.cn id=350 lang=java
 *
 * [350] 两个数组的交集 II
 */
class Solution {

  public int[] intersect(int[] nums1, int[] nums2) {
    if (
      nums1.length == 0 || nums2.length == 0 || nums1 == null || nums2 == null
    ) return new int[0];
    HashMap<Integer, Integer> set = new HashMap<Integer, Integer>();
    LinkedList<Integer> list = new LinkedList<Integer>();
    for (int i = 0; i < nums1.length; i++) {
      if (set.containsKey(nums1[i])) {
        set.put(nums1[i], set.get(nums1[i]) + 1);
      } else {
        set.put(nums1[i], 1);
      }
    }
    for (int i = 0; i < nums2.length; i++) {
      if (set.containsKey(nums2[i])) {
        list.add(nums2[i]);
        int n = set.get(nums2[i]) - 1;
        if (n <= 0) {
          set.remove(nums2[i]);
        } else {
          set.put(nums2[i], n);
        }
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
