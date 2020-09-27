import styled from "styled-components";

export const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 50px;
  background: #eee;
  z-index:0;
`;

export const LoginBox = styled.div`
  width: 400px;
  height: 200px;
  margin: 100px auto;
  padding-top: 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  color: #777;
  display: block;
  line-height: 25px;
  margin: 10px auto;
  height: 30px;
  padding: 0 20px;
  display: block;
`;

export const Button = styled.div`
  color: #fff;
  background: #3194d0;
  border-radius: 15px;
  height: 40px;
  line-height: 40px;
  margin: 20px auto;
  text-align: center;
  width: 50%;
  font-size: 14px;
`;
