# [547]省份数量

> [省份数量](https://leetcode-cn.com/problems/number-of-provinces)

## 思考

本题是很常规的图遍历题

- 利用广度优先搜索或者深度优先搜索的方式把联通的区域都遍历一遍
- 使用一个顶点数组判断该顶点是否走过，如果走过说明和其他顶点联通
- 在第一层遍历的时候统计区域数量，当第一层遍历的时候，如果该顶点没有走过，说明这是一个新的区域，那么区域数量 + 1

## 代码

```java
class Solution {

  public int findCircleNum(final int[][] isConnected) {
    int count = 0;
    final int length = isConnected.length;
    final boolean[] walked = new boolean[length];
    for (int i = 0; i < length; i++) {
      if (!walked[i]) {
        // 深度优先遍历
        walk(i, isConnected, walked);
        // 计数 + 1
        count++;
      }
    }
    return count;
  }

  private void walk(
    final int i,
    final int[][] isConnected,
    final boolean[] walked
  ) {
    for (int j = 0; j < isConnected[i].length; j++) {
      if (isConnected[i][j] == 1 && !walked[j]) {
        walked[j] = true;
        walk(j, isConnected, walked);
      }
    }
  }
}

```
