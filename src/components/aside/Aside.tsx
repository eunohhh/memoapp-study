import styled from "styled-components";
import Header from "./header";
import Ul from "./ul";

function Aside() {
    return (
        <StyledAside>
            <Header />
            <Ul />
        </StyledAside>
    );
}

export default Aside;

const StyledAside = styled.aside`
    height: 100%;
    border-right: 1px solid rgb(230, 230, 230);
    overflow-y: auto;
    display: grid;
    grid-template-columns: 1fr;
    align-content: flex-start;
`;
