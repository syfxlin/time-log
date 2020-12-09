# [56]合并区间

> [合并区间](https://leetcode-cn.com/problems/merge-intervals/description/)

给出一个区间的集合，请合并所有重叠的区间。

**示例 1:**

```
输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
```

**示例 2:**

```
输入: [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
```

## 思考

可以重叠的空间

- a = [1,4]、b = [2,3] => [1,4]
- a = [1,3]、b = [2,6] => [1,6]
- a = [1,2]、b = [2,5] => [1,5]
  不可重叠
- a = [1,4]、b = [5,7]
  归纳
- 当 a[1] >= b[0]时，两个区间一定有重叠
  重叠后的区间
- 左边 == a[0]
- 右边 == Max(a[1],b[1])
  解题技巧
- 通过子数组首元素排序，确保左边相对确定下来
- 下一个子数组的第一个元素小于等于当前子数组的第二个元素时，会有重叠
- 需要循环穷举

## 代码

```java
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=56 lang=java
 *
 * [56] 合并区间
 */

// @lc code=start
class Solution {

  public int[][] merge(int[][] intervals) {
    Arrays.sort(
      intervals,
      new Comparator<int[]>() {
        @Override
        public int compare(int[] a, int[] b) {
          if (a[0] != b[0]) {
            return Integer.compare(a[0], b[0]);
          } else {
            return Integer.compare(a[1], b[1]);
          }
        }
      }
    );
    int i = 0;
    List<int[]> list = new LinkedList<>();
    while (i < intervals.length) {
      int left = intervals[i][0];
      int right = intervals[i][1];
      while (i + 1 < intervals.length && right >= intervals[i + 1][0]) {
        right = Math.max(right, intervals[i + 1][1]);
        i++;
      }
      list.add(new int[] { left, right });
      i++;
    }
    int[][] re = new int[list.size()][2];
    for (int j = 0; j < list.size(); j++) {
      re[j] = list.get(j);
    }
    return re;
  }
}
// @lc code=end

```
