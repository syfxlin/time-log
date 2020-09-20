---
title: HTTP - 请求方法和URL格式
date: 2020-09-10
categories:
  - HTTP
tags:
  - 概念
---

## 请求方法

- GET：获取资源，可以理解为读取或者下载数据
- HEAD：获取资源的元信息
- POST：向资源提交数据，相当于写入或上传数据
- PUT：类似 POST
- DELETE：删除资源
- CONNECT：建立特殊的连接隧道
- OPTIONS：列出可对资源实行的方法
- TRACE：追踪请求 - 响应的传输路径

## URL 格式

![URL 格式](https://cdn.jsdelivr.net/gh/syfxlin/pic/2020/09/20200920183128.png)

1. scheme：协议类型，如 http，https，ws，wss。
2. user:password@：HTTP 认证的用户名和密码，不是必须的。
3. host：主机地址，可以是域名或者 IP。
4. path：资源路径，可以为空，使用 / 分割子路径，如果不为空首位必须是 /。
5. ?query：查询参数，可以为空，如果不为空首位必须是 ? 多个参数使用 & 分割，键和值用 = 分割。
6. #fragment：哈希或锚点，可以为空，一般用作前端路由或定位锚点。
