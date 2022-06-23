import { Divider, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  const yaer = new Date();
  const currentYear = yaer.getFullYear();
  return (
    <div style={{ marginTop: "200px", backgroundColor: "#EDEDED" }}>
      <Divider></Divider>
      <Typography
        sx={{ textAlign: "center", paddingY: "20px" }}
      >{`© Programming with Mahbub ${currentYear}`}</Typography>
    </div>
  );
}
