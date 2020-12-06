---
title: IO、NIO
date: 2020-12-06
categories:
- Java
  tags:
- 概念
---

## 同步、异步、阻塞、非阻塞

请到我博客文章查看：[浅谈并发：基础](https://blog.ixk.me/talking-about-concurrency-basics.html)

## BIO

BIO 即 java.io 包中的一系列操作，基于流模型实现，交互方式是同步、阻塞，调用是可靠的线性顺序。

BIO 使用多线程执行的模式，之所以要用多线程，是因为 BIO 在等待，执行等阶段都是阻塞的。

线程实现是比较重量级的，启动或者销毁一个线程是有明显开销的，每个线程都有单独的线程栈等结构，需要占用非常明显的内存。如果使用线程池，在终端数量非常多的时候，线程上下文切
换开销会在高并发时变得很明显，会有一定的性能瓶颈。

![BIO 执行模型](https://cdn.jsdelivr.net/gh/syfxlin/pic/2020/12/20201206162247.png)

## NIO

NIO 即 java.nio 包中的一系列操作，交互方式是多路复用的、同步非阻塞，提供了更接近操作系统底层
的高性能数据操作方式。

NIO 采用的是单线程轮询事件的机制，之所以可以使用单线程，是因为 NIO 只有在 Select（执行）阶段是阻塞的，等待阶段是非阻塞的，可以有效避免大量客户端连接时，频繁线程切换带来的问题。NIO 为了适应多核心只需要开与核心数相同的线程即可充分的利用多核心的性能。

NIO 的执行模式是将 IO 任务注册到 Selector 中，当 IO 任务完成时，Selector 就可以 select 到这个任务（Selector 会轮询 IO 事件的状态，一旦有 IO 事件完成则返回完成事件对应 Key），然后就可以丢到其他线程中处理了。这样就可以用很少的 Selector 监听众多的 IO 事件了，而不必每个 IO 事件都新开一个线程，然后在那里死等。

![NIO 模型](https://cdn.jsdelivr.net/gh/syfxlin/pic/2020/12/20201206162748.png)

## AIO

AIO 是 java.nio 在 Java1.7 后新增的一些异步操作，也被称为 NIO2，基于事件和回调机制，交互方式是异步非阻塞。

AIO 和 NIO 类似，只不过把 Selector 的职责交给操作系统实现，把原本 register -> select -> process 的流程简化成了 register -> process。IO 事件完成的时候，不再需要 Selector 来 select 已完成的 IO 任务，而是通过操作系统回调设置好的回调函数。

## NIO 一些类

- Buffer：高效的数据容器，除了布尔类型，所有原始数据类型都有相应的 Buffer 实现。
- Channel：类似在 Linux 之类操作系统上看到的文件描述符，是 NIO 中被用来支持批量式 IO 操作的一种抽象。
- Selector：是 NIO 实现多路复用的基础，它提供了一种高效的机制，可以检测到注册在 Selector 上的多个 Channel 中，是否有 Channel 处于就绪状态，进而实现了单线程对多 Channel 的高效管理。Selector 同样是基于底层操作系统机制，不同模式、不同版本都存在区别。Linux 上依赖于 epoll，Windows 上依赖于 iocp。
- Charset：提供 Unicode 字符串定义，NIO 也提供了相应的编解码器等。
