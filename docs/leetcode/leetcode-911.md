# [911]在线选举

> [在线选举](https://leetcode-cn.com/problems/online-election)

## 思路

题目写的挺乱的，读了好久才读懂 2333。这里就简单说下吧，首先是 times[i] 的时刻，有人投票给了 persons[i] 号人，然后在陆续的调用 q 方法查找随机时刻的获胜者（收到投票多的人）。

通过题目可以看出，只有在 times[i] 时刻，票才会改变，获胜者才会改变，那么我们只要记录这几个时刻的获胜者，然后通过判断要查找的时刻在那个时间区间就可以得知那个时刻获胜者。比如在 0 分钟的时候投票给了 0 号，5 分钟的时候投票给了 1 号，那么当查找 3 分钟时的获胜者就是 0 号，因为此时 0 号得票多。

有了大致的思路了就可以按照这个思路对代码进行优化，比如 times，persons 是构造器传入的，那么在整个查询的阶段都不会改变，那么我们就可以先行把 times 各个时刻的胜者计算好。然后由于 times 是严格递增的数组，此时我们就可以想到二分查找，利用二分查找找上界。

## 代码

```java
class TopVotedCandidate {

  private final int[] times;
  private final int[] wins;

  public TopVotedCandidate(final int[] persons, final int[] times) {
    this.times = times;
    this.wins = new int[persons.length];
    final int[] count = new int[persons.length];
    int win = 0;
    for (int i = 0; i < persons.length; i++) {
      count[persons[i]]++;
      // 如果当前的投票的人比赢家还高，那么就更换赢家为当前的人
      if (count[persons[i]] >= count[win]) {
        win = persons[i];
      }
      this.wins[i] = win;
    }
  }

  public int q(final int t) {
    int low = 0;
    int high = times.length - 1;
    while (low <= high) {
      final int mid = (low + high) >> 1;
      if (times[mid] <= t) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return wins[high];
  }
}

```
