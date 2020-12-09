# [1013]将数组分成和相等的三个部分

> [将数组分成和相等的三个部分](https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/description/)

给你一个整数数组`A`，只有可以将其划分为三个和相等的非空部分时才返回`true`，否则返回`false`。

形式上，如果可以找出索引`i+1 < j`且满足`(A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1])`就可以将数组三等分。

**示例 1：**

```
输出：[0,2,1,-6,6,-7,9,1,2,0,1]
输出：true
解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
```

**示例 2：**

```
输入：[0,2,1,-6,6,7,9,-1,2,0,1]
输出：false
```

**示例 3：**

```
输入：[3,3,6,5,-2,2,5,1,-9,4]
输出：true
解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
```

**提示：**

1.  `3 <= A.length <= 50000`
2.  `-10^4<= A[i] <= 10^4`

## 思考

1.  首选算 A 的累加和能否被 3 整除，不可以那分不了 3 等分。
2.  双指针前后向中间逼近，不用考虑中间那段怎么分，只要左右两段累加和等于 3 等分的数值，中间剩的那段也就找到了。

## 代码

```java
import java.util.Arrays;

/*
 * @lc app=leetcode.cn id=1013 lang=java
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
class Solution {

  public boolean canThreePartsEqualSum(int[] A) {
    int sum = Arrays.stream(A).sum();
    if (sum % 3 != 0) {
      return false;
    }
    boolean fl = true, fr = true;
    int left = 0, right = A.length - 1;
    int s1 = 0, s3 = 0;
    while (left < right) {
      if (fl) {
        s1 += A[left++];
        if (s1 == sum / 3) {
          fl = false;
        }
      }
      if (fr) {
        s3 += A[right--];
        if (s3 == sum / 3) {
          fr = false;
        }
      }
      if (!fl && !fr) {
        break;
      }
    }
    if (fl || fr || left > right) {
      return false;
    }
    int s2 = 0;
    for (int i = left; i <= right; i++) {
      s2 += A[i];
    }
    if (s2 == sum / 3) {
      return true;
    } else {
      return false;
    }
  }
}
// @lc code=end

```
