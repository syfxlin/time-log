# [46]全排列

> [全排列](https://leetcode-cn.com/problems/permutations/description/)

给定一个**没有重复**数字的序列，返回其所有可能的全排列。

**示例:**

```
输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```

## 思考

如下图：要对 1、2、3、4 进行排序，第一个位置上的元素有四种可能：1 或 2 或 3 或 4，假如已经确定了第一个元素为 4，剩下的第二个位置上可以是 1、2、3，很显然这具有递归结构，如果原始要排列的数组顺序为 1、2、3、4，现在只要分别交换 1、2，1、3，1、4 然后对剩下的 3 个元素进行递归的排列。

![](/storage/images/uid_1/m4X75Ae4G8nNcqVxobx5WmL0uDw7EgdWyw0n5sP8.png)

## 代码

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=46 lang=java
 *
 * [46] 全排列
 */

// @lc code=start
class Solution {

  public List<List<Integer>> permute(int[] nums) {
    List<List<Integer>> list = new LinkedList<>();
    permutation(list, nums, 0);
    return list;
  }

  public void permutation(List<List<Integer>> list, int chs[], int start) {
    if (start == chs.length - 1) {
      List<Integer> item = new ArrayList<>(chs.length);
      for (int i = 0; i < chs.length; i++) {
        item.add(chs[i]);
      }
      list.add(item);
      return;
    }
    for (int i = start; i <= chs.length - 1; i++) {
      swap(chs, i, start);
      permutation(list, chs, start + 1);
      swap(chs, i, start);
    }
  }

  public void swap(int chs[], int i, int j) {
    int temp;
    temp = chs[i];
    chs[i] = chs[j];
    chs[j] = temp;
  }
}
// @lc code=end

```
