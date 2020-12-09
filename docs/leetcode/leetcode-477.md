# [477]汉明距离总和

> [汉明距离总和](https://leetcode-cn.com/problems/total-hamming-distance/description/)

两个整数的[汉明距离](https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB/475174?fr=aladdin "https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB/475174?fr=aladdin")指的是这两个数字的二进制数对应位不同的数量。

计算一个数组中，任意两个数之间汉明距离的总和。

**示例:**

```
输入: 4, 14, 2

输出: 6

解释: 在二进制表示中，4表示为0100，14表示为1110，2表示为0010。（这样表示是为了体现后四位之间关系）
所以答案为：
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
```

**注意:**

1.  数组中元素的范围为从`0`到`10^9`。
2.  数组的长度不超过`10^4`。

## 思考

化横向比较为纵向比较可以节省非常多的时间

那么我们可以发现，要计算数组中任意两个数的汉明距离的总和，可以先算出数组中任意两个数二进制第 i 位的汉明距离的总和，在将所有的 k 位之和相加。也就是说，二进制中的每一位都是可以独立计算的。

因此，我们考虑数组中每个数二进制的第 i 位，假设一共有 t 个 0 和 n - t 个 1，那么显然在第 i 位的汉明距离的总和为 t \* (n - t)。

由于所有的数都在 [0, 10^9] 的范围内，因此 k 最大为 31。我们只要计算出每一位上的汉明距离的总和，再相加即可。

## 代码

横向

```java
/*
 * @lc app=leetcode.cn id=477 lang=java
 *
 * [477] 汉明距离总和
 */

// @lc code=start
class Solution {

  public int totalHammingDistance(int[] nums) {
    int sum = 0;
    for (int i = 0; i < nums.length - 1; i++) {
      for (int j = i + 1; j < nums.length; j++) {
        sum += Integer.bitCount(nums[i] ^ nums[j]);
      }
    }
    return sum;
  }
}
// @lc code=end

```

纵向

```java
/*
 * @lc app=leetcode.cn id=477 lang=java
 *
 * [477] 汉明距离总和
 */

// @lc code=start
class Solution {

  public int totalHammingDistance(int[] nums) {
    int sum = 0;
    int[] bits = new int[32];
    for (int num : nums) {
      int i = 0;
      while (num > 0) {
        bits[i++] += num & 1;
        num >>= 1;
      }
    }
    for (int bit : bits) {
      sum += bit * (nums.length - bit);
    }
    return sum;
  }
}
// @lc code=end

```
