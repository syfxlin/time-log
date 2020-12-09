# 求众数 - LeetCode

> https://leetcode-cn.com/problems/majority-element

给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在众数。

示例 1:

```
输入: [3,2,3]
输出: 3
```

示例 2:

```
输入: [2,2,1,1,1,2,2]
输出: 2
```

## 思考

此题明确说明众数是大于 n/2 的元素，所以除了使用 Map 外还有一种摩尔投票法来进行解答 https://www.jianshu.com/p/c19bb428f57a

摩尔投票法：

核心就是对拼消耗。

玩一个诸侯争霸的游戏，假设你方人口超过总人口一半以上，并且能保证每个人口出去干仗都能一对一同归于尽。最后还有人活下来的国家就是胜利。

那就大混战呗，最差所有人都联合起来对付你（对应你每次选择作为计数器的数都是众数），或者其他国家也会相互攻击（会选择其他数作为计数器的数），但是只要你们不要内斗，最后肯定你赢。

最后能剩下的必定是自己人。

## AC 代码

```java
import java.util.LinkedList;

/*
 * @lc app=leetcode.cn id=169 lang=java
 *
 * [169] 求众数
 */
class Solution {

  public int majorityElement(int[] nums) {
    int base = nums[0];
    int count = 1;
    for (int i = 1; i < nums.length; i++) {
      if (nums[i] == base) {
        count++;
      } else {
        if (count == 0) {
          base = nums[i];
        } else {
          count--;
        }
      }
    }
    return base;
  }
}

```
