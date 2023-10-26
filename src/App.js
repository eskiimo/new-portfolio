import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage";
// import ProjectsPage from "./pages/projectsPage";
// import BlogPage from "./pages/blog";
import Palestine from "./pages/pl";
import Nav from "./components/nav";
import LoadingSpinner from "./components/UIelements/LoadingSpinner";

const LazyProjects = lazy(() => import("./pages/projectsPage"));
const LazyBlog = lazy(() => import("./pages/blog"));

const App = () => {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pl" element={<Palestine />} />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LazyBlog />
            </Suspense>
          }
        />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LazyProjects />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
