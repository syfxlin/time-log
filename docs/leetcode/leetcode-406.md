# [406]根据身高重建队列

> # [根据身高重建队列](https://leetcode-cn.com/problems/queue-reconstruction-by-height/description/)

假设有打乱顺序的一群人站成一个队列。 每个人由一个整数对`(h, k)`表示，其中`h`是这个人的身高，`k`是排在这个人前面且身高大于或等于`h`的人数。 编写一个算法来重建这个队列。

**注意：**  
总人数少于 1100 人。

**示例**

```
输入:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

输出:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
```

## 思考

先对输入数组排序，h 升序，k 降序 从头循环遍历 当前这个人就是剩下未安排的人中最矮的人，他的 k 值就代表他在剩余空位的索引值 如果有多个人高度相同，要按照 k 值从大到小领取索引值
示例：

```java
[ 0, 1, 2, 3, 4, 5 ] [ 4, 4 ] 4
[ 0, 1, 2, 3, 5 ]    [ 5, 2 ] 2
[ 0, 1, 3, 5 ]       [ 5, 0 ] 0
[ 1, 3, 5 ]          [ 6, 1 ] 3
[ 1, 5 ]             [ 7, 1 ] 5
[ 1 ]                [ 7, 0 ] 1
[ [ 5, 0 ], [ 7, 0 ], [ 5, 2 ], [ 6, 1 ], [ 4, 4 ], [ 7, 1 ] ]
```

## 代码

```java
import java.util.Arrays;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=406 lang=java
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
class Solution {

  public int[][] reconstructQueue(int[][] people) {
    Arrays.sort(
      people,
      new Comparator<int[]>() {
        @Override
        public int compare(int[] o1, int[] o2) {
          return o1[0] == o2[0] ? o1[1] - o2[1] : o2[0] - o1[0];
        }
      }
    );
    List<int[]> list = new LinkedList<>();
    for (int[] i : people) {
      list.add(i[1], i);
    }
    return list.toArray(new int[list.size()][]);
  }
}
// @lc code=end

```
