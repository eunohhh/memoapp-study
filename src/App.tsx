import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import router from "./router/Router";

function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
