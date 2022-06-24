import {
  Alert,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Layout from "../../../components/Layout";
import Link from "next/link";
export default function index() {
  return (
    <Layout pageTitle={"Course Details"}>
      <Container sx={{ marginY: "50px" }}>
        <Link href={"https://gedgetshop.vercel.app/"} passHref>
          <a style={{ color:"green" }}>
            এই কোর্স এর মধ্যদিয়ে আমরা যেমন প্রজেক্ট করব
          </a>
        </Link>
        <Stack spacing={1}>
          <Paper variant="outlined" sx={{ padding: "20px" }}>
            <Typography
              variant="h4"
              align="center"
              sx={{ fontWeight: 700, padding: "3px" }}
            >
              Minimum Requirement (অপনার যা যানা থাকতে হবে)
            </Typography>
            <Divider></Divider>
            <List>
              <ListItem>
                <ListItemText>HTML</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>CSS</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>JavaScript</ListItemText>
              </ListItem>
            </List>
          </Paper>
          <Paper variant="outlined" sx={{ padding: "20px" }}>
            <Typography
              variant="h4"
              align="center"
              sx={{ fontWeight: 700, padding: "3px" }}
            >
              You will learn(যা শিখানো হবে)
            </Typography>
            <Divider></Divider>
            <List>
              <ListItem>
                <ListItemText>Material UI</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Node JS</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Express JS</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>React JS</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Next Js</ListItemText>
              </ListItem>
            </List>
          </Paper>
          <Paper variant="outlined" sx={{ padding: "20px" }}>
            <Typography
              variant="h4"
              align="center"
              sx={{ fontWeight: 700, padding: "3px" }}
            >
              Technology will used(সব শেষ আমরা যা ব্যবহার করে প্রজেক্ট করব)
            </Typography>
            <Divider></Divider>
            <List>
              <ListItem>
                <ListItemText>
                  •Front-end: HTML, CSS, Material UI, JavaScript, React.js,
                  Next.js,
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  •Back-end: Node.js, Express.js, REST API, Firebase, Mongodb
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>•Version Control: Git, Github</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  •IDE/Tools: Visual Studio, Postman, Vercel
                </ListItemText>
              </ListItem>
            </List>
          </Paper>
          <Paper variant="outlined" sx={{ padding: "20px" }}>
            <Typography
              variant="h4"
              align="center"
              sx={{ fontWeight: 700, padding: "3px" }}
            >
              আমরা যে ভাবে কোর্সটি সম্পুর্ন করব
            </Typography>
            <Divider></Divider>
            <Typography sx={{ padding: "20px" }}>
              এই কোর্স্টা করার পর মোটামোটি সকল ধরনের প্রজেক্ট করতে পারবেন
              ইনশাল্লাহ । আপনার যদি একটু ক্রিয়েটিভিটি থাকে টহলেই হবে । এই
              কোর্সটি বিগিনারদের জন্য। আমি লাইভে সম্পুর্ন প্রজেক্ট করে দেখাব এবং
              প্রিতিদিন আপনাকে কিছু কাজ দিব যা আপনার করে দিতে হবে। আর এভাবেই
              আমরা এই কোর্স সম্পুর্ন ইনশাল্লাহ ।
            </Typography>
          </Paper>
          <Alert
            severity="info"
            sx={{ padding: "20px", borderLeft: "3px solid #F1C903" }}
          >
            কোর্সটি করতে চাইলে অথবা এই কোর্স বিষয়ে কোন প্রশ্ন থাকলে ফেসবুক
            মেসেঙ্গারে আমাকে জিজ্ঞাসা করুন — ধন্যবাদ
          </Alert>
        </Stack>
      </Container>
    </Layout>
  );
}
