---
title: 线程池
date: 2020-12-12
categories:
  - Java
tags:
  - 概念
---

## 线程池

线程池（Thread Pool）是一种基于池化思想管理线程的工具。我们知道当线程过多的时候会导致过多的额外开销，同时大量的线程创建、销毁、切换也会降低应用的整体性能。线程池就是利用池化思想维护多个线程，当有任务提交进来的时候，就唤醒池内休眠的线程起来工作，省去了创建线程的开销，等执行完毕后就休眠线程，这样就又省去了销毁线程的开销，提高了响应速度。同时由于维护了固定的线程，也可以减少内存的占用，提高了线程的可管理性，可以进行统一分配、调优和监控。

## Executor

Executors：静态工厂类，提供了 Executor、ExecutorService、ScheduledExecutorService、ThreadFactory 、Callable 等类的静态工厂方法。不建议使用，通过该工具类创建的线程池并不适用于所有的常见，通常还会导致 OOM 发生等。

ThreadPoolExecutor：JDK 中默认的线程池，JDK 中线程池闲时的时候保留一定线程，当核心线程处理不来的时候将任务放到任务队列中，任务队列满的时候才会创建临时线程，此时如果还是处理不来，则触发拒绝策略。这种工作模式也导致了在队列较长的情况下，线程池没有机会创建新的线程，限制了线程池的吞吐性能。相关文章：[浅谈可扩展线程池
](https://blog.ixk.me/talk-about-scalable-thread-pool.html)

ScheduledThreadPoolExecutor：继承自 ThreadPoolExecutor。给定的延迟之后运行任务，或者定期执行任务。内部使用 DelayQueue 来实现 ，会把调度的任务放入 DelayQueue 中。DelayQueue 内部封装 PriorityQueue，这个 PriorityQueue 会对队列中的 ScheduledFutureTask 进行排序。

ForkJoinPool：一个用于并行执行任务的框架， 是一个把大任务分割成若干个小任务，最终汇总每个小任务结果后得到大任务结果的框架。和 ThreadPoolExecutor 不同，ForkJoinPool 中并不只维护一个工作队列，每个工作线程都有自己的一个工作，该工作队列是一个双端队列。push/pop 只能被队列的所有者线程调用，而 poll 可以被其他线程调用。划分的子任务调用 fork 时，都会被 push 到自己的队列中。默认情况下，工作线程从自己的双端队列获出任务并执行。当自己的队列为空时，线程随机从另一个线程的队列末尾调用 poll 方法窃取任务。这样就保证了负债均衡。

## Future

Future 表示异步计算的未来结果 - 在处理完成后最终将出现在 Future 中的结果。类似于 JavaScript 的 Promise。是异步计算的关键，Future 提供了执行任务的取消、查询任务是否完成、获取任务的执行结果等功能。

FutureTask：实现 RunnableFuture 接口，既可以作为 Runnable 被执行，也可以作为 Future 得到 Callable 的返回值，内部基于 AQS 实现。

## 扩展阅读

[Java 线程池实现原理及其在美团业务中的实践](https://tech.meituan.com/2020/04/02/java-pooling-pratice-in-meituan.html)

[JUC 线程池: Fork/Join 框架详解](https://www.pdai.tech/md/java/thread/java-thread-x-juc-executor-ForkJoinPool.html)
