# React Snapchat Pixel
[![npm](https://img.shields.io/npm/dm/react-snapchat-pixel.svg)](https://www.npmjs.com/package/react-snapchat-pixel)

> React JS wrapper for [Snapchat's Pixel](https://businesshelp.snapchat.com/en-US/article/snap-pixel-about)

Its more or less a copy of [react-facebook-pixel](https://github.com/zsajjad/react-facebook-pixel) by [Zain Sajjad](https://github.com/zsajjad) but adapted for Snapchat's pixel.

## Install
```
npm install react-snapchat-pixel

```
or
```
yarn add react-snapchat-pixel

```

## How to use
```js
import ReactPixel from 'react-snapchat-pixel';


const userIdentification = { user_email: 'some@email.com' }; // optional
const options = {
    debug: false, 		// enable logs
};
ReactPixel.init('yourPixelIdGoesHere', userIdentification, options);

ReactPixel.pageView(); 					// For tracking page view
ReactPixel.track( event, data ) 		// For tracking default events, more info about events and data https://businesshelp.snapchat.com/en-US/article/purchase-event
```
**if you're bundling in CI**
```js
  ...
  componentDidMount() {
    const ReactPixel =  require('react-snapchat-pixel');
    ReactPixel.init('yourPixelIdGoesHere');
  }
  ...
```
otherwise CI will complain there's no `window`.


## Dev Server
```
npm run start

```
Default dev server runs at localhost:8080 in browser.
You can set IP and PORT in webpack.config.dev.js

## Production Bundle
```
npm run bundle
```
