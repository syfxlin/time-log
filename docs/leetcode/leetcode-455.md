# [455]分发饼干

> [分发饼干](https://leetcode-cn.com/problems/assign-cookies)

## 思考

排序胃口值和饼干尺寸，然后同时遍历这两个数组，当有饼干满足胃口值，则将孩子的指针加一，同时消耗一个饼干，否则丢弃这个饼干

## 代码

```java
class Solution {

  public int findContentChildren(final int[] g, final int[] s) {
    Arrays.sort(g);
    Arrays.sort(s);
    int child = 0;
    int cookie = 0;
    while (child < g.length && cookie < s.length) {
      // 满足胃口
      if (g[child] <= s[cookie]) {
        // 下一个孩子
        child++;
      }
      // 满足胃口消耗一个，或者不满足丢弃一个
      cookie++;
    }
    return child;
  }
}

```
