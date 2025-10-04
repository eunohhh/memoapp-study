import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useMobileMenu } from "@/contexts/MobileMenuContext";

function Layout() {
	const { isMobileMenuOpen, closeMobileMenu } = useMobileMenu();

	return (
		<>
			{isMobileMenuOpen && <MobileOverlay onClick={closeMobileMenu} />}
			<StyledMain>
				<Outlet />
			</StyledMain>
		</>
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

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        height: 100vh;
        max-width: 100%;
        border-radius: 0;
        border: none;
        box-shadow: none;
        margin: 0;
    }
`;

const MobileOverlay = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
    }
`;
