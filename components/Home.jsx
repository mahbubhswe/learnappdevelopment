import {
  Stack,
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
} from "@mui/material";
import React from "react";
import Link from "next/link";
import mahbub from "../public/img/mahbub.png";
import { coureseItems } from "./coureseItems";
import courses from "../public/img/web.gif";
import Image from "next/image";
import TextTransition, { presets } from "react-text-transition";
import { Wave } from "react-animated-text";
import dynamic from "next/dynamic";

function Home() {
  const TEXTS = [
    "JavaScript and Material UI",
    "React and Next JS",
    "Node and Express JS",
    "MongoDB and more",
  ];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
      <Stack
        spacing={1}
        direction={{
          xs: "column-reverse",
          sm: "column-reverse",
          md: "row",
          lg: "row",
          xl: "row",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" },
            height: {
              xs: "200px",
              sm: "200px",
              md: "500px",
              lg: "500px",
              sl: "500px",
            },
            display: "grid",
            placeContent: "center",
          }}
        >
          <Typography
            sx={{ paddingY: "3px", color: "#3399FF", fontWeight: 900 }}
            variant="h3"
            align="center"
          >
            Learn With
          </Typography>
          <Typography
            sx={{ paddingY: "3px", color: "#001e3c", fontWeight: 900 }}
            variant="h3"
            align="center"
          >
            <TextTransition springConfig={presets.slow}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" },
            height: "500px",
            display: "grid",
            placeContent: "center",
          }}
        >
          <Image src={courses} alt="courses" quality={100} />
        </Box>
      </Stack>
      <Container sx={{ marginY: "100px" }}>
        <section section id="course-list" style={{ paddingTop: "40px" }}>
          <Typography
            sx={{ paddingY: "30px", color: "#082542", fontWeight: 900 }}
            variant="h3"
            align="center"
          >
            <Wave text="Courses List" effect="stretch" effectChange={2} />
          </Typography>
          <Grid container spacing={2} justifyContent={"center"}>
            {coureseItems.map((x) => {
              return (
                <Grid
                  key={x.id}
                  item
                  sx={{
                    width: "250px",
                  }}
                >
                  <Card sx={{ border: "1px solid #01E0D0" }}>
                    <CardMedia sx={{ padding: "10px" }}>
                      <Image
                        alt="services"
                        src={x.img}
                        width={250}
                        height={200}
                        quality={100}
                      />
                    </CardMedia>
                    <CardContent>
                      <Typography>{x.text}</Typography>
                      <Typography>Price: {x.price} tk only</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        fullWidth
                        sx={{
                          background: "#FFB518",
                          "&:hover": {
                            background: "#CD3359",
                          },
                        }}
                      >
                        <Link href={x.url} passHref>
                          <a style={{ color: "white", textDecoration: "none" }}>
                            Details
                          </a>
                        </Link>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </section>
      </Container>
      <div
        style={{
          padding: "100px 0px",
        }}
      >
        <Typography
          sx={{ color: "#082542", fontWeight: 900 }}
          variant="h3"
          align="center"
        >
          About Me
        </Typography>
        <Stack
          spacing={1}
          direction={{
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "50%",
                lg: "50%",
                xl: "50%",
              },

              display: "grid",
              placeContent: "center",
            }}
          >
            <Image
              src={mahbub}
              alt="mahbub"
              height={350}
              width={350}
              quality={100}
            />
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "50%",
                lg: "50%",
                xl: "50%",
              },

              display: "grid",
              placeContent: "center",
            }}
          >
            <Typography component={"p"} align="center" sx={{ padding: "10px" }}>
              <p>Hi,</p>
              {`I'm`} Mahbub Hasan (Software Engineer). I am very much interested to
              share my programming and development knowledge with the people.
            </Typography>
          </Box>
        </Stack>
      </div>
      <Dialog></Dialog>
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
