import axios from "axios";
import * as constants from "./constants";

const updateDeatilPageData = (title, info) => ({
  type: constants.DEATIL_PAGE_DATA,
  title,
  info,
});

export const getDetailInfo = (id) => {
  return (dispatch) => {
    axios
      .get("/api/detail.json?id=" + id)
      .then((res) => {
        const result = res.data.content;
        dispatch(updateDeatilPageData(result.title, result.info));
      })
      .catch(() => {
        console.log("error");
      });
  };
};
