# [200]岛屿数量

> [岛屿数量](https://leetcode-cn.com/problems/number-of-islands/description/)

给定一个由`'1'`（陆地）和`'0'`（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。

**示例 1:**

```
输入:
11110
11010
11000
00000

输出:1
```

**示例 2:**

```
输入:
11000
11000
00100
00011

输出: 3
```

## 思考

本题就是黑区域的变种，利用深搜或者广搜即可

## 代码

```java
import java.util.LinkedList;
import java.util.Queue;

/*
 * @lc app=leetcode.cn id=200 lang=java
 *
 * [200] 岛屿数量
 */

// @lc code=start
class Solution {

  public int numIslands(char[][] grid) {
    int count = 0;
    int[][] w = new int[][] { { 1, 0 }, { -1, 0 }, { 0, 1 }, { 0, -1 } };
    for (int i = 0; i < grid.length; i++) {
      for (int j = 0; j < grid[0].length; j++) {
        if (grid[i][j] == '1') {
          count++;
          grid[i][j] = '0';
          Queue<Integer> q = new LinkedList<>();
          q.add(i * grid[0].length + j);
          while (!q.isEmpty()) {
            int index = q.poll();
            int col = index % grid[0].length;
            int row = index / grid[0].length;
            for (int k = 0; k < w.length; k++) {
              if (
                row + w[k][0] < grid.length &&
                row + w[k][0] >= 0 &&
                col + w[k][1] < grid[0].length &&
                col + w[k][1] >= 0 &&
                grid[row + w[k][0]][col + w[k][1]] == '1'
              ) {
                grid[row + w[k][0]][col + w[k][1]] = '0';
                q.add((row + w[k][0]) * grid[0].length + (col + w[k][1]));
              }
            }
          }
        }
      }
    }
    return count;
  }
}
// @lc code=end

```
