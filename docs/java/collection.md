---
title: 集合
date: 2020-12-03
categories:
  - Java
tags:
  - 概念
---

## Vector

Vector 是 Java 早期提供的顺序列表容器。是线程安全的，内部存储的方式是采用对象数组的方式进行存储。

可以自动扩容，自动扩容的时候增加一倍，扩容的时机是在列表满的时候。

如果不需要线程安全不建议使用，因为同步也是会有性能损失的。栈（Stack）继承自该类。

## List

List 是 Java 提供的列表，元素可以重复。比较常用的有 ArrayList 和 LinkedList。

**ArrayList**：不是线程安全的，内部使用的是对象数组的方式存储。可以自动扩容，自动扩容的时候增加 50%，扩容的时机与 Vector 不同。

**LinkedList**：不是线程安全的，内部使用双向链表存储。不需要扩容。实现了 List，Deque 的接口。

## Set

Set 是 Java 提供的集合，元素不可重复，即使添加重复的元素，最终也只会保留一个。

Set 是 Map 扩展而来，利用 Map 的 Key 作为 Set 的容器，Value 填充空值。

需要注意的是 Set 判断元素是否相同是使用 hashCode 和 equals 方法，我们使用 Set 存储自定义对象的时候一定要记得重写这两个方法。

**HashSet**：不保证有序。利用 Hash 算法，如果 Hash 正常，可以提供常数时间的添加、删除、包含等操作。实现的方式是使用 HashMap。

**LinkedHashSet**：在 HashSet 的基础上添加链表。可以提供常数时间的添加、删除、包含等操作。可以按插入顺序读取。比 HashSet 低效，因为要维护链表。

**TreeSet**：支持自然顺序访问，添加，删除，包含等操作相对低效（log N）。实现的方式是使用 TreeMap（红黑树）。

## Queue & Stack

支持 FIFO，LIFO 等特定行为的列表。

## Sort

**Arrays.sort**：对于原始类型使用双轴快速排序，对于对象类型使用 TimSort（归并和二分插入排序结合的算法）。

**Collections.sort**：底层使用 Arrays.sort，在排序前先转成对象数组，排序后再转换回来。

**并行排序（parallelSort）**：底层使用 Fork-Join 框架将排序的工作分配到不同的处理器核心。集合小的时候差距不大甚至更差（线程切换会有性能损失），集合大的时候差距明显（多核并行排序节省时间），效果取决于处理器和系统环境。

## 线程安全

大部分集合类都不是线程安全的。可以使用 Collections.synchronizedxxx 方法将集合转成线程安全的集合（底层也是非常粗暴的将写操作的方法加上 synchronized 关键字）。

或者替换为并发包中的集合类，不过并发包中提供的集合类有限，比如没有 ConcurrentSet，不过可以用 ConcurrentMap 替代。
