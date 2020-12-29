# [1629]按键持续时间最长的键

> [按键持续时间最长的键](https://leetcode-cn.com/problems/slowest-key)

## 思路

简单的遍历 + 判断时长大小和字符字典序大小即可解决

## 代码

```java
class Solution {

  public char slowestKey(final int[] releaseTimes, final String keysPressed) {
    final int n = releaseTimes.length;
    char key = keysPressed.charAt(0);
    int max = releaseTimes[0];
    for (int i = 1; i < n; i++) {
      final int t = releaseTimes[i] - releaseTimes[i - 1];
      final char c = keysPressed.charAt(i);
      if (t == max && c > key) {
        key = c;
      } else if (t > max) {
        key = c;
        max = t;
      }
    }
    return key;
  }
}

```
