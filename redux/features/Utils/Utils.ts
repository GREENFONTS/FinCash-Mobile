import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../../store";
import UserService from "../../../Utils/axios/apis/User";
import {
  Auth,
  ChangePasswordData,
  LoginData,
  UserModel,
} from "../../../models/auth";
import { ServiceKeys } from "../../../models/serviceKeys";

const initialState = {
 drawerState : false
};



const UtilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    setDrawerState : (state, action) => {
        state.drawerState = action.payload
    },
  },
});

export const {
 setDrawerState
} = UtilSlice.actions;

export default UtilSlice.reducer;
