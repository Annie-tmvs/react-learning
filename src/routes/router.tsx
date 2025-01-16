// import { Route, Routes } from "react-router-dom";
// import BaseLayout from "../components/layouts/Base-layout/BaseLayout";
// import MainLayout from "../components/layouts/main-layout/MainLayout";

// export const RoutesManagement = () => {
//   return (
//     <Routes>
//       <Route element={<BaseLayout />}>
//       <Route index element={<MainLayout> HOME</MainLayout>}></Route>
//       <Route path="/orders" element={<MainLayout> ORDERS </MainLayout>}></Route>
//       </Route>
//     </Routes>
//   );
// };

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout/MainLayout";
import App from "../App";
import OverView from "../pages/OverView/OverView";

export const router = createBrowserRouter([
  {
    Component: App, // root layout route
    children: [
      {
        path: "/",
        Component: MainLayout,
        children: [
          {
            index: true,
            Component: OverView,
          },
          {
            path: "info-point",
            Component: OverView,
            children: [
              {
                path: "detail",
                Component: OverView,
              },
            ],
          },
        ],
      },
    ],
  },
]);
