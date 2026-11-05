import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MapIcon from "@mui/icons-material/Map";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

export const drawerWidth = 250;

const menuItems = [
  { id: "users", label: "Users Master", icon: <PeopleIcon /> },
  { id: "roles", label: "Role Master", icon: <AdminPanelSettingsIcon /> },
  { id: "states", label: "State Master", icon: <MapIcon /> },
  { id: "districts", label: "District Master", icon: <LocationCityIcon /> },
  { id: "towns", label: "Town Master", icon: <HomeWorkIcon /> },
];

function SidebarContent({ activePage, onNavigate }) {
  return (
    <>
      <Toolbar>
        <Typography variant="h6" fontWeight="bold" color="primary">
          Admin Panel
        </Typography>
      </Toolbar>

      <Divider />

      <List sx={{ px: 1 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.id}
            selected={activePage === item.id}
            onClick={() => onNavigate(item.id)}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              "&.Mui-selected": {
                bgcolor: "#e3f2fd",
                color: "primary.main",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 40,
                color: activePage === item.id ? "primary.main" : "inherit",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </>
  );
}

export default function Sidebar({
  activePage,
  onNavigate,
  mobileOpen,
  onClose,
}) {
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <SidebarContent
          activePage={activePage}
          onNavigate={onNavigate}
        />
      </Drawer>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        <SidebarContent
          activePage={activePage}
          onNavigate={onNavigate}
        />
      </Drawer>
    </>
  );
}