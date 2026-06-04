import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

// Lazy load the page components (named exports)
const Home = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail").then(m => ({ default: m.ProjectDetail })));
const BlogAi = lazy(() => import("./pages/BlogAi").then(m => ({ default: m.BlogAi })));

// Simple loading indicator fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="project/:id"
            element={
              <Suspense fallback={<PageLoader />}>
                <ProjectDetail />
              </Suspense>
            }
          />
          <Route
            path="blog-ai"
            element={
              <Suspense fallback={<PageLoader />}>
                <BlogAi />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
