import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./features/auth/authSlice";
import catalogReducer from "./features/catalog/catalogSlice";
import homeReducer from "./features/home/homeSlice";
import transactionReducer from "./features/transaction/transactionSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  catalog: catalogReducer,
  transaction: transactionReducer,
});

export default rootReducer;
