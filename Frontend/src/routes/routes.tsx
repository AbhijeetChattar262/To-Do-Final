import React,{Suspense} from "react";
import { Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthGuard from "../components/AuthGuard";
import NotFound from "../components/common/PageNotFound/NotFound";
import Spinner from "../components/common/Spinner/Spinner";
import ErrorBoundary from "../components/common/ErrorBoundary/ErrorBoundary";

const Todos= React.lazy(() => import("../pages/Todos"));
const routes = (
  <>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route
      path="/todos"
      element={
        <AuthGuard>
        <ErrorBoundary >
        <Suspense fallback={<Spinner />}>
          <Todos />
        </Suspense>
        </ErrorBoundary>
        </AuthGuard>
      }
    />
    <Route path="/" element={<Login />} />
    <Route path="*" element={<NotFound />} />
  </>
);

export default routes;
