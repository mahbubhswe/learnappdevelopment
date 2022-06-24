import {
  Button,
  Stack,
  Box,
  Container,
  Typography,
  Toolbar,
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { navItems } from "./navItems";
import { useRouter } from "next/router";
export default function Navbar() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          boxShadow: "none",
          background: "black",
          borderBottom: "2px solid #53C3C7",
        }}
      >
        <Toolbar>
          <Typography
            flexGrow={{ xs: 1, sm: 1, md: 0.7, lg: 0.7, xl: 0.7 }}
          ></Typography>
          <Stack
            direction={"row"}
            spacing={1}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
              fontSize: "30px",
              fontWeight: "900",
            }}
          >
            {navItems.map((item) => (
              <Button
                onClick={() => router.push(item.link)}
                key={item.id}
                color="navBarBtn"
                sx={{ fontSize: "18px", fontWeight: "900" }}
                startIcon={<item.icon />}
              >
                {item.title}
              </Button>
            ))}
          </Stack>

          <Button
            onClick={() => setShow(true)}
            type="button"
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
              },
              height: "100%",
              lineHeight:"100%",
              border: "1px solid gray",
            }}
          >
            <MenuOutlinedIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="outlined" open={show} onClose={() => setShow(false)}>
        <Stack sx={{ padding: "20px", width: "100vw" }} spacing={1}>
          <Button
            onClick={() => setShow(false)}
            type="button"
            sx={{
              width: "5px",
              marginLeft: "auto",
              color: "black",
              border: "1px dotted #ccc",
              // "&:hover": {
              //   background: "black",
              // },
            }}
          >
            <CloseIcon></CloseIcon>
          </Button>
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item.id}
                color="navBarBtn"
                sx={{ fontSize: "18px", fontWeight: "900" }}
              >
                <ListItemButton onClick={() => router.push(item.link)}>
                  <ListItemIcon>{<item.icon />}</ListItemIcon>
                  <ListItemText> {item.title}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Drawer>
    </>
  );
}
