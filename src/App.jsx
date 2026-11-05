import { useState } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import UsersMaster from "./pages/UsersMaster";
import RoleMaster from "./pages/RoleMaster";
import StateMaster from "./pages/StateMaster";
import DistrictMaster from "./pages/DistrictMaster";
import TownMaster from "./pages/TownMaster";

export default function App() {
  const [activePage, setActivePage] = useState("users");
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case "users":
        return <UsersMaster />;
      case "roles":
        return <RoleMaster />;
      case "states":
        return <StateMaster />;
      case "districts":
        return <DistrictMaster />;
      case "towns":
        return <TownMaster />;
      default:
        return <UsersMaster />;
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f7fb" }}>
      <CssBaseline />

      <Header onMenuClick={() => setMobileOpen(true)} />

      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minWidth: 0,
          p: { xs: 2, md: 4 },
        }}
      >
        <Toolbar />
        {renderPage()}
      </Box>
    </Box>
  );
}