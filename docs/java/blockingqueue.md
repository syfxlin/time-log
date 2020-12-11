---
title: 阻塞队列
date: 2020-12-11
categories:
  - Java
tags:
  - 概念
---

## ArrayBlockingQueue

ArrayBlockingQueue 是一个由数组实现的 FIFO 有界阻塞队列，ArrayBlockingQueue 有界且固定，在构造函数时确认大小，确认后不支持改变，在多线程环境下不保证“公平性”。

实现方式：ReentrantLock + Condition + 对象数组。

## LinkedBlockingQueue

LinkedBlockingQueue 是一个由双向链表实现的 FIFO 有界阻塞队列，是 ArrayBlockingQueue 的链表版本。

实现方式：ReentrantLock + Condition + 双向链表。

## PriorityBlockingQueue

PriorityBlockingQueue 是支持优先级的无界阻塞队列，默认情况下元素采用自然顺序升序排序，可以通过指定 Comparator 来对元素进行排序。

采用二叉堆作为数据结构，添加操作则是不断“上冒”，而删除操作则是不断“下掉”。

实现方式：ReentrantLock + Condition + 二叉堆。

## DelayQueue

DelayQueue 是支持延时获取元素的无界阻塞队列，使用优先队列进行存储。常用于清除超时的缓存数据或超时处理。

Delayed 接口：该接口用来标记那些应该在给定延迟时间之后执行的对象，该接口要求实现它的实现类必须定义一个 compareTo 方法，该方法提供与此接口的 getDelay 方法一致的排序。

实现方式：ReentrantLock + Condition + 根据 Delay 时间排序的优先级队列。

## SynchronousQueue

SynchronousQueue 是一个没有容量的阻塞队列，常用于交换工作，生产者的线程和消费者的线程同步以传递某些信息、事件或者任务。

## LinkedTransferQueue

LinkedTransferQueue 是链表组成的的无界阻塞队列。相当于 ConcurrentLinkedQueue、SynchronousQueue (公平模式下)、无界的 LinkedBlockingQueues 等的超集。

预占模式：有就直接拿走，没有就占着这个位置直到拿到或者超时或者中断。

## LinkedBlockingDeque

LinkedBlockingDeque 是 LinkedBlockingQueue 的双向队列版本，由于双向的特性，可以实现任务窃取的工作模式。
