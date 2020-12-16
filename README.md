# GB/T 3304-1991

Names of nationalities of China in romanization with codes

[![npm version](https://img.shields.io/npm/v/gb3304.svg)](https://www.npmjs.com/package/gb3304)

English | [简体中文](./README-zh-hans.md)

## Installation

```sh
npm install gb3304
```

## Usage

```js
import { data, names } from 'gb3304';

data.find((item => item.name === '汉族'));
// {name: "汉族", romanization: "Han", code: "HA", digitalCode: "01"}

names.includes('藏族');
// true
```

## License

MIT © Qingrong Ke
