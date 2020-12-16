# GB/T 3304-1991

Names of nationalities of China in romanization with codes 中国各民族名称的罗马字母拼写法和代码

[![npm version](https://img.shields.io/npm/v/gb3304.svg)](https://www.npmjs.com/package/gb3304)

[English](./README.md) | 简体中文

## 安装

```sh
npm install gb3304
```

在 jsDelivr 上可以获取到最新 CDN 构建:

- [cdn.jsdelivr.net/npm/gb3304/dist/gb3304.esm.js](https://cdn.jsdelivr.net/npm/gb3304/dist/gb3304.esm.js)
- [cdn.jsdelivr.net/npm/gb3304/dist/gb3304.umd.min.js](https://cdn.jsdelivr.net/npm/gb3304/dist/gb3304.umd.min.js)

## 用法

```js
// 使用 ES 模块
import { data, names } from 'gb3304';

// 使用 CommonJS 模块
const { data, names } = require('gb3304');
```

```js
data.find((item => item.name === '汉族'));
// {name: "汉族", romanization: "Han", code: "HA", digitalCode: "01"}

data.find((item) => item.name === '朝鲜族')
// {name: "朝鲜族", romanization: "Chosen", code: "CS", romanizationInternational: "Korean", digitalCode: "10"}

names.includes('藏族');
// true
```

## 许可证

MIT © Qingrong Ke

## 参考

- [GB/T 3304-1991 - 国家标准全文公开系统](http://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=E5C3271B62636C5DA6853A0DA23EBBA9)
