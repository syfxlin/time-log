---
title: HTTP - Cookie、Session
date: 2020-09-29
categories:
  - HTTP
tags:
  - 概念
---

## Cookie

Cookie 是用于会话维持的一种技术，可以认为是服务端和客户端交互的小纸条。Cookie 存储于客户端，除标记为 HttpOnly 的内容无法被客户端读取外，其他内容都可被客户端读取，所以敏感内容要注意加密。

### 流程

![Cookie 通讯流程](https://cdn.jsdelivr.net/gh/syfxlin/pic/2020/09/20200929085128.png)

### 设置

设置一般是服务端设置的，可以通过 Set-Cookie 字段设置一个 Cookie。

#### 字段

- Key = Value：键值
- Expires：截至时间
- Max-Age：相对的过期时间，可以与 Expires 同时出现，但是会优先使用 Max-Age。
- Domain、Path：指定 Cookie 作用域
- HttpOnly：告诉客户端该字段只用于 Http 传输，禁止程序读取该字段
- SameSite：用于防范 XSRF 攻击，设置 Cookie 的携带性
- Secure：设置是否只允许 Https 传输该 Cookie

## Session

Session 和 Cookie 类似都是为了会话维持而存在的。

### Session ID

Session ID 是 Data 的索引，是唯一的随机字符串。在一些场景下（如 Client Side Session）中没有 Session ID 的概念。一般存储于 Cookie 中，但不是绝对的。JWT 如果不存储实际的数据，那么就是 Session ID。

### Session Data

Session Data 按存储的位置不同，一般分为 Server Side Session 和 Client Side Session 两种。

#### Server Side Session

Session Data 存在与服务端中。利用 Session ID 来进行用户标识。过期时间受 Session ID 的过期时间和 Session Data 的过期时间限制。

#### Client Side Session

Session Data 直接存到客户端。不需要 Session ID 来标识用户。为了防篡改一般会进行加密和签名。

### Cookie

Session 和 Cookie 并不是绑定在一起的。Session ID 和 Session Data 选择 Cookie 作为存储容器的原因是因为方便。

### Server Side Session

#### 优点

数据存储在服务端，相对来说安全性更强。请求时只需要传递 Session-ID，减小流量开销。可以方便的吊销 Session，管控 Session 策略。

#### 缺点

Session-Data 集中管理，不利于并行化，需要专门解决 Session 共享问题。Session-Data 需要占用服务端内存 / 存储，对服务端存在压力

### Client Side Session

#### 优点

实现简单，无须过多考虑 Session 存储、查询。将存储压力转移到了客户端，这样可以减小服务端的资源消耗。多机并行时，不需要考虑 Session 共享问题，完美支持高并发。

#### 缺点

Cookies 默认有 4KB 限制，不能存储太多内容。Cookies 会在每次请求时被默认携带，存储较多内容时，增大了流量消耗。存在重放攻击的风险，客户端可能会将数据替换为合法的旧数据。实现 Session 数据拉黑、强制失效等功能时比较复杂。数据需要签名或加密后才能确保安全。部分实现只对数据进行了签名，客户端可以直接查看到数据内容，存在安全风险。

### JWT

JWT 只是一种 Token，而不是一种 Session。JWT 将数据按特定格式进行序列化，标记过期时间，对数据进行签名后编码为 URL Safe 的 Base64URL。如果存储的数据是 Data，那么就是 Client Side Session。如果存储的数据是 ID，那么就是 Server Side Session，此时 JWT 承担着 Session ID 的职能。JWT 和 Session 并不是对立的，二者本来也不是一种东西。JWT 只是一种处理数据的手法，它通过签名保证了信息的不可篡改，特定的格式也具备其它一些小特性。JWT 的特性，让它具备成为 Client Side Session 的数据处理方式的潜力，也确实有人这么做了。
