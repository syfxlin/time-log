const path = require("path");

module.exports = {
  title: "Otstar's Time-log",
  description:
    "Otstar Lin 的时间日志，主要记录一些简短的学习内容，如技术日志，一些阅读过的文章，笔记等",
  dest: "dist",
  markdown: {
    lineNumbers: true,
  },
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  theme: "reco",
  themeConfig: {
    repo: "https://github.com/syfxlin/time-log",
    logo: "https://cdn.jsdelivr.net/gh/syfxlin/pic/index/blog.png",
    author: "Otstar Lin",
    authorAvatar:
      "https://cdn.jsdelivr.net/gh/syfxlin/pic/index/avatar-lite.png",
    searchPlaceholder: "搜索...",
    lastUpdated: "上次更新",
    docsRepo: "syfxlin/time-log",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
    smoothScroll: true,
    codeTheme: "okaidia",
    noFoundPageByTencent: false,
    nav: [
      {
        text: "100 天编码",
        link: "/100-days-of-code.html",
        icon: "reco-api",
      },
      {
        text: "时间轴",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "RSS",
        link: "https://log.ixk.me/rss.xml",
        icon: "reco-rss",
      },
    ],
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
  },
  plugins: [
    [
      "autobar",
      {
        setHomepage: "top",
      },
    ],
    "@vuepress/active-header-links",
    "@vuepress/nprogress",
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-118354380-3",
      },
    ],
    [
      "@vuepress/medium-zoom",
      {
        selector: ".page img",
      },
    ],
    "@vuepress-reco/back-to-top",
    [
      "@vuepress-reco/rss",
      {
        site_url: "https://log.ixk.me",
        copyright: "Otstar Lin",
      },
    ],
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "public"),
      },
    },
  },
};
