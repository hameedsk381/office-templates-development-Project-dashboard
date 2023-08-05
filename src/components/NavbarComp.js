import {
  Stack,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Paper,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";

import {
  Add,
  FilterList,
  KeyboardArrowDown,
  PlayArrow,
  Sort,
} from "@mui/icons-material";

export const IconSelect = ({ icon, text }) => (
  <Select
    value={0}
    startAdornment={<InputAdornment position="start">{icon}</InputAdornment>}
    sx={{
      px: "10px",
      height: "35px",
      border: "1px solid #e9e9e9c8",
      borderRadius: "8px",
      fontSize: ".8rem",
      alignItems: "center",
    }}
    disableUnderline
    variant="standard"
    IconComponent={() => <KeyboardArrowDown sx={{ fontSize: 15 }} />}
  >
    <MenuItem value={0}>{text}</MenuItem>
  </Select>
);
function ResponsiveAppBar() {

  return (
    <AppBar color="transparent" elevation={0} position="static">
      <Toolbar disableGutters>
        <Paper
          variant="elevation" elevation={0}
          sx={{
            width: "100%",
            justifyContent: "space-between",
            display: "flex",
            p: 1,borderBottom:"1px solid #eeeeee"
          }}
        >
          <Stack direction={"row"} spacing={3} justifyContent={"space-around"}>
            <Typography variant="h5">Estimates</Typography>
            <Button
              startIcon={
                <PlayArrow
                  fontSize="small"
                  sx={{
                    border: "1px solid green",
                    borderRadius: 10,
                    bgcolor: "green",
                    color: "white",
                  }}
                />
              }
              variant="text"
              size="small"
              color="success"
              sx={{ textTransform: "capitalize", bgcolor: "#e0f2f1", px: 1 }}
            >
              Tutorial Video
            </Button>
          </Stack>
          <Stack
            direction={"row"}
            spacing={2}
            justifyContent={"space-evenly"}
            px={2}
          >
            <IconSelect icon={<Sort />} text={"Sort By"} />
            <IconSelect icon={<FilterList />} text={"Filter estimates"} />

            <Button
              size="small"
              color="success"
              variant="contained"
              startIcon={<Add />}
            >
              Add Estimate
            </Button>
          </Stack>
        </Paper>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
