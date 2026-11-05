import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header({ onMenuClick }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: "#ffffff",
        color: "#222",
        boxShadow: 1,
      }}
    >
      <Toolbar>
        <IconButton onClick={onMenuClick} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" fontWeight="bold" sx={{ flexGrow: 1 }}>
          Employee Management System
        </Typography>

        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body2">Admin</Typography>
          <AccountCircleIcon color="primary" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}