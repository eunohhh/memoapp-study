import { MemoAction, MemoApp } from "@/types/d";
import { configureStore } from "@reduxjs/toolkit";
import memoReducer from "./reducers/memo.reducer";

const store = configureStore<
    {
        memoApp: MemoApp;
    },
    MemoAction
>({
    reducer: {
        memoApp: memoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
