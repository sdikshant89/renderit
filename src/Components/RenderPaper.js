import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Renderer() {
  return (
    <Box sx={{ padding: "1vh 0.75vw 1vh 0.75vw" }}>
      <Grid container>
        <Grid item xs={12}>
          <Paper
            elevation={4}
            sx={{
              minWidth: "90vw",
              minHeight: "80.5vh",
            }}
          ></Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
