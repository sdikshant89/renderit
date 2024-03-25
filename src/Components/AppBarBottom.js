import { Box, Fab, Toolbar, IconButton, AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Menu as MenuIcon,
  Add as AddIcon,
  Search as SearchIcon,
  MoreVert as MoreIcon,
} from "@mui/icons-material";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

export default function AppBarBottom() {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        top: "auto",
        bottom: 0,
      }}
    >
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <StyledFab
          color="secondary"
          aria-label="add"
          sx={{ transform: "scale(1.4)" }}
        >
          <AddIcon />
        </StyledFab>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit">
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
