---
title: Map
date: 2020-12-04
categories:
  - Java
tags:
  - 概念
---

## Hashtable

Hashtable 是 Java 早期提供的哈希表容器。是线程安全的，索引方式基于 Hash，不支持值为 null 的 key 或 value。由于采用的是同步的方式进行访问的，会有性能损失，不推荐使用。

## HashMap

HashMap 是 Java 提供的哈希表容器。不是线程安全的，索引方式基于 Hash，支持值为 null 的 key 或 value。插入，查询，删除可以达到 O(1) 的性能。

底层使用桶数组+链式存储，当对应的链表超过一定阈值（默认是 8），就会发生树化，即链表部分转换成树的方式进行存储。Hash 表创建的时机是第一次添加值的时候，也就是懒加载（通过 resize 方法初始化或扩容）。

Hash 的方法不是单纯的调用 obj.hashCode 方法，HashMap 中的 hash 函数会将 hashCode 的高位移位到低位，并进行异或运算，这做法可以避免 hash 碰撞。

建议和要求：equals 相等，hashCode 一定要相等（HashMap 的比较是先比较 hashCode，然后比较 equals）。重写了 hashCode 也要重写 equals。hashCode 需要保持一致性，状态改变返回的哈希值仍然要一致。equals 的对称、反射、传递等特性。

## LinkedHashMap

LinkedHashMap 和 HashMap 差不多，不过添加了链表用于顺序访问。

LinkedHashMap 非常适合用来作为 LRU 缓存的数据结构（可以提供常数时间的复杂度，可以提供插入的先后顺序）。

## TreeMap

TreeMap 基于红黑树的方式进行存储。可以提供按比较的顺序访问的能力，也可以按照 key 的自然顺序访问。插入，查询，删除的性能是 O(logN)。优先队列（PriorityQueue）基于此数据结构。

建议和要求：compareTo 的返回值需要和 equals 一致。
