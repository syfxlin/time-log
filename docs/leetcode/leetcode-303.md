# 区域和检索 - 数组不可变

> https://leetcode-cn.com/problems/range-sum-query-immutable/comments/

给定一个整数数组 nums，求出数组从索引 i 到 j (i ≤ j) 范围内元素的总和，包含 i, j 两点。

示例：

```
给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
```

说明:

- 你可以假设数组不可变。
- 会多次调用 sumRange 方法。

## 思考

由于有多次调用并且数组不可变，那就可以将计算结果事先记录完成，然后当需要 i-j 位时，只需要将 0-j 位的和减去 0-(i-1)位的和

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=303 lang=java
 *
 * [303] 区域和检索 - 数组不可变
 */
class NumArray {

  int[] arr;

  public NumArray(int[] nums) {
    arr = new int[nums.length + 1];
    arr[0] = 0;
    for (int i = 1; i < nums.length + 1; i++) {
      arr[i] = nums[i - 1] + arr[i - 1];
    }
  }

  public int sumRange(int i, int j) {
    return arr[j + 1] - arr[i];
  }
}
/**
 * Your NumArray object will be instantiated and called as such: NumArray obj =
 * new NumArray(nums); int param_1 = obj.sumRange(i,j);
 */

```
