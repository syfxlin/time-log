# [338]比特位计数

> [比特位计数](https://leetcode-cn.com/problems/counting-bits/description/)

给定一个非负整数**num**。对于**0 ≤ i ≤ num**范围中的每个数字**i**，计算其二进制数中的 1 的数目并将它们作为数组返回。

**示例 1:**

```
输入: 2
输出: [0,1,1]
```

**示例 2:**

```
输入: 5
输出: [0,1,1,2,1,2]
```

**进阶:**

- 给出时间复杂度为**O(n\*sizeof(integer))**的解答非常容易。但你可以在线性时间**O(n)**内用一趟扫描做到吗？
- 要求算法的空间复杂度为**O(n)**。
- 你能进一步完善解法吗？要求在 C++或任何其他语言中不使用任何内置函数（如 C++ 中的**\_\_builtin_popcount**）来执行此操作。

## 思考

利用 Java 的内置函数 bitCount 和 Stream 即可用一行解决本题，但是性能极差

遵循上一方法的相同原则，我们还可以通过最低有效位来获得状态转移函数。

观察$$x$$和$$x′=x/2x$$的关系：

$$x=(1001011101)_2=(605)_10$$

$$x′=(100101110)_2=(302)_10$$

可以发现 $$x′$$ 与 $$x$$ 只有一位不同，这是因为$$x′$$ 可以看做 $$x$$ 移除最低有效位的结果。

这样，我们就有了下面的状态转移函数：

$$P(x)=P(x/2)+(x mod 2)$$

## 代码

```java
import java.util.stream.IntStream;

/*
 * @lc app=leetcode.cn id=338 lang=java
 *
 * [338] 比特位计数
 */

// @lc code=start
class Solution {

  public int[] countBits(int num) {
    // return IntStream.rangeClosed(0, num).map(Integer::bitCount).toArray();
    int[] ans = new int[num + 1];
    for (int i = 1; i <= num; i++) {
      ans[i] = ans[i >> 1] + (i & 1);
    }
    return ans;
  }
}
// @lc code=end

```
