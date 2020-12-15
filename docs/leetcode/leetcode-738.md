# [738]单调递增的数字

> [单调递增的数字](https://leetcode-cn.com/problems/monotone-increasing-digits)

## 思考

从右向左扫描数字，若发现当前数字比其左边一位（较高位）小，则进行整除后减一，相当于把其左边一位数字减 1，并将该位及其右边的所有位改成 9。

## 代码

```java
class Solution {

  public int monotoneIncreasingDigits(int N) {
    int i = 1;
    while (i <= N) {
      // 取后两位
      final int two = N / i % 100;
      // 索引向左移一位
      i *= 10;
      // 判断前一位的数是否大于后一位的数
      if (two / 10 > two % 10) {
        // 若大于，则利用整除把索引后的位都清零，然后 -1，比如 332 => 330 - 1 => 329, 329 => 300 - 1 => 299
        N = N / i * i - 1;
      }
    }
    return N;
  }
}

```
