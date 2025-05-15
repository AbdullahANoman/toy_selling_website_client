import HomeLayout from "@/components/layouts/HomeLayout";
import About from "@/pages/About";
import AllToys from "@/pages/AllToys";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-toys",
        element: <AllToys />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    //   },
    //   {
    //     path: "/login",
    //     element: <Login />,
    //   },
    //   {
    //     path: "/profile",
    //     element: <Profile />,
    //   },
    //   {
    //     path: "/change-password",
    //     element: <ChangePassword />,
    //   },
    //   {
    //     path: "/admin",
    //     element: (
    //       <ProtectedRoute role="admin">
    //         <App />
    //       </ProtectedRoute>
    //     ),
    //     children: routesGenerator(adminPaths),
    //   },
    //   {
    //     path: "/faculty",
    //     element: (
    //       <ProtectedRoute role="faculty">
    //         <App />
    //       </ProtectedRoute>
    //     ),
    //     children: routesGenerator(facultyPaths),
    //   },
    //   {
    //     path: "/student",
    //     element: (
    //       <ProtectedRoute role="student">
    //         <App />
    //       </ProtectedRoute>
    //     ),
    //     children: routesGenerator(studentPaths),
    //   },
  },
]);
