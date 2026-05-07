import { useState } from "react";
import Menu from "@mui/icons-material/Menu";
import MenuDrawer from "./components/Generic/MenuDrawer";
import { Outlet } from "react-router";
import { PoweringFleetViewerLogo, PageContainer } from "./views/style";

function App() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {drawerOpen ? (
        <MenuDrawer open={drawerOpen} onClose={setDrawerOpen} />
      ) : (
        <Menu
          style={{
            cursor: "pointer",
          }}
          onClick={() => setDrawerOpen(true)}
        />
      )}
      <PageContainer>
        <PoweringFleetViewerLogo>
          Powering SRL Fleet Viewer 2.0
        </PoweringFleetViewerLogo>
        <Outlet />
      </PageContainer>
    </div>
  );
}

export default App;
