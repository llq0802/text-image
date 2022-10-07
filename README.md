<h1 align="center">Welcome to text-to-image-video 👋</h1>
<div align="center"> 
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  <img src="https://img.shields.io/badge/npm-0.12-orange.svg" />
  <img src="https://img.shields.io/github/issues/crazylxr/3dtagcloudforeact.svg" />
  <img src="https://img.shields.io/github/forks/crazylxr/3dtagcloudforeact.svg" />
  <img src="https://img.shields.io/github/stars/crazylxr/3dtagcloudforeact.svg" />
  <img src="https://img.shields.io/github/license/crazylxr/3dtagcloudforeact.svg" />
</div>

# text-to-image-video 库使用说明

---

![image-20220928145647380](http://mdrs.yuanjin.tech/img/202209281456408.png)

`text-to-image-video`可以将文字、图片、视频进行「文本化」

只需要通过简单的配置即可使用

## 开始

1.  `text-to-image-video.umd.js`：适用于基于 UMD 的方式导入 会生产全局方法`createTextImage`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <canvas id="demo"></canvas>
    <script src="../dist/text-to-image-video.umd.js"></script>
    <script>
      createTextImage({
        canvas: document.getElementById('demo'),
        source: {
          text: 'Text Image', // 绘制的文本是：Text Image
          fontFamily: 'Roboto Mono',
        },
      });
    </script>
  </body>
</html>
```

2. `text-to-image-video.es.js`：适用于基于 ESM 的方式导入 **(Vue 也同时支持)**

```
yarn add text-to-image-video

 or

npm i text-to-image-video

```

```tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  createTextImage,{ TextImageOption } from 'text-to-image-video';

React.useEffect(() => {
  createTextImage({
    canvas: document.getElementById('demo'),
    source: {
      text: 'Text Image', // 绘制的文本是：Text Image
      fontFamily: 'Roboto Mono',
    },
  }:TextImageOption);
}, []);

const App = () => {
  return <canvas id="demo" />;
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## 画文字

```js
createTextImage({
  // 必填，配置canvas元素，最终作画在其上完成
  canvas: document.querySelector('canvas'),
  // 可选，配置作画的文本，默认为'6'
  replaceText: '6',
  // 可选，配置作画半径，该值越大越稀疏，默认为 10
  raduis: 10,
  // 可选，配置是否灰度化，若开启灰度化则会丢失色彩，默认为 false
  isGray: false,
  // 必填，配置作画内容
  source: {
    // 必填，配置画什么文本
    text: 'Text Image',
    // 选填，配置文本使用的字体，CSS 格式，默认为微软雅黑
    fontFamily: 'Microsoft YaHei',
    // 选填，配置文本尺寸，默认为 200
    fontSize: 200,
  },
});
```

## 画图片

```js
createTextImage({
  // 必填，配置canvas元素，最终作画在其上完成
  canvas: document.querySelector('canvas'),
  // 可选，配置作画的文本，默认为'6'
  replaceText: '6',
  // 可选，配置作画半径，该值越大越稀疏，默认为 10
  raduis: 10,
  // 可选，配置是否灰度化，若开启灰度化则会丢失色彩，默认为 false
  isGray: false,
  // 必填，配置作画内容
  source: {
    // 必填，配置画的图片路径
    img: 'path',
    // 选填，配置图片宽度，默认为图片自身宽度
    width: 500,
    // 选填，配置图片高度，默认为图片自身高度
    height: 300,
  },
});
```

## 画视频

```js
createTextImage({
  // 必填，配置canvas元素，最终作画在其上完成
  canvas: document.querySelector('canvas'),
  // 可选，配置作画的文本，默认为'6'
  replaceText: '6',
  // 可选，配置作画半径，该值越大越稀疏，默认为 10
  raduis: 10,
  // 可选，配置是否灰度化，若开启灰度化则会丢失色彩，默认为 false
  isGray: false,
  // 必填，配置作画内容
  source: {
    // 必填，配置画的视频路径
    video: 'path',
    // 选填，配置视频宽度，默认为视频自身宽度
    width: 500,
    // 选填，配置视频高度，默认为视频自身高度
    height: 300,
  },
});
```
