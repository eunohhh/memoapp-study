import store from "@/redux/store";

// memoId 는 주소 값
export default function HomePageLoader(memoId: string | undefined): string {
    // 컴포넌트가 아니어서 useSelector 못 쓰는데
    // redux store 에서 state 불러올 때 아래와 같이 하면 됨
    const state = store.getState();
    const memos = state.memoApp.memos;

    let id = "";

    const filtered = memos.filter((memo) => memo.id === memoId);

    // memoId 주소에 memoId 에 해당하지 않는 이상한 값 들어올 때를 대비
    // 만약 이상한 값이면(filtered.length 가 0이면) 반환 아이디는 빈스트링
    if (filtered.length === 0) {
        id = "";
    } else {
        id = filtered[0].id;
    }

    return id;
}
