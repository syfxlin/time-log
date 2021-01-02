# [745]前缀和后缀搜索

> [前缀和后缀搜索](https://leetcode-cn.com/problems/prefix-and-suffix-search/)

## 思考

[官方题解：前缀和后缀搜索](https://leetcode-cn.com/problems/prefix-and-suffix-search/solution/qian-zhui-he-hou-zhui-sou-suo-by-leetcode/) 方法三，这个方法是最简单的，就使用了这个方法。

如果使用的是数组进行存储，需要注意分隔符应该找在 a-z 附近的分隔符，否则就需要创建 128 大小的数组，浪费空间。我使用了 | 来分割。

## 代码

```java
class WordFilter {

  private final TrieNode root;

  public WordFilter(final String[] words) {
    root = new TrieNode();
    for (int i = 0; i < words.length; i++) {
      this.insert(words[i], i);
    }
  }

  public int f(final String prefix, final String suffix) {
    final String word = suffix + "|" + prefix;
    TrieNode cur = root;
    for (int i = 0; i < word.length(); i++) {
      if (cur.child[word.charAt(i) - 'a'] == null) {
        return -1;
      }
      cur = cur.child[word.charAt(i) - 'a'];
    }
    return cur.weight;
  }

  private void insert(String word, final int weight) {
    word += '|';
    root.weight = weight;
    final int len = word.length();
    for (int i = 0; i < len; ++i) {
      TrieNode cur = root;
      // sub(i - len) + '|' + sub(0 - len)
      for (int j = i; j < 2 * len - 1; ++j) {
        final int ch = word.charAt(j % len) - 'a';
        if (cur.child[ch] == null) {
          cur.child[ch] = new TrieNode();
        }
        cur = cur.child[ch];
        cur.weight = weight;
      }
    }
  }

  private class TrieNode {

    public TrieNode[] child = new TrieNode[30];
    public int weight;
  }
}

```
