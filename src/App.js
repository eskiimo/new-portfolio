import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadingSpinner from "./components/UIelements/LoadingSpinner";
import "./App.css";
import Main from "./pages/main";

const LazyDash = lazy(() => import("./pages/dashboard"));

const App = () => {
  return (
    <Router className="menu">
      <Routes>
        <Route path="/" element={<Main />} />
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
