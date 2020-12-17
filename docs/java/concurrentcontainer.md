---
title: 并发容器
date: 2020-12-03
categories:
  - Java
tags:
  - 概念
---

## 原子类（Atomic）

原子类指的是 `java.util.concurrent.atomic` 包下的一系列原子包装类及原子更新工具。原子类采用 CAS 来进行并发原子操作，性能相比于加锁有优势。

### 基本类型类

用于通过原子的方式更新基本类型

- **AtomicBoolean**：原子更新布尔类型
- **AtomicInteger**：原子更新整型
- **AtomicLong**：原子更新长整型

### 数组

通过原子的方式更新数组里的某个元素

- **AtomicIntegerArray**：原子更新整型数组里的元素
- **AtomicLongArray**：原子更新长整型数组里的元素
- **AtomicReferenceArray**：原子更新引用类型数组里的元素

### 引用类型

如果要原子的更新多个变量，就需要使用这个原子更新引用类型提供的类

- **AtomicReference**：原子更新引用类型
- **AtomicReferenceFieldUpdater**：原子更新引用类型里的字段
- **AtomicMarkableReference**：原子更新带有标记位的引用类型

### 字段类

如果我们只需要某个类里的某个字段，那么就需要使用原子更新字段类

- **AtomicIntegerFieldUpdater**：原子更新整型的字段的更新器
- **AtomicLongFieldUpdater**：原子更新长整型字段的更新器
- **AtomicStampedReference**：原子更新带有版本号的引用类型

### 分段操作（Striped64）

Striped64 及其子类实现了分段锁的功能，将一个变量分成多段进行 CAS 操作，在高并发下，性能优于普通的原子操作类。

- **LongAccumulator**：原子更新长整型
- **LongAdder**：原子更新长整型
- **DoubleAccumulator**：原子更新双精度浮点型
- **DoubleAdder**：原子更新双精度浮点型

## ConcurrentHashMap

ConcurrentHashMap 采用 CAS + Synchronized 来保证并发更新的安全，底层采用数组+链表/红黑树的存储结构

### 重要内部类

- **Node**：key-value 键值对
- **TreeNode**：红黑树节点
- **TreeBin**：就相当于一颗红黑树，其构造方法其实就是构造红黑树的过程
- **ForwardingNode**：辅助节点，用于 ConcurrentHashMap 扩容操作。sizeCtl：控制标识符，用来控制 table 初始化和扩容操作的。负数代表正在进行初始化或扩容操作，-1 代表正在初始化，-N 表示有 N-1 个线程正在进行扩容操作，正数或 0 代表 hash 表还没有被初始化，这个数值表示初始化或下一次进行扩容的大小

### 重要操作

#### initTable

ConcurrentHashMap 初始化方法，只能有一个线程参与初始化过程，其他线程必须挂起。构造函数不做初始化过程，初始化真正是在 put 操作触发。

**步骤**：sizeCtl < 0 表示正在进行初始化，线程挂起。线程获取初始化资格（CAS(SIZECTL, sc, -1)）进行初始化过程。初始化步骤完成后，设置 sizeCtl = 0.75 \* n（下一次扩容阈值），表示下一次扩容的大小

#### put

根据 hash 值计算节点插入在 table 的位置，如果该位置为空，则直接插入，否则插入到链表或者树中。

**步骤**：table 为 null，线程进入初始化步骤，如果有其他线程正在初始化，该线程挂起。如果插入的当前 i 位置 为 null，说明该位置是第一次插入，利用 CAS 插入节点即可，插入成功，则调用 addCount 判断是否需要扩容。若插入失败，则继续匹配（自旋）。若该节点的 hash ==MOVED（-1），表示有线程正在进行扩容，则进入扩容进程中。其余情况就是按照链表或者红黑树结构插入节点，但是这个过程需要加锁（synchronized）

#### get

**步骤**：table 为 null 则直接返回 null，否则通过 hash 从链表/红黑树节点获取

#### 扩容

**步骤**：构建一个 nextTable，其大小为原来大小的两倍，这个步骤是在单线程环境下完成的。将原来 table 里面的内容复制到 nextTable 中，这个步骤是允许多线程操作

#### 链表转换为红黑树过程（树化）

所在链表的元素个数达到了阈值 8，则将链表转换为红黑树

## ConcurrentLinkedQueue

ConcurrentLinkedQueue 基于链接节点的无边界的线程安全队列，采用 FIFO 原则对元素进行排序，内部采用 CAS 算法实现。

入队时将入队节点设置成当前队列尾节点的下一个节点。然后更新 tail 节点，在入队列前如果 tail 节点的 next 节点不为空，则将入队节点设置成 tail 节点，如果 tail 节点的 next 节点为空，则将入队节点设置成 tail 的 next 节点，所以 tail 节点不总是尾节点。利用 CAS 操作，一旦发现插队，则重新获取 tail 节点重试。

出队时首先获取 head 节点的元素，并判断 head 节点元素是否为空，如果为空，表示另外一个线程已经进行了一次出队操作将该节点的元素取走，如果不为空，则使用 CAS 的方式将 head 节点的引用设置成 null，如果 CAS 成功，则直接返回 head 节点的元素，如果 CAS 不成功，表示另外一个线程已经进行了一次出队操作更新了 head 节点，导致元素发生了变化，需要重新获取 head 节点。

## ConcurrentSkipListMap

ConcurrentSkipListMap 采用 CAS 算法实现，基于跳表（SkipList）存储结构，存储顺序为自然有序。

关于跳表的可以到我博客之前的文章查看 [浅谈跳表](https://blog.ixk.me/talking-about-skip-list.html)

## ConcurrentSkipListSet

采用 ConcurrentSkipListMap 实现

## CopyOnWriteArrayList

CopyOnWriteArrayList 采用 Copy-On-Write（写时复制） 机制进行写操作，在读多写少的环境下性能优于加锁。

读取时直接在原始列表上读取，无需加锁。

写入时加锁同时复制一份，并更新元素，然后将更新后的新列表替换掉旧列表。需要注意的是，之所以要复制一份，是因为写入加的锁并不包括读取操作（只保证了写入是同步的），所以为了保证线程安全不能对原列表直接进行操作。

## CopyOnWriteArraySet

采用 CopyOnWriteArrayList 实现
