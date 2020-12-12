# [376]摆动序列

> [摆动序列](https://leetcode-cn.com/problems/wiggle-subsequence)

## 思考

从题目中可以了解到，正负差值是交替出现的，相当于在图中要连续出现一个上升沿，一个下降沿。同时题目中说明了可以删除一些元素，那么题目就变成了求波峰波谷的问题了，体现到图中就像下面的图。

![图示](https://cdn.jsdelivr.net/gh/syfxlin/pic/2020/12/20201212150216.png)

所以我们可以定义记录上升下降的变量，当连续上升的时候不记录，连续下降的时候也不记录。

## 代码

```java
class Solution {

  public int wiggleMaxLength(final int[] nums) {
    if (nums.length == 0) {
      return 0;
    }
    // 计数
    int count = 1;
    // 0 代表初始状态，上升和下降的时候都会 + 1。1 代表上升，-1 代码下降
    int upOrDown = 0;
    for (int i = 1; i < nums.length; i++) {
      // 上升
      if (nums[i - 1] < nums[i]) {
        // 当上一次不是上升的时候（不是连续上升）则加一
        if (upOrDown != 1) {
          count++;
        }
        upOrDown = 1;
      }
      // 下降
      if (nums[i - 1] > nums[i]) {
        // 当上一次不是下降的时候（不是连续下降）则加一
        if (upOrDown != -1) {
          count++;
        }
        upOrDown = -1;
      }
    }
    return count;
  }
}

```
