# [1341]方阵中战斗力最弱的 K 行

> [方阵中战斗力最弱的 K 行](https://leetcode-cn.com/problems/the-k-weakest-rows-in-a-matrix/description/)

给你一个大小为`m* n`的方阵`mat`，方阵由若干军人和平民组成，分别用 0 和 1 表示。

请你返回方阵中战斗力最弱的`k`行的索引，按从最弱到最强排序。

如果第**_i_**行的军人数量少于第**_j_**行，或者两行军人数量相同但**_i_**小于**_j_**，那么我们认为第**_i_**行的战斗力比第**_j_**行弱。

军人**总是**排在一行中的靠前位置，也就是说 1 总是出现在 0 之前。

**示例 1：**

```
输入：mat =
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]],
k = 3
输出：[2,0,3]
解释：
每行中的军人数目：
行 0 -> 2
行 1 -> 4
行 2 -> 1
行 3 -> 2
行 4 -> 5
从最弱到最强对这些行排序后得到 [2,0,3,1,4]
```

**示例 2：**

```
输入：mat =
[[1,0,0,0],
[1,1,1,1],
[1,0,0,0],
[1,0,0,0]],
k = 2
输出：[0,2]
解释：
每行中的军人数目：
行 0 -> 1
行 1 -> 4
行 2 -> 1
行 3 -> 1
从最弱到最强对这些行排序后得到 [0,2,3,1]
```

**提示：**

- `m == mat.length`
- `n == mat[i].length`
- `2 <= n, m <= 100`
- `1 <= k <= m`
- `matrix[i][j]`不是 0 就是 1

## 思考

由于军人 总是 排在一行中的靠前位置，所以可以纵向扫描二维数组，遇到 0 就放入要返回的数组。还有两种例外情况，一种是全 1 的情况，这个只需要返回 0-k 的数组即可；一种是部分行全 1，则在最后一行扫描完成的时候判断要返回的数组是否补全，如果不全则补足不足的部分，runtime beats 100 %，memory usage beats 100 %

## 代码

```java
import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.stream.IntStream;
import java.util.stream.Stream;

/*
 * @lc app=leetcode.cn id=1341 lang=java
 *
 * [1341] 方阵中战斗力最弱的 K 行
 */

// @lc code=start
class Solution {

  public int[] kWeakestRows(int[][] mat, int k) {
    int[] re = new int[k];
    int reIndex = 0;
    boolean[] flag = new boolean[mat.length];
    for (int i = 0; i < mat[0].length; i++) {
      for (int j = 0; j < mat.length; j++) {
        if (!flag[j] && mat[j][i] == 0) {
          re[reIndex++] = j;
          flag[j] = true;
          if (reIndex == k) {
            return re;
          }
        }
      }
      if (i == mat[0].length - 1 && reIndex != k) {
        for (int j2 = 0; j2 < flag.length; j2++) {
          if (!flag[j2]) {
            re[reIndex++] = j2;
            if (reIndex == k) {
              break;
            }
          }
        }
        return re;
      }
    }
    return IntStream.range(0, k).toArray();
  }
}
// @lc code=end

```
