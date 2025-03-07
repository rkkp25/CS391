import HomePreview from "./components/HomePreview.tsx";
import Header from "./components/Header.tsx";
import EducationPreview from "./components/EducationPreview.tsx";
import { Route, Routes, createBrowserRouter, RouterProvider } from "react-router-dom";

export function Root() {
    return (
        <>
            <Header />
{/*            <Routes>
                <Route path={`/*`}
                       element={<HomePreview />}
                />
                <Route path={`education`}
                       element={<EducationPreview />}
                       />
            </Routes>*/}
        </>
    );
}

const router = createBrowserRouter(
    [{path:"*", Component:Root}]
);

export function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App;