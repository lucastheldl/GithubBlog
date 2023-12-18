import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/GithubBlog/" element={<Home />} />
        <Route path="/GithubBlog/posts/:id" element={<Post />} />
      </Route>
    </Routes>
  );
}
