import {
  Button,
  Stack,
  Box,
  Container,
  Typography,
  Toolbar,
  AppBar,
  Drawer,
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
      <AppBar position="sticky" sx={{ boxShadow: "none" }}>
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
            color="navBarBtn"
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
          >
            <MenuOutlinedIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="outlined"
        open={show}
        anchor="top"
        onClose={() => setShow(false)}
      >
        <Stack sx={{ padding: "30px  10px 5px 10px" }} spacing={1}>
          {navItems.map((item) => (
            <Button
              onClick={() => router.push(item.link)}
              key={item.id}
              color="navBarBtn"
              sx={{ fontSize: "18px", fontWeight: "900"}}
              startIcon={<item.icon />}
            >
              {item.title}
            </Button>
          ))}

          <Button
            onClick={() => setShow(false)}
            type="button"
            sx={{
              width: "5px",
              marginX:"auto",
              background: "#f1c903",
              "&:hover": {
                background: "black",
              },
            }}
          >
            <CloseIcon></CloseIcon>
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
