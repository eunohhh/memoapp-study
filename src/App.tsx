import { RouterProvider } from "react-router-dom";
import { MobileMenuProvider } from "./contexts/MobileMenuContext";
import GlobalStyle from "./globalStyles";
import router from "./router/Router";

function App() {
	return (
		<MobileMenuProvider>
			<GlobalStyle />
			<RouterProvider router={router} />
		</MobileMenuProvider>
	);
}

export default App;
