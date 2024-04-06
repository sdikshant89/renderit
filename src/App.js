import { useState, useEffect } from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import AppBarTop from "./Components/AppBarTop";
import Renderer from "./Components/RenderPaper";
import AppBarBottom from "./Components/AppBarBottom";
import DrawerContent from "./Components/ConfigDrawer";
import {
  CloudUpload as CloudUploadIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  Grid,
  TextField,
} from "@mui/material";

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

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const uploadDialog = (open, handleClose, handleFileInput, uploadFieldText) => {
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle sx={{ color: "#5DADE2" }} id="customized-dialog-title">
        Upload File to Render
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label={uploadFieldText}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              component="label"
              variant="contained"
              tabIndex={-1}
              sx={{ padding: "1vh 2vw 1vh 2vw" }}
              startIcon={<CloudUploadIcon />}
              onChange={handleFileInput}
            >
              Upload file
              <VisuallyHiddenInput type="file" multiple />
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

function App() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [open, setOpen] = useState(false);
  const [imageSet, setImageSet] = useState([]);
  const [uploadFieldText, setUploadFieldText] = useState("Upload File");

  useEffect(() => {
    if (imageSet.length > 0) {
      setUploadFieldText(imageSet.length + " file(s) uploaded");
    } else {
      setUploadFieldText("Upload File");
    }
  }, [imageSet]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDrawerView = () => {
    setShowDrawer(true);
  };

  const handleDrawerClose = () => {
    setShowDrawer(false);
  };

  // const addItem = (newItem) => {
  //   setImageSet([...imageSet, newItem]);
  // };

  function handleFileInput(e) {
    console.log(e.target.files);
    setImageSet(e.target.files);
  }

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
        <AppBarTop onButtonClick={handleDrawerView} />
        <Drawer open={showDrawer} onClose={handleDrawerClose}>
          <DrawerContent />
        </Drawer>
        <Renderer />
        {uploadDialog(open, handleClose, handleFileInput, uploadFieldText)}
        <AppBarBottom onButtonClick={handleClickOpen} />
      </Box>
    </ThemeProvider>
  );
}
export default App;
