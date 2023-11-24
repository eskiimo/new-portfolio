import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage";
// import ProjectsPage from "./pages/projectsPage";
// import BlogPage from "./pages/blog";
import Nav from "./components/nav";
import LoadingSpinner from "./components/UIelements/LoadingSpinner";

const LazyProjects = lazy(() => import("./pages/projectsPage"));
const LazyBlog = lazy(() => import("./pages/blog"));
const LazyContact = lazy(() => import("./pages/contact"));
const LazyDash = lazy(() => import("./pages/dashboard"));

const App = () => {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route
          path="/contact"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LazyContact />
            </Suspense>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LazyDash />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
