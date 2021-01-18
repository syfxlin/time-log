(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{535:function(t,a,v){"use strict";v.r(a);var _=v(6),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"连接管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#连接管理"}},[t._v("#")]),t._v(" 连接管理")]),t._v(" "),v("h3",{attrs:{id:"短连接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#短连接"}},[t._v("#")]),t._v(" 短连接")]),t._v(" "),v("p",[t._v("短连接指的是发送数据前建立连接，完成数据的接收后立即关闭连接。")]),t._v(" "),v("p",[t._v("由于传输的时候每次都需要重新建立 TCP 连接，而在 TCP 里建立连接和关闭连接时非常昂贵的操作，如果每次都重新打开，重新关闭，那么效率就会非常差。")]),t._v(" "),v("h3",{attrs:{id:"长连接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#长连接"}},[t._v("#")]),t._v(" 长连接")]),t._v(" "),v("p",[t._v("长连接指的是发起一次 TCP 请求，并保持这个 TCP，后续的 HTTP 请求就可以直接使用该 TCP，而不需要每次都重新打开关闭。")]),t._v(" "),v("p",[t._v("由于在传输多个资源的时候可以公用一个 TCP 连接，这样就可以节省很多不必要的浪费。")]),t._v(" "),v("h3",{attrs:{id:"头字段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#头字段"}},[t._v("#")]),t._v(" 头字段")]),t._v(" "),v("p",[t._v("用于连接控制的头字段是 "),v("code",[t._v("Connection")]),t._v("，当服务端支持长连接的时候就会在响应报文中添加 "),v("code",[t._v("Connection: keep-alive")]),t._v(" 的头字段，如果客户端也支持长连接，那么后续的数据传输就会使用这个长连接，而会每次都重新开启一个 TCP 连接。当然有开启肯定也有关闭，由于长连接不像短连接一样在传输完毕的时候自动关闭，所以当客户端或服务端不使用这个长连接的时候就可以在报文中添加 "),v("code",[t._v("Connection: close")]),t._v(" 的头字段来代表在这次通信完成后就关闭连接。")]),t._v(" "),v("h3",{attrs:{id:"队头堵塞"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#队头堵塞"}},[t._v("#")]),t._v(" 队头堵塞")]),t._v(" "),v("p",[t._v("与短连接和长连接无关，而是因为 HTTP 规定报文必须是“一发一收”，这就形成了一个先进先出的“串行”队列。如果队首的请求因为处理的太慢耽误了时间，那么后面的请求也不得不跟着一起等待。")]),t._v(" "),v("p",[t._v("为了缓解这种情况客户端服务端通常不会只使用一个连接，而是采用并发连接，将请求分散到不同的连接中，即使一个连接堵塞了也不会影响到其他的连接。")]),t._v(" "),v("h2",{attrs:{id:"重定向与跳转"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重定向与跳转"}},[t._v("#")]),t._v(" 重定向与跳转")]),t._v(" "),v("h3",{attrs:{id:"主动跳转"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主动跳转"}},[t._v("#")]),t._v(" 主动跳转")]),t._v(" "),v("p",[t._v("主动跳转指的是客户端主动发起的跳转请求，如用户通过点击 a 标签发起的跳转，用户输入网址发生的跳转或者通过 JavaScript 修改 "),v("code",[t._v("location")]),t._v(" 实现跳转的都是主动跳转。")]),t._v(" "),v("h3",{attrs:{id:"被动跳转-重定向"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#被动跳转-重定向"}},[t._v("#")]),t._v(" 被动跳转（重定向）")]),t._v(" "),v("p",[t._v("被动跳转指的是由服务端发起的跳转请求，也可以称之为重定向。")]),t._v(" "),v("p",[t._v("服务端通过发送 "),v("code",[t._v("Location")]),t._v(" 头字段使浏览器进行跳转，除了 "),v("code",[t._v("Location")]),t._v(" 头字段外还需要配合 3xx 状态码来使用。")]),t._v(" "),v("ul",[v("li",[t._v("301：代表永久跳转，一般用于网站迁移后防止 SEO 404。")]),t._v(" "),v("li",[t._v("302：代表临时跳转，一般用于服务降级和临时维护。")]),t._v(" "),v("li",[t._v("...")])]),t._v(" "),v("h3",{attrs:{id:"性能损耗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#性能损耗"}},[t._v("#")]),t._v(" 性能损耗")]),t._v(" "),v("p",[t._v("很明显，重定向的机制决定了一个跳转会有两次请求，如果跳转的是站外就必须另外开一个连接。即使跳转的报文很少，但在大量的重定向的情况下也是不可忽视的。")]),t._v(" "),v("h3",{attrs:{id:"循环跳转"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#循环跳转"}},[t._v("#")]),t._v(" 循环跳转")]),t._v(" "),v("p",[t._v("当跳转链是 A-..-A 的时候就会造成循环循环跳转，浏览器发现这种情况会停止发送请求并给出网页无法访问的提示。")])])}),[],!1,null,null,null);a.default=s.exports}}]);