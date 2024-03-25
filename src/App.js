import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBarTop from "./Components/AppBarTop";
import Renderer from "./Components/RenderPaper";
import AppBarBottom from "./Components/AppBarBottom";
import "./App.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5DADE2",
    },
  },
  typography: {
    fontFamily: ["Gill Sans", "Nunito", "sans-serif"].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          minWidth: "100vw",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          backgroundColor: "#111418",
        }}
      >
        <AppBarTop />
        <Renderer />
        <AppBarBottom />
      </Box>
    </ThemeProvider>
  );
}
export default App;
