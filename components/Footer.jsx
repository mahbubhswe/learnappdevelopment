import { Divider, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  const yaer = new Date();
  const currentYear = yaer.getFullYear();
  return (
    <div style={{ marginTop: "200px", backgroundColor: "#EDEDED" }}>
      <Divider>hi</Divider>
      <Typography
        sx={{ textAlign: "center", paddingY: "20px" }}
      >{`© Learn App Development ${currentYear}`}</Typography>
    </div>
  );
}
