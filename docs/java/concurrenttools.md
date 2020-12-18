---
title: 并发工具
date: 2020-12-18
categories:
  - Java
tags:
  - 概念
---

## CyclicBarrier

CyclicBarrier 它允许一组线程互相等待，直到到达某个公共屏障点 (common barrier point)。简单的来说就是让一组线程到达一个屏障时被阻塞，直到最后一个线程到达屏障时，屏障才会开门，所有被屏障拦截的线程才会继续干活。

底层采用 ReentrantLock + Condition 实现

**应用场景**：多线程结果合并的操作，用于多线程计算数据，最后合并计算结果的应用场景。

## CountDownLatch

CountDownLatch 在完成一组正在其他线程中执行的操作之前，它允许一个或多个线程一直等待，当计数为 0 的时候才放行等待的线程。

用给定的计数初始化 CountDownLatch。由于调用了 countDown() 方法，所以在当前计数到达零之前，await 方法会一直受阻塞。之后，会释放所有等待的线程，await 的所有后续调用都将立即返回。这种现象只出现一次——计数无法被重置。如果需要重置计数，请考虑使用 CyclicBarrier。

底层采用共享锁来实现。

**与 CyclicBarrier 区别**：CountDownLatch 的作用是允许 1 或 N 个线程等待其他线程完成执行，而 CyclicBarrier 则是允许 N 个线程相互等待。CountDownLatch 的计数器无法被重置，CyclicBarrier 的计数器可以被重置后使用，因此它被称为是循环的 barrier。

## Semaphore

Semaphore 是一个控制访问多个共享资源的计数器。

从概念上讲，信号量维护了一个许可集。如有必要，在许可可用前会阻塞每一个 acquire()，然后再获取该许可。每个 release() 添加一个许可，从而可能释放一个正在阻塞的获取者。但是，不使用实际的许可对象，Semaphore 只对可用许可的号码进行计数，并采取相应的行动。

信号量 Semaphore 是一个非负整数（>=1）。当一个线程想要访问某个共享资源时，它必须要先获取 Semaphore，当 Semaphore >0 时，获取该资源并使 Semaphore – 1。如果 Semaphore 值 = 0，则表示全部的共享资源已经被其他线程全部占用，线程必须要等待其他线程释放资源。当线程释放资源时，Semaphore 则+1。

底层采用共享锁来实现。

**应用场景**：通常用于限制可以访问某些资源（物理或逻辑的）的线程数目。

## Exchanger

Exchanger 可以在对中对元素进行配对和交换的线程的同步点。允许在并发任务之间交换数据。具体来说，Exchanger 类允许在两个线程之间定义同步点。当两个线程都到达同步点时，他们交换数据结构，因此第一个线程的数据结构进入到第二个线程中，第二个线程的数据结构进入到第一个线程中。
