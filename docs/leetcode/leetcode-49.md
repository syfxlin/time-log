# [49]字母异位词分组

> [字母异位词分组](https://leetcode-cn.com/problems/group-anagrams/description/)

给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

**示例:**

```
输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

**说明：**

- 所有输入均为小写字母。
- 不考虑答案输出的顺序。

# 思考

利用 HashMap 键为排序后相等的异位词 值为 List 里面装的是所有排序后相等的异或词集合

还有一种方法是用质数表示 26 个字母，把字符串的各个字母相乘，这样可保证字母异位词的乘积必定是相等的。其余步骤就是用 map 存储，和别人的一致了。（这个用质数表示真的很骚啊！！!）

## 代码

```java
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

/*
 * @lc app=leetcode.cn id=49 lang=java
 *
 * [49] 字母异位词分组
 */

// @lc code=start
class Solution {

  public List<List<String>> groupAnagrams(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    for (int i = 0; i < strs.length; i++) {
      char[] arr = strs[i].toCharArray();
      Arrays.sort(arr);
      String str = new String(arr);
      if (map.containsKey(str)) {
        map.get(str).add(strs[i]);
      } else {
        List<String> list = new LinkedList<>();
        list.add(strs[i]);
        map.put(str, list);
      }
    }
    List<List<String>> list = new LinkedList<>(map.values());
    return list;
  }
}
// @lc code=end

```

```java
class Solution {

  public List<List<String>> groupAnagrams(String[] strs) {
    int[] prime = {
      2,
      3,
      5,
      7,
      11,
      13,
      17,
      19,
      23,
      29,
      31,
      41,
      43,
      47,
      53,
      59,
      61,
      67,
      71,
      73,
      79,
      83,
      89,
      97,
      101,
      103,
    };
    Map<Integer, List<String>> map = new HashMap<>();
    for (String str : strs) {
      int key = 1;
      for (char c : str.toCharArray()) {
        key *= prime[c - 'a'];
      }
      if (!map.containsKey(key)) map.put(key, new ArrayList<String>());
      map.get(key).add(str);
    }
    return new ArrayList<>(map.values());
  }
}

```
