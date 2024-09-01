import {
    ActionType,
    CREATE,
    DELETE,
    Memo,
    MemoApp,
    SELECT,
    UPDATE,
} from "@/types/d";
import getTime from "@/utils/getTime";
import { UnknownAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialUuid = uuid();

const initialState: MemoApp = {
    selected: initialUuid,
    memos: [
        {
            id: initialUuid,
            contents: "",
            time: getTime(),
        },
    ],
};
// 흐미 이버전 타입 왜이렇게 어려울까요 ㅠㅠ
// 공장 이므로 함수
const memoReducer = (
    prevState = initialState,
    action: UnknownAction // MemoActionTypes
): MemoApp => {
    switch (action.type as ActionType) {
        case SELECT: {
            return {
                selected: action.payload as string,
                memos: prevState.memos,
            };
        }
        case CREATE: {
            const tempUuid = uuid();
            const newMemo: Memo = {
                id: tempUuid,
                contents: action.payload as string,
                time: getTime(),
            };
            return {
                selected: tempUuid,
                memos: [newMemo, ...prevState.memos],
            };
        }
        case DELETE: {
            const filtered = prevState.memos.filter(
                (memo) => memo.id !== (action.payload as string)
            );
            if (filtered.length === 0) {
                alert("한개 이상의 메모는 남겨둬야 합니다!");
                return prevState;
            } else {
                return {
                    selected: filtered[0].id,
                    memos: filtered,
                };
            }
        }
        case UPDATE: {
            const mapped = prevState.memos.map<Memo>((memo: Memo) => {
                if (memo.id === prevState.selected) {
                    return {
                        ...memo,
                        contents: action.payload as string,
                        time: getTime(),
                    };
                } else {
                    return memo;
                }
            });
            return {
                selected: prevState.selected,
                memos: mapped,
            };
        }
        default:
            return prevState;
    }
};

export default memoReducer;
