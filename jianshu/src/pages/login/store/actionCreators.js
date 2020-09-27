import axios from "axios";
import * as constants from "./constants";

const changeLogin = () => ({
  type: constants.LOGIN,
  value: true,
});

export const toLoginOut = () => ({
  type: constants.LOGOUT,
  value: false,
});

export const toLogin = (userName, password) => {
  return (dispatch) => {
    axios
      .get("/api/login.json?userName=" + userName + "&password=" + password)
      .then((res) => {
        const result = res.data.data;
        if (result === true) {
          dispatch(changeLogin());
        } else {
          alert("login fail");
        }
      });
  };
};
