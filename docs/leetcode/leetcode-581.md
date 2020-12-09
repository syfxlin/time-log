# [581] 最短无序连续子数组

> https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/

给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

你找到的子数组应是最短的，请输出它的长度。

示例 1:

```
输入: [2, 6, 4, 8, 10, 9, 15]
输出: 5
解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
```

说明 :

- 输入的数组长度范围在 [1, 10,000]。
- 输入的数组可能包含重复元素 ，所以升序的意思是<=。

## 思考

这个算法背后的思想是无序子数组中最小元素的正确位置可以决定左边界，最大元素的正确位置可以决定右边界。

因此，首先我们需要找到原数组在哪个位置开始不是升序的。我们从头开始遍历数组，一旦遇到降序的元素，我们记录最小元素为 $$min$$ 。

类似的，我们逆序扫描数组 $$nums$$，当数组出现升序的时候，我们记录最大元素为 $$max$$。

然后，我们再次遍历 $$nums$$ 数组并通过与其他元素进行比较，来找到 $$min$$ 和 $$max$$ 在原数组中的正确位置。我们只需要从头开始找到第一个大于 $$min$$ 的元素，从尾开始找到第一个小于 $$max$$ 的元素，它们之间就是最短无序子数组。

## 代码

```java
class Solution {

  public int findUnsortedSubarray(int[] nums) {
    int min = Integer.MAX_VALUE, max = Integer.MIN_VALUE;
    boolean minFlag = false, maxFlag = false;
    for (int i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        minFlag = true;
      }
      if (nums[nums.length - i - 2] > nums[nums.length - i - 1]) {
        maxFlag = true;
      }
      if (minFlag) {
        min = Math.min(min, nums[i + 1]);
      }
      if (maxFlag) {
        max = Math.max(max, nums[nums.length - i - 2]);
      }
    }
    maxFlag = false;
    minFlag = false;
    int l = 0, r = 0;
    for (int i = 0; i < nums.length; i++) {
      if (!minFlag && nums[i] > min) {
        minFlag = true;
        l = i;
      }
      if (!maxFlag && nums[nums.length - 1 - i] < max) {
        maxFlag = true;
        r = nums.length - 1 - i;
      }
      if (minFlag && maxFlag) {
        break;
      }
    }
    return r - l == 0 ? 0 : r - l + 1;
  }
}

```
