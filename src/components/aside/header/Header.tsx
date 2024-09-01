import useMemoApp from "@/hooks/useMemoApp";
import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Header() {
    const navigate = useNavigate();
    const { memos, selected, createMemo, deleteMemo, selectMemo } =
        useMemoApp();
    // 새로 추가하기 했을때 0번 배열 선택용
    const first = memos[0];
    // 이상한 값으로 접근했다면 "" 빈스트링일 수 있음
    const id: string = useLoaderData() as string;

    // 추가하기 버튼 클릭시 빈 스트링으로 메모 create
    const handleAddButtonClick = () => {
        createMemo("");
    };

    // 삭제 버튼 클릭시 현재 메모 삭제
    const handleDeleteButtonClick = () => {
        deleteMemo(selected);
    };

    // 메모 추가되어서 배열 길이 바뀔때마다 === first 가 바뀔때 마다
    // 주소에 추가된 메모의 아이디 값 적용
    useEffect(() => {
        navigate(`/${first.id}`);
    }, [first, navigate]);

    // if(id) 여기서, 로더에서 반환한 "" 빈스트링은 falsy 로 취급되므로,
    // id 가 정확할때만 selectMemo 함
    useEffect(() => {
        if (id) selectMemo(id);
    }, [id, selectMemo]);

    return (
        <StyledHeader>
            <StyledButton onClick={handleAddButtonClick}>
                새 메모 작성하기
            </StyledButton>
            <StyledButton onClick={handleDeleteButtonClick}>삭제</StyledButton>
        </StyledHeader>
    );
}

export default Header;

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(230, 230, 230);
    padding: 12px 16px;
    position: sticky;
    top: 0px;
    background-color: rgb(255, 255, 255);
    border-top-left-radius: 10px;
`;

const StyledButton = styled.button`
    all: unset;
    font-size: 13px;
    font-weight: 500;
    background-color: rgb(255, 255, 255);
    color: rgb(128, 128, 128);
    transition: all 120ms ease 0s;
    padding: 4px 8px;

    &:hover {
        color: rgb(18, 18, 18);
        font-weight: 600;
        cursor: pointer;
    }
`;
