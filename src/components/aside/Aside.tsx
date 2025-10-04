import styled from "styled-components";
import { useMobileMenu } from "@/contexts/MobileMenuContext";
import Header from "./header";
import Ul from "./ul";

function Aside() {
	const { isMobileMenuOpen } = useMobileMenu();

	return (
		<StyledAside className={isMobileMenuOpen ? "mobile-open" : ""}>
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

    @media (max-width: 768px) {
        position: fixed;
        top: 0;
        left: 0;
        width: 280px;
        height: 100vh;
        background-color: rgb(255, 255, 255);
        z-index: 2001;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px;
        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out;
        border-right: none;
        border-radius: 0;

        &.mobile-open {
            transform: translateX(0);
        }
    }
`;
