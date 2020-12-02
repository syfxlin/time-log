---
title: 反射、动态代理
date: 2020-12-02
categories:
  - Java
tags:
  - 概念
---

Java 除了原始数据类型的变量，其他所有都是引用类型。引用分为强引用、软引用、弱引用、幻象引用，这几种引用影响着对象的回收。

## 强引用

当我们 new 一个对象的时候并赋值到一个变量中的时候，此时该对象就拥有了强引用。只要有一个强引用还指向一个对象，GC 就不会收集该对象，当内存不足的时候 JVM 也不会回收强引用的对象，而是会抛出 OOM 错误。超过了引用的作用域，或者显示的设为 null 则不再是强引用。

```java
class Main {

  public static void main(String[] args) {
    // 强引用
    Object object = new Object();
  }
  // 脱离 main 方法作用域的时候就不再是强引用了
}

```

## 软引用

软引用通过 SoftReference 类实现。可以让对象豁免一些垃圾收集，当 JVM 认为内存不足的时候就会回收这些引用指向的对象，即在抛出 OOM 前，JVM 会试图清除软引用的对象。软引用常用于实现内存敏感的缓存，如果还有空闲内存，就可以暂时保留缓存，当内存不足时清理掉，这样就保证了使用缓存的同时，不会耗尽内存。

```java
import java.lang.ref.SoftReference;

class Main {

  public static void main(String[] args) {
    // 软引用
    SoftReference<Object> object = new SoftReference<>(new Object());
    // 重新恢复强引用
    if (object.get() != null) {
      final Object o = object.get();
    }
  }
}

```

## 弱引用

弱引用通过 WeakReference 实现。不能豁免垃圾收集，仅提供了一种访问对象的途径。当 GC 扫描到弱引用的时候就会直接清除弱引用指向的对象。弱引用可以用来构建一种没有特定约束的关系，如实例缓存，当能获取到缓存时则使用，不能访问到的时候则重新实例化。

```java
import java.lang.ref.WeakReference;

class Main {

  public static void main(String[] args) {
    // 弱引用
    WeakReference<Object> object = new WeakReference<>(new Object());
    // 重置到强引用
    if (object.get() != null) {
      final Object o = object.get();
    }
  }
}

```

## 幻象引用

幻象引用通过 PhantomReference 类实现。幻象引用的对象不能被访问到，幻象引用仅仅是提供了一种确保对象被 finalize 以后，做某些事情的机制。如果一个对象仅持有虚引用，那么它就和没有任何引用一样，在任何时候都可能被垃圾回收器回收。幻象引用需要配合引用队列使用。

## 一些乱七八糟的东西

可达性的类型对应各种引用类型。

通过反射 get 到的对象可以重新被引用到强引用或其他引用。

所有的引用类型都可以在被回收前通过反射的 get 方法获取到对象（除幻象引用指向的对象）。

GC 在回收对象前会进行二次确认，重新确认对象是否处于非强引用的状态。
