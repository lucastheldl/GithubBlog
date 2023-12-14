import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";

export function Router() {
  return (
    <Routes>
      <Route path="/GithubBlog/" element={<Home />} />
      <Route path="/GithubBlog/posts/:id" element={<Post />} />
    </Routes>
  );
}
