# [135]分发糖果

> [分发糖果](https://leetcode-cn.com/problems/candy)

## 思考

按照题意相邻的孩子中，评分高的孩子必须获得更多的糖果，那么就相当于：

- 当当前位置的评分比上一个孩子评分高，那么这个孩子的糖果要比上一个孩子的糖果多
- 当当前位置的评分比下一个孩子评分高，那么这个孩子的糖果要比下一个孩子的糖果多

这样就可以通过两次遍历，分别满足这两个规则即可

## 代码

```java
class Solution {

  public int candy(final int[] ratings) {
    if (ratings == null || ratings.length == 0) {
      return 0;
    }
    final int[] count = new int[ratings.length];
    // 从左向右遍历，如果当前比前一位高分，那么当前就应该是前一位 + 1
    count[0] = 1;
    for (int i = 1; i < ratings.length; i++) {
      if (ratings[i - 1] < ratings[i]) {
        count[i] = count[i - 1] + 1;
      } else {
        count[i] = 1;
      }
    }
    // 从右向左遍历，如果当前比后一位高分 同时后一位的糖果大于等于当前(如果当前比后一位 + 1 还多，那么就没必要操作了) 则当前为后一位 + 1
    for (int i = ratings.length - 2; i >= 0; i--) {
      if (ratings[i] > ratings[i + 1] && count[i] <= count[i + 1]) {
        count[i] = count[i + 1] + 1;
      }
    }
    int sum = 0;
    for (final int i : count) {
      sum += i;
    }
    return sum;
  }
}

```
