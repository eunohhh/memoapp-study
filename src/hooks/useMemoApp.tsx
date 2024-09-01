import { AppDispatch, RootState } from "@/redux/store";
import { CREATE, DELETE, SELECT, UPDATE } from "@/types/d";
import { useDispatch, useSelector } from "react-redux";

// 얘는 커스텀 훅이고
function useMemoApp() {
    const dispatch = useDispatch<AppDispatch>();
    const memos = useSelector((state: RootState) => state.memoApp.memos);
    const selected = useSelector((state: RootState) => state.memoApp.selected);

    // 얘네들이 액션크리에이터
    const selectMemo = (memoId: string) =>
        dispatch({ type: SELECT, payload: memoId });
    const createMemo = (text: string) =>
        dispatch({ type: CREATE, payload: text });
    const deleteMemo = (memoId: string) =>
        dispatch({ type: DELETE, payload: memoId });
    const updateMemo = (memo: string) =>
        dispatch({ type: UPDATE, payload: memo });

    return {
        memos,
        selected,
        selectMemo,
        createMemo,
        deleteMemo,
        updateMemo,
    };
}

export default useMemoApp;
