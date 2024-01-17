import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { Suspense } from "react";
import AnimationLoader from "./AnimationLoader/AnimationLoader";


export const SharedLayout = () => {
  return (
    <>
      <Header/>
      <Suspense fallback={<AnimationLoader/>}>
          <Outlet />
      </Suspense>
    </>
  );
};