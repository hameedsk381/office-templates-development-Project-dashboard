import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Chip,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListSubheader,
    Stack,
    Typography,
  } from "@mui/material";
  import React from "react";
  import MoreVertIcon from "@mui/icons-material/MoreVert";
  const CommonCard = ({color}) => {
    return (
      <Card sx={{ m: 2, borderLeft: "5px solid green" }}>
        <CardHeader
          title={
            <Typography>
              Estimate 008{" "}
              <Chip
                size="small"
                color={color}
                sx={{ borderRadius: 1, mx: 2 }}
                label="Overdue"
              />
            </Typography>
          }
          subheader="Goodie wilson"
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Box px={1}>
            <Typography fontSize={12}>
              Estimate Total{" "}
              <Typography fontSize={12} fontWeight={"bold"}>
                $2718.03
              </Typography>
            </Typography>
            <Stack my={1} direction={"row"} spacing={3}>
              <Typography fontSize={12}>
                Estimate Total{" "}
                <Typography fontSize={12} fontWeight={"bold"}>
                  $2718.03
                </Typography>
              </Typography>
              <Typography fontSize={12}>
                Estimate Total{" "}
                <Typography fontSize={12} fontWeight={"bold"}>
                  $2718.03
                </Typography>
              </Typography>
            </Stack>
          </Box>
          <List dense sx={{ bgcolor: "#f5f5f5" }} p={1}>
            <ListSubheader sx={{ bgcolor: "transparent" }}>
              <Stack direction={"row"} justifyContent={"space-between"} p={1}>
                <Typography fontSize={"small"}>
                  Estimate
                  <Typography fontSize={"small"}>Estimate 10123</Typography>
                </Typography>
                <Typography fontSize={"small"}>
                  Estimate
                  <Typography fontSize={"small"}>Estimate 10123</Typography>
                </Typography>
              </Stack>
            </ListSubheader>
            <Divider />
            {[1, 2].map((item) => (
              <ListItem
                key={item}
                dense
                sx={{
                  "&:nth-child(odd)": {
                    backgroundColor: "#eeeeee", // change background color for odd index items
                  },
                }}
              >
                <ListItemText primary="demolition and disposal" />
                <ListItemText primary="$2.47k" />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    );
  };
  
  export default CommonCard;
  