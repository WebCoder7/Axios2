import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { loadState } from "../config/store";

export const AppLayout = () => {
  const user = loadState("user");
  if (!user) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};
