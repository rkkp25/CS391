import { Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutMe from "./components/AboutMe.tsx";
import Header from "./components/Header.tsx";

import ArtworksListContent from './components/ArtworksListContent.tsx';
import ArtworkContent from './components/ArtworkContent.tsx';

export function Root() {
    return(
        <>
            <Header />
            <Routes>
                <Route path={`/`} element={<ArtworksListContent />}/>
                <Route path={`/about`} element={<AboutMe />}/>
                <Route path={`/artwork/:id`} element={<ArtworkContent/>}/>

            </Routes>
        </>
    );
}

const router = createBrowserRouter(
    [{path:"*", Component:Root}]
);

export function App() {

  return (
    <>
        <RouterProvider router={router}/>

    </>
  )
}

export default App
