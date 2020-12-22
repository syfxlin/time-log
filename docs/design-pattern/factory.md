---
title: 工厂模式
date: 2020-12-21
categories:
  - 设计模式
tags:
  - 概念
---

## 介绍

工厂通常是一个用来创建其他对象的对象。工厂是构造方法的抽象，用来实现不同的分配方案。

工厂对象通常包含一个或多个方法，用来创建这个工厂所能创建的各种类型的对象。这些方法可能接收参数，用来指定对象创建的方式，最后返回创建的对象。

常用于简化复杂初始化类的创建。

## 简单工厂

[代码](https://github.com/syfxlin/code/blob/master/design-pattern-java/src/main/java/me/ixk/design_pattern/factory/SimpleFactory.java)

简单工厂简单易用，通过定义一个方法，然后在方法内通过 if 过滤创建不同的对象。缺点也很明显，违背了开闭原则，扩展困难，一般只用于要创建对象相对固定的情况。

## 工厂方法

[代码](https://github.com/syfxlin/code/blob/master/design-pattern-java/src/main/java/me/ixk/design_pattern/factory_method)

工厂方法把简单工厂中的 if 分支去掉了，采用多态来实现不同的工厂。但是这样会造成工厂众多，创建起来也会变得复杂，此时我们可以给工厂添加一个简单工厂，这样就能兼顾二者的优点。

## 抽象工厂

[代码](https://github.com/syfxlin/code/blob/master/design-pattern-java/src/main/java/me/ixk/design_pattern/abstract_factory)

抽象工厂相对特殊，通常情况下我们定义一个工厂，那么这个工厂只生产一种对象，当要生产的对象多了，工厂也会随之增加，众多的类会使维护起来变得困难。抽象工厂就是为了解决这种问题才诞生的，在抽象工厂中，工厂不只生产一种对象，而是生产多个与之相关的对象，使需要维护的工厂变少。
