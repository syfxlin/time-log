# [435]无重叠区间

> [无重叠区间](https://leetcode-cn.com/problems/non-overlapping-intervals)

## 思路

采用贪心算法，按右边界排序，右边界越小，留给下一个区间的空间就越大，就能容纳下越多的无重叠区间。排序后通过一个指针记录当前区间右边界，通过遍历判断，如果某个区间的左边界大于当前的有边界，那么该区间就与之前的区间没有重叠，此时更新当前右边界，进行下一次循环，直到最后一个区间判断完毕。

## 代码

```java
class Solution {

  public int eraseOverlapIntervals(final int[][] intervals) {
    if (intervals.length == 0) {
      return 0;
    }
    // 按右边界排序
    Arrays.sort(intervals, Comparator.comparingInt(i -> i[1]));
    // 记录无重叠区间个数
    int count = 1;
    // 右边界记录指针
    int high = intervals[0][1];
    for (int i = 1; i < intervals.length; i++) {
      // 如果这个区间左边界比右边界记录指针大，那么就与之前的未重叠，并且由于已经排序了，所以这个区间的右边界是最优的
      if (high <= intervals[i][0]) {
        // 此时更新右边界指针，同时无重叠计数加一
        high = intervals[i][1];
        count++;
      }
    }
    // 最后返回重叠的区间，即要排除的区间
    return intervals.length - count;
  }
}

```
