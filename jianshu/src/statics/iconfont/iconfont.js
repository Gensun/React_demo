import { createGlobalStyle } from "styled-components";

export const IconfontGlobalstyle = createGlobalStyle`
    @font-face {font-family: "iconfont";
      src: url('./iconfont.eot?t=1599110287351'); /* IE9 */
      src: url('./iconfont.eot?t=1599110287351#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
      url('./iconfont.woff?t=1599110287351') format('woff'),
      url('iconfont.ttf?t=1599110287351') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url('./iconfont.svg?t=1599110287351#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }`;
