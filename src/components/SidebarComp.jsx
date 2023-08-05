import {
    Avatar,
  Box,
  Chip,
  Divider,
  FormControl,
  Input,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import {
  ArrowForwardIos,
  Assessment,
  BusinessCenterSharp,
  CalendarViewDay,
  Collections,
  DocumentScanner,
  Done,
  Event,
  House,
  LinkTwoTone,
  LockClock,
  Map,
  People,
  Receipt,
  Search,
} from "@mui/icons-material";

const SidebarComp = () => {
  return (
    <Stack spacing={2} sx={{ width: "15%", p: 2,borderRight:"1px solid #eeeeee" }}>
      <Stack direction={"row"} spacing={2}>
        <Paper variant="outlined" sx={{ p: 0.5 }}>
          <Box
            component={"img"}
            src={logo}
            alt="logo"
            sx={{ width: 30, height: 30 }}
          />
        </Paper>
        <Typography fontWeight={"bold"} textTransform={"uppercase"}>
          construction <Typography component={"span"}>service</Typography>
        </Typography>
      </Stack>
      <FormControl variant="outlined">
        <Input
          fullWidth
          placeholder="Search"
          disableUnderline
          sx={{
            border: "1px solid #eeeeee",
            bgcolor: "#f5f5f5",
            borderRadius: 2,
          }}
          startAdornment={<Search sx={{ color: "grey", mx: 1 }} />}
        />
      </FormControl>
      <List dense>
        <ListSubheader sx={{ textTransform: "uppercase" }}>
          Main Menu
        </ListSubheader>

        <ListItemButton>
          <ListItemIcon>
            <House />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <LockClock />
          </ListItemIcon>
          <ListItemText primary="Time tracking" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <CalendarViewDay />
          </ListItemIcon>
          <ListItemText primary="Task list" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <LinkTwoTone />
          </ListItemIcon>
          <ListItemText primary="Lead Pipeline" />
        </ListItemButton>
        <ListItemButton
          sx={{
            color: "green",
            bgcolor: "#c8e6c9",
            borderLeft: "3px solid green",
            borderRadius: 1,
          }}
        >
          <ListItemIcon>
            <DocumentScanner sx={{ color: "green" }} />
          </ListItemIcon>
          <ListItemText primary="Estimates" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Receipt />
          </ListItemIcon>
          <ListItemText primary="Invoices" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <BusinessCenterSharp />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Event />
          </ListItemIcon>
          <ListItemText primary="Schedule" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Collections />
          </ListItemIcon>
          <ListItemText primary="Photos & Files" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="People" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Map />
          </ListItemIcon>
          <ListItemText primary="Map" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Assessment />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>
      </List>
      <Divider/>
      <Stack direction={'row'} spacing={2}>
      <Avatar src={avatar} alt="avatar"/>
      <Typography p={1}>Jacob Jones</Typography>
      <ArrowForwardIos sx={{p:1.5,fontSize:14}} />
      </Stack>
      <Stack direction={'row'} justifyContent={'space-between'}>
      <Typography fontSize={'small'}>8:25 AM <Typography sx={{color:"gray"}}>11:25</Typography></Typography>
     <Chip size="small" label={<Done sx={{fontSize:14,color:'white'}} />}/>
      </Stack>
    </Stack>
  );
};

export default SidebarComp;
