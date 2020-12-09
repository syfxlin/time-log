# [1010]总持续时间可被 60 整除的歌曲

> [总持续时间可被 60 整除的歌曲](https://leetcode-cn.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/description/)

在歌曲列表中，第`i`首歌曲的持续时间为`time[i]`秒。

返回其总持续时间（以秒为单位）可被`60`整除的歌曲对的数量。形式上，我们希望索引的数字`i < j`且有`(time[i] + time[j]) % 60 == 0`。

**示例 1：**

```
输入：[30,20,150,100,40]
输出：3
解释：这三对的总持续时间可被 60 整数：
(time[0] = 30, time[2] = 150): 总持续时间 180
(time[1] = 20, time[3] = 100): 总持续时间 120
(time[1] = 20, time[4] = 40): 总持续时间 60
```

**示例 2：**

```
输入：[60,60,60]
输出：3
解释：所有三对的总持续时间都是 120，可以被 60 整数。
```

**提示：**

1.  `1 <= time.length <= 60000`
2.  `1 <= time[i] <= 500`

## 思考

如果一个数对 60 的余数为 20，则与它配对的数对 60 的余数必然为 40。故只需查看余数为 40 的数的个数，即为配对数目，同时记录余数为 20 的数的数目。最后统计配对数目总和即可

## 代码

```java
/*
 * @lc app=leetcode.cn id=1010 lang=java
 *
 * [1010] 总持续时间可被 60 整除的歌曲
 */

// @lc code=start
class Solution {

  public int numPairsDivisibleBy60(int[] time) {
    int[] map = new int[60];
    for (int t : time) {
      map[t % 60]++;
    }
    int count = map[0] * (map[0] - 1) / 2 + map[30] * (map[30] - 1) / 2;
    for (int i = 1; i < 30; i++) {
      count += map[i] * map[60 - i];
    }
    return count;
  }
}
// @lc code=end

```
