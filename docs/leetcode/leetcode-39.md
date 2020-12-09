# [39]组合总和

> [组合总和](https://leetcode-cn.com/problems/combination-sum/description/)

给定一个**无重复元素**的数组`candidates`和一个目标数`target`，找出`candidates`中所有可以使数字和为`target`的组合。

`candidates`中的数字可以无限制重复被选取。

**说明：**

- 所有数字（包括`target`）都是正整数。
- 解集不能包含重复的组合。

**示例 1:**

```
输入: candidates = [2,3,6,7], target = 7,
所求解集为:
[
  [7],
  [2,2,3]
]
```

**示例 2:**

```
输入: candidates = [2,3,5], target = 8,
所求解集为:
[
 [2,2,2,2],
 [2,3,3],
 [3,5]
]
```

## 思考

![](/storage/images/uid_1/B1W5WLAnIHPW8eQBVBTxh5R8Q4AVVBIuTB7I3HE0.png)

1、一个蓝色正方形表示的是 “尝试将这个数到数组 candidates 中找组合”，那么怎么找呢？挨个减掉那些数就可以了。

2、在减的过程中，会得到 00 和负数，也就是被我标红色和粉色的结点：

得到 00 是我们喜欢的，从 00 这一点向根结点走的路径（很可能只走过一条边，也算一个路径），就是一个组合，在这一点要做一次结算（把根结点到 00 所经过的路径，加入结果集）。

得到负数就说明这条路走不通，没有必要再走下去了。

总结一下：在减的过程中，得到 00 或者负数，就没有必要再走下去，所以这两种情况就分别表示成为叶子结点。此时递归结束，然后要发生回溯。

## 代码

```java
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=39 lang=java
 *
 * [39] 组合总和
 */

// @lc code=start
class Solution {

  public List<List<Integer>> combinationSum(int[] candidates, int target) {
    List<List<Integer>> list = new LinkedList<>();
    Arrays.sort(candidates);
    combin(list, candidates, target, new LinkedList<Integer>(), 0);
    return list;
  }

  public void combin(
    List<List<Integer>> list,
    int[] candidates,
    int target,
    List<Integer> temp,
    int index
  ) {
    if (target == 0) {
      list.add(temp);
      return;
    }
    if (index < candidates.length && target < candidates[index]) {
      return;
    }
    // 这里可以用剪枝稍稍优化下，由于后面的备选数大于前面的备选数，所以当target已经比某个备选数小的时候就没必要再看后面的大的备选数了
    for (int i = index; i < candidates.length && target >= candidates[i]; i++) {
      List<Integer> copy = new LinkedList<>(temp);
      copy.add(candidates[i]);
      combin(list, candidates, target - candidates[i], copy, i);
    }
  }
}
// @lc code=end

```
