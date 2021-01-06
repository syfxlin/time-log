# [399]除法求值

> [除法求值](https://leetcode-cn.com/problems/evaluate-division/)

## 思路

本题使用 DFS + 并查集 的方法求解。

- a / b = 2.0 我们可以看成 a = 2b，a 和 b 在一个集合内，同一个集合可以互相求解。如果某个变量不在集合内则无法求解。用于简化查找过程。
- a / b = 2.0 按照数学计算， b / a = 1.0 / 2.0 = 0.5
- a / a = 1.0 如果两个变量是同一个，那么直接返回 1.0
- 我们可以把题目转换成有向带权图问题，如 a = 2b，那么 a -> b 的权重就为 2
- 变成图的问题那么求解就相当于查找，a / c 则相当于查找 a -> c 的路径，然后值为路径中所有权重相乘，如 a / b = 2.0、b / c = 3.0，那么 a / c = a -> b -> c = 2.0 \* 3.0 = 6.0

## 代码

```java
class Solution {

  public double[] calcEquation(
    List<List<String>> equations,
    double[] values,
    List<List<String>> queries
  ) {
    // 并查集
    Map<String, String> union = new HashMap<>();
    // 邻接表
    Map<String, List<String>> map = new HashMap<>();
    // 权重表
    Map<String, List<Double>> weight = new HashMap<>();
    for (int i = 0; i < equations.size(); i++) {
      String s1 = equations.get(i).get(0);
      String s2 = equations.get(i).get(1);
      // 邻接表指定项不存在就初始化
      if (!map.containsKey(s1)) {
        map.put(s1, new ArrayList<>());
        weight.put(s1, new ArrayList<>());
      }
      if (!map.containsKey(s2)) {
        map.put(s2, new ArrayList<>());
        weight.put(s2, new ArrayList<>());
      }
      // 添加路径和权重
      map.get(s1).add(s2);
      map.get(s2).add(s1);
      weight.get(s1).add(values[i]);
      weight.get(s2).add(1.0 / values[i]);
      // 建立并查集
      while (union.containsKey(s1)) {
        s1 = union.get(s1);
      }
      while (union.containsKey(s2)) {
        s2 = union.get(s2);
      }
      if (!s1.equals(s2)) {
        // 合并祖先
        String ancestor = s1.compareTo(s2) < 0 ? s1 : s2;
        String descendant = s1.compareTo(s2) < 0 ? s2 : s1;
        union.put(descendant, ancestor);
      }
    }
    double[] res = new double[queries.size()];
    for (int i = 0; i < queries.size(); i++) {
      res[i] =
        dfs(
          queries.get(i).get(0),
          queries.get(i).get(1),
          union,
          map,
          weight,
          new HashSet<>()
        );
    }
    return res;
  }

  public Double dfs(
    String s1,
    String s2,
    Map<String, String> union,
    Map<String, List<String>> map,
    Map<String, List<Double>> weight,
    Set<String> walked
  ) {
    walked.add(s1);
    // 不存在图中，无法计算
    if (!map.containsKey(s1) || !map.containsKey(s2)) {
      return -1.0;
    }
    // 起点终点相同则 a/a = 1.0
    if (s1.equals(s2)) {
      return 1.0;
    }
    String s1Ancestor = s1;
    String s2Ancestor = s2;
    while (union.containsKey(s1Ancestor)) {
      s1Ancestor = union.get(s1Ancestor);
    }
    while (union.containsKey(s2Ancestor)) {
      s2Ancestor = union.get(s2Ancestor);
    }
    // 祖先不同则不可能互通
    if (!s1Ancestor.equals(s2Ancestor)) {
      return -1.0;
    }
    for (int i = 0; i < map.get(s1).size(); i++) {
      //如果已经访问过，则跳过
      if (walked.contains(map.get(s1).get(i))) {
        continue;
      }
      double res = dfs(map.get(s1).get(i), s2, union, map, weight, walked);
      double w = weight.get(s1).get(i);
      if (res != -1.0) {
        return res * w;
      }
    }
    return -1.0;
  }
}

```
