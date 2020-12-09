# [64]最小路径和

> [最小路径和](https://leetcode-cn.com/problems/minimum-path-sum/description/)

给定一个包含非负整数的*m*x*n*网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

**说明：**每次只能向下或者向右移动一步。

**示例:**

```
输入:
[
 [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 7
解释: 因为路径 1→3→1→1→1 的总和最小。
```

## 思考

[https://leetcode-cn.com/problems/minimum-path-sum/solution/zui-xiao-lu-jing-he-by-leetcode/](https://leetcode-cn.com/problems/minimum-path-sum/solution/zui-xiao-lu-jing-he-by-leetcode/)
官方已经写很清楚了就不重新写了

## 代码

```java
/*
 * @lc app=leetcode.cn id=64 lang=java
 *
 * [64] 最小路径和
 */

// @lc code=start
class Solution {

  public int minPathSum(int[][] grid) {
    for (int i = grid.length - 1; i >= 0; i--) {
      for (int j = grid[0].length - 1; j >= 0; j--) {
        if (i + 1 < grid.length && j + 1 < grid[0].length) {
          grid[i][j] = grid[i][j] + Math.min(grid[i + 1][j], grid[i][j + 1]);
        } else if (i + 1 < grid.length) {
          grid[i][j] = grid[i][j] + grid[i + 1][j];
        } else if (j + 1 < grid[0].length) {
          grid[i][j] = grid[i][j] + grid[i][j + 1];
        }
      }
    }
    return grid[0][0];
  }
}
// @lc code=end

```
