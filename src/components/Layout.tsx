import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Layout() {
    return (
        <StyledMain>
            <Outlet />
        </StyledMain>
    );
}

export default Layout;

const StyledMain = styled.main`
    display: grid;
    grid-template-columns: 240px 1fr;
    background-color: rgb(255, 255, 255);
    margin: 0px auto;
    height: 500px;
    width: 100%;
    max-width: 1024px;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
`;
