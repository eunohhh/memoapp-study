import useMemoApp from "@/hooks/useMemoApp";
import getTime from "@/utils/getTime";
import { debounce } from "lodash";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Article() {
    const { memos, selected, updateMemo } = useMemoApp();

    const [text, setText] = useState("");
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

    // ref 사용하여 debounce wait 밀리세컨드 체크가 중복되지 않도록 처리
    // 200 밀리세컨드 뒤에 적용? 리렌더링 막으려고?
    const debouncedUpdateMemo = useRef<(input: string) => void>(
        debounce((input: string) => {
            updateMemo(input);
        }, 200)
    ).current;

    // 제어컴포넌트 제어를 위해 setText 하고 업데이트메모 호출
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const input = e.target.value;
        setText(input);
        debouncedUpdateMemo(input);
    };

    // selected 가 변경되면(Ul컴포넌트 에서) 선택된 메모 찾아서
    // text 값 바꿔서 제어컴포넌트가 선택된 내용을 렌더링 할 수 있게 함
    useEffect(() => {
        const selectedMemo = memos.find((memo) => memo.id === selected);
        if (selectedMemo) {
            setText(selectedMemo.contents);
        }
    }, [memos, selected]);

    // 처음에 textArea 에 포커스
    useEffect(() => {
        if (textAreaRef.current) textAreaRef.current.focus();
    }, []);

    return (
        <StyledArticle>
            <StyledSpan>{getTime()}</StyledSpan>
            <StyledTextArea
                ref={textAreaRef}
                onChange={handleChange}
                value={text}
            />
        </StyledArticle>
    );
}

export default Article;

const StyledArticle = styled.article`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
`;

const StyledSpan = styled.span`
    color: rgb(128, 128, 128);
    font-size: 10px;
    margin: 0px auto 24px;
`;

const StyledTextArea = styled.textarea`
    all: unset;
    flex-grow: 1;
    font-size: 15px;
    line-height: 1.66;
`;
