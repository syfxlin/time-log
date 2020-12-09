# [795] 区间子数组个数

> https://leetcode-cn.com/problems/number-of-subarrays-with-bounded-maximum/

给定一个元素都是正整数的数组 A ，正整数 L 以及 R (L <= R)。

求连续、非空且其中最大元素满足大于等于 L 小于等于 R 的子数组个数。

例如 :

```
输入:
A = [2, 1, 4, 3]
L = 2
R = 3
输出: 3
解释: 满足条件的子数组: [2], [2, 1], [3].
```

注意:

- L, R 和 A[i] 都是整数，范围在 [0, 10^9]。
- 数组 A 的长度范围在[1, 50000]。

## 思考

若要满足 L<= Max <= R，那么只要将满足 max <= R 的数组减去 L < max 的数组即可，子数组的计算方式：大的数组的长度+1，如[1,1,2,3]的所有满足条件的子数组为 length+1，1,1,2,3 1,2,3 2,3 2 3

## 代码

```java
class Solution {

  public int numSubarrayBoundedMax(int[] A, int L, int R) {
    return count(A, R) - count(A, L - 1);
  }

  public int count(int[] arr, int target) {
    int count = 0;
    int re = 0;
    for (int num : arr) {
      count = num <= target ? count + 1 : 0;
      re += count;
    }
    return re;
  }
}

```
