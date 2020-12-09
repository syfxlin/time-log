# 单词规律

> https://leetcode-cn.com/problems/word-pattern/comments/

给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

示例 1:

```
输入: pattern = "abba", str = "dog cat cat dog"
输出: true
```

示例 2:

```
输入:pattern = "abba", str = "dog cat cat fish"
输出: false
```

示例 3:

```
输入: pattern = "aaaa", str = "dog cat cat dog"
输出: false
```

示例 4:

```
输入: pattern = "abba", str = "dog dog dog dog"
输出: false
```

说明:
你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。

## 思考

利用 HashMap 即可完成本题，本题的关键就是建立一个映射集，每个 key 对应一个 value，每个 value 也对应了一个 key，不能重复对应，利用 HashMap 中的两个检查是否存在的函数即可检查 k-v 是否重复对应

## AC 代码

```java
import java.util.HashMap;

/*
 * @lc app=leetcode.cn id=290 lang=java
 *
 * [290] 单词规律
 */
class Solution {

  public boolean wordPattern(String pattern, String str) {
    String[] s = str.split(" ");
    if (s.length != pattern.length()) return false;
    HashMap<Character, String> map = new HashMap<Character, String>();
    for (int i = 0; i < s.length; i++) {
      char ch = pattern.charAt(i);
      if (map.containsKey(ch)) {
        if (!map.get(ch).equals(s[i])) {
          return false;
        }
      } else {
        if (map.containsValue(s[i])) {
          return false;
        }
      }
      map.put(ch, s[i]);
    }
    return true;
  }
}

```
