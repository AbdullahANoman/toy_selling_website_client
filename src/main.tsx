import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <RouterProvider router={router}></RouterProvider>
    {/* </PersistGate> */}
    {/* <Toaster /> */}
    {/* </Provider> */}
  </StrictMode>
);
