import { useLocation } from "react-router-dom";
import { ContentPane } from "./components/content-pane";
import { ContentSelector } from "./components/content-selector";
import type { ROUTES } from "./routes";

function App() {
  const location = useLocation();

  const activePath = location.pathname as (typeof ROUTES)[keyof typeof ROUTES];
  return (
    <div className="bg-deep-blue h-screen overflow-hidden flex items-center justify-center p-28 space-x-20 gap-20">
      <ContentPane />
      <ContentSelector activePath={activePath} />
    </div>
  );
}

export default App;
