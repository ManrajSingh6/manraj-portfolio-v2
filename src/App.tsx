import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ContentPane } from "./components/content-pane";
import { ContentSelector } from "./components/content-selector";
import { isValidRoute, ROUTES, type RouteType } from "./routes";

function App() {
  const location = useLocation();

  const activePath = location.pathname as RouteType;

  if (!isValidRoute(activePath)) {
    return <Navigate to={ROUTES.ABOUT} replace />;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.ABOUT} replace />} />
      <Route
        path={activePath}
        element={
          <div className="bg-deep-blue h-screen overflow-hidden flex items-center justify-center p-28 space-x-20 gap-20">
            <ContentPane activePath={activePath} />
            <ContentSelector activePath={activePath} />
          </div>
        }
      />
      <Route path="*" element={<Navigate to={ROUTES.ABOUT} replace />} />
    </Routes>
  );
}

export default App;
