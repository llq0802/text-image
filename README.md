<h1 align="center">Welcome to text-to-image-video ð</h1>
<div align="center"> 
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  <img src="https://img.shields.io/badge/npm-0.12-orange.svg" />
  <img src="https://img.shields.io/github/issues/crazylxr/3dtagcloudforeact.svg" />
  <img src="https://img.shields.io/github/forks/crazylxr/3dtagcloudforeact.svg" />
  <img src="https://img.shields.io/github/stars/crazylxr/3dtagcloudforeact.svg" />
  <img src="https://img.shields.io/github/license/crazylxr/3dtagcloudforeact.svg" />
</div>

# text-to-image-video åºä½¿ç¨è¯´æ

---

![image-20220928145647380](http://mdrs.yuanjin.tech/img/202209281456408.png)

`text-to-image-video`å¯ä»¥å°æå­ãå¾çãè§é¢è¿è¡ãææ¬åã

åªéè¦éè¿ç®åçéç½®å³å¯ä½¿ç¨

## å¼å§

1.  `text-to-image-video.umd.js`ï¼éç¨äºåºäº UMD çæ¹å¼å¯¼å¥ ä¼çäº§å¨å±æ¹æ³`createTextImage`

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
          text: 'Text Image', // ç»å¶çææ¬æ¯ï¼Text Image
          fontFamily: 'Roboto Mono',
        },
      });
    </script>
  </body>
</html>
```

2. `text-to-image-video.es.js`ï¼éç¨äºåºäº ESM çæ¹å¼å¯¼å¥ **(Vue ä¹åæ¶æ¯æ)**

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
      text: 'Text Image', // ç»å¶çææ¬æ¯ï¼Text Image
      fontFamily: 'Roboto Mono',
    },
  }:TextImageOption);
}, []);

const App = () => {
  return <canvas id="demo" />;
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## ç»æå­

```js
createTextImage({
  // å¿å¡«ï¼éç½®canvasåç´ ï¼æç»ä½ç»å¨å¶ä¸å®æ
  canvas: document.querySelector('canvas'),
  // å¯éï¼éç½®ä½ç»çææ¬ï¼é»è®¤ä¸º'6'
  replaceText: '6',
  // å¯éï¼éç½®ä½ç»åå¾ï¼è¯¥å¼è¶å¤§è¶ç¨çï¼é»è®¤ä¸º 10
  raduis: 10,
  // å¯éï¼éç½®æ¯å¦ç°åº¦åï¼è¥å¼å¯ç°åº¦ååä¼ä¸¢å¤±è²å½©ï¼é»è®¤ä¸º false
  isGray: false,
  // å¿å¡«ï¼éç½®ä½ç»åå®¹
  source: {
    // å¿å¡«ï¼éç½®ç»ä»ä¹ææ¬
    text: 'Text Image',
    // éå¡«ï¼éç½®ææ¬ä½¿ç¨çå­ä½ï¼CSS æ ¼å¼ï¼é»è®¤ä¸ºå¾®è½¯éé»
    fontFamily: 'Microsoft YaHei',
    // éå¡«ï¼éç½®ææ¬å°ºå¯¸ï¼é»è®¤ä¸º 200
    fontSize: 200,
  },
});
```

## ç»å¾ç

```js
createTextImage({
  // å¿å¡«ï¼éç½®canvasåç´ ï¼æç»ä½ç»å¨å¶ä¸å®æ
  canvas: document.querySelector('canvas'),
  // å¯éï¼éç½®ä½ç»çææ¬ï¼é»è®¤ä¸º'6'
  replaceText: '6',
  // å¯éï¼éç½®ä½ç»åå¾ï¼è¯¥å¼è¶å¤§è¶ç¨çï¼é»è®¤ä¸º 10
  raduis: 10,
  // å¯éï¼éç½®æ¯å¦ç°åº¦åï¼è¥å¼å¯ç°åº¦ååä¼ä¸¢å¤±è²å½©ï¼é»è®¤ä¸º false
  isGray: false,
  // å¿å¡«ï¼éç½®ä½ç»åå®¹
  source: {
    // å¿å¡«ï¼éç½®ç»çå¾çè·¯å¾
    img: 'path',
    // éå¡«ï¼éç½®å¾çå®½åº¦ï¼é»è®¤ä¸ºå¾çèªèº«å®½åº¦
    width: 500,
    // éå¡«ï¼éç½®å¾çé«åº¦ï¼é»è®¤ä¸ºå¾çèªèº«é«åº¦
    height: 300,
  },
});
```

## ç»è§é¢

```js
createTextImage({
  // å¿å¡«ï¼éç½®canvasåç´ ï¼æç»ä½ç»å¨å¶ä¸å®æ
  canvas: document.querySelector('canvas'),
  // å¯éï¼éç½®ä½ç»çææ¬ï¼é»è®¤ä¸º'6'
  replaceText: '6',
  // å¯éï¼éç½®ä½ç»åå¾ï¼è¯¥å¼è¶å¤§è¶ç¨çï¼é»è®¤ä¸º 10
  raduis: 10,
  // å¯éï¼éç½®æ¯å¦ç°åº¦åï¼è¥å¼å¯ç°åº¦ååä¼ä¸¢å¤±è²å½©ï¼é»è®¤ä¸º false
  isGray: false,
  // å¿å¡«ï¼éç½®ä½ç»åå®¹
  source: {
    // å¿å¡«ï¼éç½®ç»çè§é¢è·¯å¾
    video: 'path',
    // éå¡«ï¼éç½®è§é¢å®½åº¦ï¼é»è®¤ä¸ºè§é¢èªèº«å®½åº¦
    width: 500,
    // éå¡«ï¼éç½®è§é¢é«åº¦ï¼é»è®¤ä¸ºè§é¢èªèº«é«åº¦
    height: 300,
  },
});
```
