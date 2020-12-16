# GB/T 3304-1991

中国各民族名称的罗马字母拼写法和代码

[![npm version](https://img.shields.io/npm/v/gb3304.svg)](https://www.npmjs.com/package/gb3304)

[English](./README.md) | 简体中文

## 安装

```sh
npm install gb3304
```

## 用法

```js
import { data, names } from 'gb3304';

data.find((item => item.name === '汉族'));
// {name: "汉族", romanization: "Han", code: "HA", digitalCode: "01"}

names.includes('藏族');
// true
```

## 许可证

MIT © Qingrong Ke
