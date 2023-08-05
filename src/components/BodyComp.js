import {
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,

  FormControl,
  Grid,

  Input,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import NavbarComp, { IconSelect } from "./NavbarComp";
import { Circle, Grid4x4, ListAlt, Search } from "@mui/icons-material";
import CommonCard from "./commonCard";

function BodyComp() {
  return (
    <Box sx={{ width: "85%" }}>
      <NavbarComp />
      <Box p={3}>
        <Stack direction={"row"}>
          <Box sx={{ px: 2 }}>
            <Typography>
              Total estimates{" "}
              <Chip
                variant="contained"
                size="small"
                sx={{ mx: 2 }}
                color="success"
                label={10}
              />
            </Typography>

            <Stack direction={"row"} spacing={3} py={2}>
              <Card sx={{ width: 120, height: 90 }}>
                <CardContent sx={{ fontWeight: "bold" }}>$22.47k</CardContent>
                <CardActions sx={{ color: "green", bgcolor: "#f5f5f5" }}>
                  <Circle sx={{ mr: 1 }} color="success" fontSize="small" />{" "}
                  <Typography sx={{ fontSize: 10 }}>ACCEPTED (2)</Typography>
                </CardActions>
              </Card>
              <Card sx={{ width: 120, height: 90 }}>
                <CardContent sx={{ fontWeight: "bold" }}>$22.47k</CardContent>
                <CardActions sx={{ color: "green", bgcolor: "#f5f5f5" }}>
                  <Circle sx={{ mr: 1 }} color="info" fontSize="small" />{" "}
                  <Typography sx={{ fontSize: 10 }}>ACCEPTED (2)</Typography>
                </CardActions>
              </Card>
              <Card sx={{ width: 120, height: 90 }}>
                <CardContent sx={{ fontWeight: "bold" }}>$22.47k</CardContent>
                <CardActions sx={{ color: "green", bgcolor: "#f5f5f5" }}>
                  <Circle sx={{ mr: 1 }} color="primary" fontSize="small" />{" "}
                  <Typography sx={{ fontSize: 10 }}>ACCEPTED (2)</Typography>
                </CardActions>
              </Card>
              <Card sx={{ width: 120, height: 90 }}>
                <CardContent sx={{ fontWeight: "bold" }}>$22.47k</CardContent>
                <CardActions sx={{ color: "green", bgcolor: "#f5f5f5" }}>
                  <Circle sx={{ mr: 1 }} color="warning" fontSize="small" />{" "}
                  <Typography sx={{ fontSize: 10 }}>ACCEPTED (2)</Typography>
                </CardActions>
              </Card>
            </Stack>
          </Box>
          <Box sx={{ px: 2 }}>
            <Typography>
              Total estimates{" "}
              <Chip
                variant="contained"
                size="small"
                sx={{ mx: 2 }}
                color="success"
                label={10}
              />
            </Typography>

            <Stack direction={"row"} spacing={3} py={2}>
            <Card sx={{ width: 120, height: 90 }}>
            <CardContent sx={{ fontWeight: "bold" }}>$22.47k</CardContent>
            <CardActions sx={{ color: "green", bgcolor: "#f5f5f5" }}>
              <Circle sx={{ mr: 1 }} color="success" fontSize="small" />{" "}
              <Typography sx={{ fontSize: 10 }}>ACCEPTED (2)</Typography>
            </CardActions>
          </Card>
          <Card sx={{ width: 120, height: 90 }}>
            <CardContent sx={{ fontWeight: "bold" }}>$22.47k</CardContent>
            <CardActions sx={{ color: "green", bgcolor: "#f5f5f5" }}>
              <Circle sx={{ mr: 1 }} color="info" fontSize="small" />{" "}
              <Typography sx={{ fontSize: 10 }}>ACCEPTED (2)</Typography>
            </CardActions>
          </Card>
          <Card sx={{ width: 120, height: 90 }}>
            <CardContent sx={{ fontWeight: "bold" }}>$22.47k</CardContent>
            <CardActions sx={{ color: "green", bgcolor: "#f5f5f5" }}>
              <Circle sx={{ mr: 1 }} color="primary" fontSize="small" />{" "}
              <Typography sx={{ fontSize: 10 }}>ACCEPTED (2)</Typography>
            </CardActions>
          </Card>
          <Card sx={{ width: 120, height: 90 }}>
            <CardContent sx={{ fontWeight: "bold" }}>$22.47k</CardContent>
            <CardActions sx={{ color: "green", bgcolor: "#f5f5f5" }}>
              <Circle sx={{ mr: 1 }} color="warning" fontSize="small" />{" "}
              <Typography sx={{ fontSize: 10 }}>ACCEPTED (2)</Typography>
            </CardActions>
          </Card>
            </Stack>
          </Box>
        </Stack>
        <Stack direction={"row"} spacing={3} mx={2}>
          <FormControl variant="outlined" sx={{ width: 400 }}>
            <Input
              fullWidth
              placeholder="Search estimate"
              disableUnderline
              sx={{
                border: "1px solid #eeeeee",

                borderRadius: 2,
              }}
              startAdornment={<Search sx={{ color: "grey", mx: 1 }} />}
            />
          </FormControl>
          <IconSelect text={"Status"} />
          <IconSelect icon={"custom"} text={"Feb17-Feb21,2022"} />
          <ToggleButtonGroup
            size="small"
            exclusive
            style={{ marginLeft: "200px", height: 35 }}
          >
            <ToggleButton value="justify" key="justify">
              <Stack
                direction={"row"}
                component={Paper}
                variant="outlined"
                px={0.5}
              >
                <ListAlt sx={{ fontSize: 12, p: 0.7 }} />
                <Typography textTransform={"capitalize"}>List</Typography>
              </Stack>
            </ToggleButton>
            <ToggleButton value="justify" key="justify">
              <Stack
                direction={"row"}
                component={Paper}
                variant="outlined"
                bgcolor={"#4caf50"}
                px={0.5}
              >
                <Grid4x4 sx={{ fontSize: 12, p: 0.5 }} />
                <Typography fontSize={"small"} textTransform={"capitalize"}>
                  Grid
                </Typography>
              </Stack>
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Grid container px={3}>
          {["success","info","warning","error","primary"].map((item) => (
            <Grid key={item} item xs={4}>
            <CommonCard color={item}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default BodyComp;
