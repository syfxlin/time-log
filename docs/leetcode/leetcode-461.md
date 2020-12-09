# [461]汉明距离

> [汉明距离](https://leetcode-cn.com/problems/hamming-distance/description/)

两个整数之间的[汉明距离](https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB "https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB")指的是这两个数字对应二进制位不同的位置的数目。

给出两个整数`x`和`y`，计算它们之间的汉明距离。

**注意：**  
0 ≤`x`,`y`< 2<sup>31</sup>.

**示例:**

```
输入: x = 1, y = 4

输出: 2

解释:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

上面的箭头指出了对应二进制位不同的位置。
```

## 思考

利用异或可以标记不同位，因为两个相同的数异或结果是 0，然后利用 java 中的 bitCount 统计不同位的个数即可得出本题答案

## 代码

```java
/*
 * @lc app=leetcode.cn id=461 lang=java
 *
 * [461] 汉明距离
 */

// @lc code=start
class Solution {

  public int hammingDistance(int x, int y) {
    return Integer.bitCount(x ^ y);
  }
}
// @lc code=end

```
