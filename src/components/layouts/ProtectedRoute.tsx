// import { ReactNode } from "react";

// import { Navigate } from "react-router-dom";
// import { verifyToken } from "../../utils/verifyToken";
// import { useAppDispatch, useAppSelector } from "../../redux/hook";
// import { logOut } from "../../redux/features/auth/authSlice";
// import { selectCurrentToken } from "../../redux/store";

// type TProtectedRoute = {
//   children: ReactNode;
//   role?: string | undefined;
// };

// const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
//   const token = useAppSelector(selectCurrentToken);

//   let user : TProtectedRoute | undefined;

//   if (token) {
//     user = verifyToken(token) as TProtectedRoute;
//   }

//   const dispatch = useAppDispatch();

//   if (role !== undefined && role !== user?.role) {
//     dispatch(logOut());
//     return <Navigate to="/login" replace={true} />;
//   }
//   if (!token) {
//     return <Navigate to="/login" replace={true} />;
//   }

//   return children;
// };

// export default ProtectedRoute;
