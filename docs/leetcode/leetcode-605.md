# [605]种花问题

> [种花问题](https://leetcode-cn.com/problems/can-place-flowers)

## 思考

本题非常简单，只需要遍历数组，判断当前的位置、上一个位置、下一个位置是否为 0，即连续 3 个为 0，若都为 0 则说明当前位置可以种植，此时 n - 1，若不为 0 则移动位置 + 1，直到 n 小于等于 0，或者到达数组末尾。

## 代码

```java
class Solution {

  public boolean canPlaceFlowers(final int[] flowerbed, int n) {
    for (int i = 0; i < flowerbed.length; i++) {
      if (i - 1 >= 0 && flowerbed[i - 1] == 1) {
        continue;
      }
      if (flowerbed[i] == 1) {
        continue;
      }
      if (i + 1 < flowerbed.length && flowerbed[i + 1] == 1) {
        continue;
      }
      flowerbed[i] = 1;
      n--;
      if (n <= 0) {
        return true;
      }
    }
    return n <= 0;
  }
}

```
