# [40] 组合总和 II

> https://leetcode-cn.com/problems/combination-sum-ii/

给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次。

说明：

- 所有数字（包括目标数）都是正整数。
- 解集不能包含重复的组合。

示例 1:

```
输入: candidates = [10,1,2,7,6,1,5], target = 8,
所求解集为:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
```

示例 2:

```
输入: candidates = [2,5,2,1,2], target = 5,
所求解集为:
[
  [1,2,2],
  [5]
]
```

## 思考

本题的主要思路和[组合总和 I]相同，主要的差别在于本题的组合不能重复取，所以需要去重，去重的方法是在一次递归完后判断本次的数是否和下一个数相等，若相等则跳过下一个数，直到不相等为止

## 代码

```java
class Solution {

  public List<List<Integer>> combinationSum2(int[] candidates, int target) {
    List<List<Integer>> list = new LinkedList<>();
    Arrays.sort(candidates);
    combin(list, candidates, target, new LinkedList<Integer>(), -1);
    return list;
  }

  public void combin(
    List<List<Integer>> list,
    int[] candidates,
    int target,
    List<Integer> temp,
    int index
  ) {
    for (
      int i = index + 1;
      i < candidates.length && target >= candidates[i];
      i++
    ) {
      List<Integer> copy = new LinkedList<>(temp);
      copy.add(candidates[i]);
      if (target == candidates[i]) {
        list.add(copy);
        return;
      } else {
        combin(list, candidates, target - candidates[i], copy, i);
        while (
          i + 1 < candidates.length && candidates[i] == candidates[i + 1]
        ) {
          i++;
        }
      }
    }
  }
}

```
