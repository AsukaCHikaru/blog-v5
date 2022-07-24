import React from "react";
import { Route, Routes } from "react-router-dom";

import { PostDetailPage } from "./pages/PostDetailPage";
import { PostListPage } from "./pages/PostListPage";

export const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/post/:pathname" element={<PostDetailPage />} />
      </Routes>
    </>
  );
};
