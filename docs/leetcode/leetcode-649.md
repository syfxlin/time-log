# [649]Dota2 参议院

> [Dota2 参议院](https://leetcode-cn.com/problems/dota2-senate)

## 思考

方法一：利用双队列，存储 R、D 双方的人员索引。之后循环比较相邻两个 R 和 D 阵营的参议员的索引，保留索引小的一方，将其重新入队，同时入队的索引增加 n，即排除掉索引大的一方（被 Ban），直到一方阵营的队列为空。

方法二：https://leetcode-cn.com/problems/dota2-senate/solution/java-649dota2can-yi-yuan-chao-9961-by-mu-0dqh/

## 代码

```java
class Solution {

  public String predictPartyVictory1(final String senate) {
    final Queue<Integer> radiant = new LinkedList<>();
    final Queue<Integer> dire = new LinkedList<>();
    final int len = senate.length();
    // 扫描入队
    for (int i = 0; i < len; i++) {
      if (senate.charAt(i) == 'R') {
        radiant.offer(i);
      } else {
        dire.offer(i);
      }
    }
    while (!radiant.isEmpty() && !dire.isEmpty()) {
      // 出队
      final int ri = radiant.poll();
      final int di = dire.poll();
      // 判断索引，索引小的可以执行操作，如 R < D，则可以 Ban 掉 D，此时 D 就不需要入队
      if (ri < di) {
        // 重新入队，同时索引增加，防止顺序被打乱，未入队则代表被 Ban 了
        radiant.offer(ri + len);
      } else {
        dire.offer(di + len);
      }
    }
    return radiant.isEmpty() ? "Dire" : "Radiant";
  }

  public String predictPartyVictory2(final String senate) {
    int radiantSize = 0;
    int direSize = 0;
    int tempBanRadiant = 0;
    int tempBanDire = 0;
    int sumBanRadiant = 0;
    int sumBanDire = 0;
    boolean calculating = true;
    final char[] arr = senate.toCharArray();
    while (true) {
      for (int i = 0; i < arr.length; i++) {
        final char ch = arr[i];
        if (ch == 'R') {
          // 计算人数
          if (calculating) {
            radiantSize++;
          }
          // 当 tempBanRadiant 为 0 是说明没有待 Ban 的 R，此时的 R 可以执行权限
          if (tempBanRadiant == 0) {
            // Ban 掉 D
            tempBanDire++;
            sumBanDire++;
          } else {
            // 如果 tempBanRadiant 不为 0 说明还有待 Ban 的 R，此时这个 R 就中招了，不能执行权限
            tempBanRadiant--;
            // 因为被 Ban 了，所以后续无法再执行权限，只需改成别的字符即可
            arr[i] = 'r';
          }
        } else if (ch == 'D') {
          // 计算人数
          if (calculating) {
            direSize++;
          }
          if (tempBanDire == 0) {
            tempBanRadiant++;
            sumBanRadiant++;
          } else {
            tempBanDire--;
            arr[i] = 'd';
          }
        }
      }
      // 一轮循环完毕后，R 和 D 的总人数都计算完毕了
      calculating = false;
      // 如果 R 总的被 Ban 的人数大于 R 的总人数，说明 R 全部阵亡了，此时 D 可以宣布胜利
      if (sumBanRadiant >= radiantSize) {
        return "Dire";
      }
      // 反之则 R 宣布胜利
      if (sumBanDire >= direSize) {
        return "Radiant";
      }
    }
  }
}

```
