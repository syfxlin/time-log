# [31] 下一个排列

> [下一个排列](https://leetcode-cn.com/problems/next-permutation/description/)

实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须**[原地](https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95 "https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95")**修改，只允许使用额外常数空间。

以下是一些例子，输入位于左侧列，其相应输出位于右侧列。  
`1,2,3`→`1,3,2`  
`3,2,1`→`1,2,3`  
`1,1,5`→`1,5,1`

## 思考

1. 判断按照字典序有木有下一个，如果完全降序就没有下一个
2. 如何判断有木有下一个呢？只要存在 a[i-1] < a[i]的升序结构，就有，而且我们应该从右往左找，一旦找到，因为这样才是真正下一个
3. 当发现 a[i-1] < a[i]的结构时，从在[i, ∞]中找到最接近 a[i-1]并且又大于 a[i-1]的数字，由于降序，从右往左遍历即可得到 k
4. 然后交换 a[i-1]与 a[k]，然后对[i, ∞]排序即可，排序只需要首尾不停交换即可，因为已经是降序 上面说的很抽象，还是需要拿一些例子思考才行，比如[0,5,4,3,2,1]，下一个是[1,0,2,3,4,5]

简单来说就是从后向前找，找到前面一个数小于后面一个数的数，然后在小数的后面寻找刚好大于小数的数，两数交换，然后排序小数后的所有数，按从小到大排。如果到最后也没找到前面一个数比后面一个数小的数，则证明无下一个序列，这时就可以直接将这个数组从小到大排序。

## 代码

```java
import java.util.Arrays;

/*
 * @lc app=leetcode.cn id=31 lang=java
 *
 * [31] 下一个排列
 */

// @lc code=start
class Solution {

  public void nextPermutation(int[] nums) {
    for (int i = nums.length - 1; i > 0; i--) {
      if (nums[i - 1] < nums[i]) {
        for (int j = nums.length - 1; i >= i; j--) {
          if (nums[j] > nums[i - 1]) {
            int temp = nums[j];
            nums[j] = nums[i - 1];
            nums[i - 1] = temp;
            break;
          }
        }
        Arrays.parallelSort(nums, i, nums.length);
        return;
      }
    }
    Arrays.sort(nums);
  }
}
// @lc code=end

```
