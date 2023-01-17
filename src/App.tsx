import { embedDashboard } from "@superset-ui/embedded-sdk";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    embedDashboard({
      id: "this just needs to compile",
      supersetDomain: "this just needs to compile",
      mountPoint: window.document.getElementById("report-container")!,
      fetchGuestToken: async () => "this just needs to compile",
      dashboardUiConfig: { hideTitle: false },
    });
  }, []);

  return <div id="report-container"></div>;
};

export default App;
