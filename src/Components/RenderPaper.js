import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Renderer() {
  return (
    <Box sx={{ padding: "1vh 1vw 1vh 1vw" }}>
      <Grid container>
        <Grid item xs={12}>
          <Paper
            elevation={4}
            sx={{
              minWidth: "90vw",
              minHeight: "84vh",
            }}
          >
            ABCD
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
