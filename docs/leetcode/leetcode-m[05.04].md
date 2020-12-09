# 面试题[05.04] 下一个数

> https://leetcode-cn.com/problems/closed-number-lcci/

下一个数。给定一个正整数，找出与其二进制表达式中 1 的个数相同且大小最接近的那两个数（一个略大，一个略小）。

示例 1:

```
输入：num = 2（或者0b10）
输出：[4, 1] 或者（[0b100, 0b1]）
```

示例 2:

```
输入：num = 1
输出：[2, -1]
```

提示:

- num 的范围在[1, 2147483647]之间；
- 如果找不到前一个或者后一个满足条件的正数，那么输出 -1。

## 思考

极其慢的代码，思路就是搜索最后一个可以移动的 1，然后移动。

## 代码

```java
class Solution {

  public int[] findClosedNumbers(int num) {
    String bit = Integer.toBinaryString(num);
    char[] arr = bit.toCharArray();
    int[] re = new int[] { -1, -1 };
    int flag = 0;
    for (int i = bit.length() - 1; i >= 0; i--) {
      if (bit.charAt(i) == '1') {
        if (i + 1 < bit.length() && arr[i + 1] == '0' && re[1] == -1) {
          if (flag == 0) {
            arr[i] = '0';
            arr[i + 1] = '1';
            re[1] = Integer.parseInt(new String(arr), 2);
            arr[i] = '1';
            arr[i + 1] = '0';
          } else {
            arr[i] = '0';
            String str = new String(arr, 0, i + 1);
            for (int j = 0; j < flag + 1; j++) {
              str += "1";
            }
            for (int j = str.length(); j < bit.length(); j++) {
              str += "0";
            }
            re[1] = Integer.parseInt(str, 2);
            arr[i] = '1';
          }
        }
        if (i - 1 >= 0 && arr[i - 1] == '0' && re[0] == -1) {
          if (flag == 0) {
            arr[i] = '0';
            arr[i - 1] = '1';
            re[0] = Integer.parseInt(new String(arr), 2);
            arr[i] = '1';
            arr[i - 1] = '0';
          } else {
            arr[i] = '0';
            arr[i - 1] = '1';
            String str = new String(arr, 0, i + 1);
            for (int j = str.length(); j < bit.length() - flag; j++) {
              str += "0";
            }
            for (int j = 0; j < flag; j++) {
              str += "1";
            }
            re[0] = Integer.parseInt(str, 2);
            arr[i] = '1';
            arr[i - 1] = '0';
          }
        } else if (i == 0 && bit.length() < 31 && re[0] == -1) {
          if (flag == 0) {
            arr[i] = '0';
            re[0] = Integer.parseInt("1" + new String(arr), 2);
            arr[i] = '1';
          } else {
            arr[i] = '0';
            String str = "1" + new String(arr, 0, i + 1);
            for (int j = str.length(); j < bit.length() - flag; j++) {
              str += "0";
            }
            for (int j = 0; j < flag; j++) {
              str += "1";
            }
            re[0] = Integer.parseInt(str, 2);
            arr[i] = '1';
          }
        }
        flag++;
      }
      if (re[0] != -1 && re[1] != -1) {
        return re;
      }
    }
    return re;
  }
}

```
