# 滑动窗口的最大值

> https://leetcode-cn.com/problems/sliding-window-maximum/description/

给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值。

示例:

```
输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7]
```

解释:

```
  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

提示：

```
你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。
```

进阶：

```
你能在线性时间复杂度内解决此题吗？
```

## 思考

本题可以用优先队列求解，但性能不够优秀，比较好的方法是使用双端队列的方式，具体解答见极客时间的算法 40 讲

## 代码

```java
import java.util.LinkedList;

/*
 * @lc app=leetcode.cn id=239 lang=java
 *
 * [239] 滑动窗口最大值
 */
class Solution {

  public int[] maxSlidingWindow(int[] nums, int k) {
    if (nums.length == 0) return nums;
    int[] re = new int[nums.length - k + 1];
    LinkedList<Integer> d = new LinkedList<Integer>();
    for (int i = 0; i < nums.length; i++) {
      if (!d.isEmpty() && d.get(0) <= i - k) {
        d.remove(0);
      }
      while (!d.isEmpty() && nums[d.peekLast()] <= nums[i]) {
        d.pollLast();
      }
      d.add(i);
      if (i - k + 1 >= 0) {
        re[i - k + 1] = nums[d.get(0)];
      }
    }
    return re;
  }
}

```
