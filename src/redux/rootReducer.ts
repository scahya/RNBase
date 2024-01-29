import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./features/auth/authSlice";
import commonReducer from "./features/common/commonSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
});

export default rootReducer;
