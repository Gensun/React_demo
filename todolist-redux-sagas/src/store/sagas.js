import { takeEvery, put } from "redux-saga/effects";
import { initListAction } from "./actionCreators";
import { GET_INIT_LIST } from "./actionTypes";
import axios from "axios";

function* getLists() {
  try {
    const res = yield axios.get("/api/list.json");
    const action = initListAction(res.data);
    yield put(action);
  } catch (e) {
    console.log(e);
  }
}

function* todoSagas() {
  yield takeEvery(GET_INIT_LIST, getLists);
}

export default todoSagas;
