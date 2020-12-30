# [1046]最后一块石头的重量

> [最后一块石头的重量](https://leetcode-cn.com/problems/last-stone-weight)

## 思考

利用优先队列（最大堆）即可很简单的解决本题

## 代码

```java
class Solution {

  public int lastStoneWeight(final int[] stones) {
    if (stones.length == 1) {
      return stones[0];
    }
    final PriorityQueue<Integer> queue = new PriorityQueue<>(
      stones.length,
      (n1, n2) -> Integer.compare(n2, n1)
    );
    for (final int stone : stones) {
      queue.add(stone);
    }
    while (queue.size() > 1) {
      final Integer n1 = queue.poll();
      final Integer n2 = queue.poll();
      if (n1 > n2) {
        queue.add(n1 - n2);
      } else if (n1 < n2) {
        queue.add(n2 - n1);
      }
    }
    final Integer last = queue.poll();
    return last == null ? 0 : last;
  }
}

```
