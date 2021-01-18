(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{512:function(t,r,e){"use strict";e.r(r);var s=e(6),a=Object(s.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),e("p",[e("strong",[t._v("意图")]),t._v("：运用共享技术有效地支持大量细粒度的对象。")]),t._v(" "),e("p",[e("strong",[t._v("主要解决问题")]),t._v("：在有大量对象时，有可能会造成内存溢出，我们把其中共同的部分抽象出来，如果有相同的业务请求，直接返回在内存中已有的对象，避免重新创建。")]),t._v(" "),e("p",[e("strong",[t._v("实现方式")]),t._v("：用唯一标识码判断，如果在内存中有，则返回这个唯一标识码所标识的对象。")]),t._v(" "),e("p",[e("strong",[t._v("关键代码")]),t._v("：用 HashMap 存储这些对象。")]),t._v(" "),e("p",[e("strong",[t._v("优点")]),t._v("：大大减少对象的创建，降低系统的内存，使效率提高。")]),t._v(" "),e("p",[e("strong",[t._v("缺点")]),t._v("：提高了系统的复杂度，需要分离出外部状态和内部状态，而且外部状态具有固有化的性质，不应该随着内部状态的变化而变化，否则会造成系统的混乱。")]),t._v(" "),e("p",[e("strong",[t._v("使用场景")]),t._v("：系统有大量相似对象。")]),t._v(" "),e("h2",{attrs:{id:"代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/syfxlin/code/blob/master/design-pattern-java/src/main/java/me/ixk/design_pattern/flyweight",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码"),e("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=a.exports}}]);