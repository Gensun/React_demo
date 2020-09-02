import styled from "styled-components";
import logoPic from "../../statics/img/logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  width: 100%;
`;

export const Logo = styled.a.attrs({
  href: "/",
})`
  position: absolute;
  display: block;
  height: 100%;
  width: 100px;
  background: url(${logoPic});
  left: 0;
  top: 0;
  background-size: contain;
  box-sizing: border-box;
`;

export const Nav = styled.div`
  width: 60%;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 58px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    border-radius: 15px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    &.focused {
      background-color: #969696 !important;
    }
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "搜索",
})`
  width: 160px;
  height: 38px;
  padding: 0 20px;
  margin-top: 10px;
  margin-left: 20px;
  padding: 0 40px 0 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  box-sizing: border-box;
  background: #eee;
  color: #666;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.blured {
    width: 160px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const SearchArea = styled.div`
  position: absolute;
  width: 200px;
  left: 0;
  top: 58px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;
export const SearchTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  line-height: 20px;
  margin-right: 10px;
  line-height: 14px;
  color: #969696;
`;
export const SearchSwitch = styled.span`
  float: right;
  font-size: 13px;
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  border: 1px solid #ddd;
  border-radius: 3px;
  float: left;
  color: #333;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  display: block;
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 58px;
`;

export const Button = styled.div`
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid #ec6149;
  text-align: center;
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  line-height: 38px;
  font-size: 14px;
  padding: 0 20px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;
