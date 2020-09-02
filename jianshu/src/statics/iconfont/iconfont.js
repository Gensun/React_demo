import { createGlobalStyle } from "styled-components";

export const IconfontGlobalstyle = createGlobalStyle`
    @font-face {font-family: "iconfont";
      src: url('./iconfont.eot?t=1599017280131'); /* IE9 */
      src: url('./iconfont.eot?t=1599017280131#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
      url('./iconfont.woff?t=1599017280131') format('woff'),
      url('./iconfont.ttf?t=1599017280131') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url('./iconfont.svg?t=1599017280131#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }`;
