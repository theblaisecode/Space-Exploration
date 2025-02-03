import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import { Home, Destination, Crew, Technology } from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/crew",
        element: <Crew />,
      },
      {
        path: "/technology",
        element: <Technology />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
