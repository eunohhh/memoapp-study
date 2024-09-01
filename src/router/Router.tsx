import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import HomePageLoader from "@/pages/Home.loader";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            // /:id 없이 그냥 접근해도 Home 보이도록
            {
                path: "/",
                element: <Home />,
            },
            // /:memoId 로 접근시 로더 사용
            // :memoId 사용하여 로더 콜백함수 호출
            {
                path: "/:memoId",
                element: <Home />,
                loader: ({ params }) => HomePageLoader(params.memoId),
            },
        ],
    },
]);

export default router;
