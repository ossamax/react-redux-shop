import { createStore } from "redux";
import  reducers  from "../redux/reducers/index";

const store = createStore(
  reducers,
  {},
);

export default store;
