---
title: synchronized、volatile
date: 2020-12-15
categories:
  - Java
tags:
  - 概念
---

## synchronized

synchronized 是 Java 中的一个关键字，是 Java 本地代码实现的同步、重量级锁。synchronized 可以保证方法或者代码块在运行时，同一时刻只有一个方法可以进入到临界区，同时它还可以保证共享变量的内存可见性。

### 可以被修饰的对象（锁对象）

- 普通同步方法，锁是当前实例对象。
- 静态同步方法，锁是当前类的 Class 对象。
- 同步方法块，锁是括号里面的对象。

### 实现机制

synchronized 的锁机制是用 Java 对象头和管程（Monitor，监视器）实现的。当线程访问同步块时首先需要获得锁并把相关信息存储在对象头中。

对象头包括两部分数据：Mark Word（标记字段）和 Klass Pointer（类型指针）。

Mark Word 被设计成一个非固定的数据结构以便在极小的空间内存存储尽量多的数据，它会根据对象的状态复用自己的存储空间。其中包含了哈希码（HashCode）、GC 分代年龄、锁状态标志、线程持有的锁、偏向线程 ID、偏向时间戳。

![Mark Word 结构图示](https://cdn.jsdelivr.net/gh/syfxlin/pic/2020/12/20201215092954.png)

Java 基于进入和退出 Monitor 对象来实现方法的同步和代码块同步。每个对象都有一个 Monitor 与之关联,当其被占用就会处于锁定的状态。
Monitor 并不是一个对象，只是习惯了这样一个称呼，他被保存在对象头的 Mark Word 中。

进入和退出 Monitor 通过 `monitorenter` 和 `monitorexit` 指令实现。

![monitorenter 和 monitorexit 指令图示](https://cdn.jsdelivr.net/gh/syfxlin/pic/2020/12/20201215105545.png)

### 锁优化

**自旋锁**：当线程获取不到锁的时候，该线程等待一段时间，不会被立即挂起，看持有锁的线程是否会很快释放锁（循环方式）。线程的频繁挂起、唤醒负担较重，可以认为每个线程占有锁的时间很短，线程挂起再唤醒得不偿失。

**适应性自旋锁**：自旋的次数不再是固定的，它是由前一次在同一个锁上的自旋时间及锁的拥有者的状态来决定。自旋成功，则可以增加自旋次数，如果获取锁经常失败，那么自旋次数会减少。

**锁消除**：若不存在数据竞争的情况，JVM 会消除锁机制。判断依据：变量逃逸。

**锁粗化**：将多个连续的加锁、解锁操作连接在一起，扩展成一个范围更大的锁，避免频繁申请和释放锁。例如 for 循环内部获取锁。

**轻量级锁**：在没有多线程竞争的前提下，减少传统的重量级锁使用操作系统互斥量产生的性能消耗。通过 CAS 来获取锁和释放锁。对于绝大部分的锁，在整个生命周期内都是不会存在竞争的。

**偏向锁**：为了在无多线程竞争的情况下尽量减少不必要的轻量级锁执行路径。主要尽可能避免不必须要的 CAS 操作，如果竞争锁失败，则升级为轻量级锁。

## volatile

对一个 volatile 的读，总可以看到对这个变量最终的写，即被 volatile 修饰的变量。 对单个读/写具有原子性（32 位 Long、Double），但是复合操作除外，例如 i++。

当写一个 volatile 变量时，JMM 会把该线程对应的本地内存中的共享变量值立即刷新到主内存中。当读一个 volatile 变量时，JMM 会把该线程对应的本地内存设置为无效，直接从主内存中读取共享变量。
