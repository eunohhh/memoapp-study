import useMemoApp from "@/hooks/useMemoApp";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Ul() {
    const { memos, selected, selectMemo } = useMemoApp();
    const navigate = useNavigate();

    // li 클릭시 메모 선택하면서, 주소도 /memoId 로 변경
    const handleClick = (id: string) => () => {
        selectMemo(id);
        navigate(`/${id}`);
    };

    return (
        <StyledUl>
            {memos.map((memo) => {
                let h6String = "";
                // 메모의 길이가 14보다 높아지면 뒤에 생략하고 ... 처리
                if (memo.contents.length > 14) {
                    const sliced = memo.contents.substring(0, 15);
                    h6String = `${sliced}...`;
                } else {
                    h6String = memo.contents;
                }

                return (
                    <StyleLi
                        key={memo.id}
                        onClick={handleClick(memo.id)}
                        $isSelected={selected === memo.id}
                    >
                        <StyledH6>
                            {/* 콘텐츠가 아직 없으면 "새로운 메모" 출력 */}
                            {memo.contents === "" ? "새로운 메모" : h6String}
                        </StyledH6>
                        {/* 가공된 날짜 시간 정보 값에서 인덱스 13부터 표시 - 연월일 필요없으므로 */}
                        <StyledTime>{memo.time.slice(13)}</StyledTime>
                    </StyleLi>
                );
            })}
        </StyledUl>
    );
}

export default Ul;

const StyledUl = styled.ul`
    padding: 20px 12px;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    align-content: flex-start;
    row-gap: 8px;
    margin: 0px;
    overflow-x: hidden;
`;

const StyleLi = styled.li<{ $isSelected: boolean }>`
    height: 56px;
    border-radius: 4px;
    background-color: ${({ $isSelected }) =>
        $isSelected ? "rgb(255, 224, 127)" : "rgb(255, 255, 255)"};
    width: 100%;
    padding: 12px 24px;
    cursor: pointer;
`;

const StyledH6 = styled.h6`
    margin: 0px 0px 2px;
    font-size: 13px;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
`;

const StyledTime = styled.time`
    font-size: 12px;
    color: rgb(64, 64, 64);
`;
