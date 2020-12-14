---
title: 类加载
date: 2020-12-07
categories:
  - Java
tags:
  - 概念
---

## 类加载步骤

**加载（Loading）**：将不同数据源的字节码数据读取到 JVM 中，并映射为 JVM 认可的数据结构（Class 对象）。数据源可以是 Class 文件、Jar 文件、网络文件等 Java 可识别的文件。当输入的数据不是 ClassFile 则会抛出 ClassFormatError。

**链接（Linking）**：链接分成三个步骤：

**验证（Verification）**：这是虚拟机安全的重要保障，JVM 需要核验字节信息是符合 Java 虚拟机规范的，否则就被认为是 VerifyError，这样就防止了恶意信息或者不合规的信息危 害 JVM 的运行，验证阶段有可能触发更多 class 的加载。

**准备（Preparation）**：创建类或接口中的静态变量，并初始化静态变量的初始值。但这里的“初始化”和下面的显式初始化阶段是有区别的，侧重点在于分配所需要的内存空间，不会去执行更进一步的 JVM 指令。

**解析（Resolution）**：在这一步会将常量池中的符号引用（symbolic reference）替换为直接引用。在 Java 虚拟机规范中，详细介绍了类、接口、方法和字段等各个方面的解析。

**初始化（Initialization）**：执行类初始化的逻辑（静态字段赋值、执行静态代码段、父类的初始化）

## 双亲委派模型

当类加载器试图加载某个类型的时候，除非父加载器找不到相应类型，否则尽量将这个任务代理给当前加载器的父加载器去做，这个流程就是双亲委派模型。使用委派模型的目的是避免重复加载 Java 类型。

部分情况下也可能不是使用这种模型来加载，有的时候，启动类加载器所加载的类型，是可能要加载用户代码的，比如 JDK 内部的 ServiceProvider/ServiceLoader 机制，用户可以在标准 API 框架上，提供自己的实现，JDK 也需要提供些默认的参考实现。 例如，Java 中 JNDI、JDBC、文件系统、Cipher 等很多方面，都是利用的这种机制，这种情况就不会用双亲委派模型去加载，而是利用所谓的上下文加载器。

## 类加载器

- BootstrapClassLoader 启动类加载器
- ExtensionClassLoader 扩展类加载器
- ApplicationClassLoader 应用程序类加载器（也称 系统类加载器）

![类加载器](https://cdn.jsdelivr.net/gh/syfxlin/pic/2020/12/20201207220218.png)
