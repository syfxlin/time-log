# [55]跳跃游戏

> [跳跃游戏](https://leetcode-cn.com/problems/jump-game/description/)

给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个位置。

**示例 1:**

```
输入: [2,3,1,1,4]
输出: true
解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
```

**示例 2:**

```
输入: [3,2,1,0,4]
输出: false
解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
```

## 思路

[https://leetcode-cn.com/problems/jump-game/solution/55-by-ikaruga/](https://leetcode-cn.com/problems/jump-game/solution/55-by-ikaruga/)

- 如果某一个作为 起跳点 的格子可以跳跃的距离是 3，那么表示后面 3 个格子都可以作为 起跳点。
- 可以对每一个能作为 起跳点 的格子都尝试跳一次，把 能跳到最远的距离 不断更新。
- 如果可以一直跳到最后，就成功了。

该思路有点类似于贪心法，通过记录最大跳跃长度即可知道能否跳过 0 的地方，当到 0 的位置时最大跳跃长度不超过 0 的位置，这证明跳跃到此为止了，返回 false，如果最大跳跃长度已经超过路长则直接返回 true

## 代码

```java
/*
 * @lc app=leetcode.cn id=55 lang=java
 *
 * [55] 跳跃游戏
 */

// @lc code=start
class Solution {

  public boolean canJump(int[] nums) {
    int max = 0;
    for (int i = 0; i < nums.length; i++) {
      if (i > max) return false;
      max = max > i + nums[i] ? max : i + nums[i];
      if (max >= nums.length) return true;
    }
    return true;
  }
}
// @lc code=end

```
