import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import authReducer from "./features/Users/auth";
import UtilReducer from "./features/Utils/Utils"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    utils: UtilReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const dispatch = store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
