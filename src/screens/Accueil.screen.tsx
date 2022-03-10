import * as React from "react";
import "../App.css";

import { useTranslation } from "react-i18next";
import { Container } from "../components/Container";
import { VideoBg } from "../components/Video";
import { Text } from "../components/Text";
import { Colors } from "../utils/Colors";
import { ScreenFilter } from "../components/ScreenFilter";
import { Feature } from "../components/Feature";
import Grid from "@mui/material/Grid/Grid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

interface AccueilProps {}

export const AccueilScreen: React.FunctionComponent<AccueilProps> = () => {
  const { t } = useTranslation();

  const [firsname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [whoAreYou, setWhoAreYou] = React.useState("0");
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {}, []);
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <Container fullscreen={true}>
        <VideoBg
          autoPlay
          loop
          muted
          src={require("../assets/videos/background_30.webm")}
        />
        <ScreenFilter />
        <Text
          style={{
            zIndex: 2,
          }}
          color={Colors.dark.texts}
          component="h1"
          size="5em"
          data-aos="fade-up"
          weigth="900"
          uppercase
          align="center"
        >
          Wired Beauty
        </Text>
      </Container>
      <div style={{ margin: "100px" }}></div>
      <Feature
        image="assets/images/test.jpeg"
        imagePosition="left"
        title={"Measure skin vitality"}
        animation="from-right"
        padding="20%"
        spacing="40px"
      >
        Our clients evaluate and develop skincare formulae by comparing
        cosmetics on statistically viable samples of men & women on 1000 peoples
      </Feature>
      <Feature
        image="assets/images/test.jpeg"
        imagePosition="right"
        title={"Data & Technology"}
        animation="from-left"
        padding="20%"
        spacing="40px"
      >
        Proprietary nomadic lab device & patented skin patches to decipher skin
        reactions and ingredient presence. Our datas are anonimized and securely
        stores on large datacenters
      </Feature>
      <Feature
        image="assets/images/test.jpeg"
        imagePosition="left"
        title={"Internationalization"}
        animation="from-right"
        padding="20%"
        spacing="40px"
      >
        Our app is available in multiple languages such as English, French,
        German and Chinese.
      </Feature>
      <Feature
        image="assets/images/test.jpeg"
        imagePosition="right"
        title={"INSANELY FAST ALGORITHM"}
        animation="from-left"
        padding="20%"
        spacing="40px"
      >
        Thanks to its IOT, its mobile consumer app and its standardized
        single-use patches, Wired Beauty can decifer within seconds skin
        antioxydative and mosterizing reactions. Artificial intelligence
        improves repeatability of process.
      </Feature>
      <div style={{ margin: "100px" }}></div>
      <Grid
        container
        flex={1}
        style={{
          backgroundColor: Colors.dark.background,
          height: "350px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ marginTop: "25px" }}></div>
        <Grid
          xs={12}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            color={Colors.dark.texts}
            uppercase
            size="48px"
            component={"h2"}
            weigth="bold"
            align="center"
          >
            {"They trust us"}
          </Text>
        </Grid>
        {/* <Grid
          xs={6}
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Text
            color={Colors.dark.texts}
            uppercase
            size="48px"
            component={"h2"}
            weigth="bold"
            align="center"
          >
            {"They trust us"}
          </Text>
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={false}
          >
            <div>
              <img
                src="https://i.imgur.com/KqF2AAp.png"
                height={"40px"}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div>
              <img
                src="https://i.imgur.com/dT5dwow.png"
                height={"40px"}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div>
              <img
                src="https://i.imgur.com/mPZLG8t.png"
                height={"40px"}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div>
              <img
                src="https://i.imgur.com/zKUBNme.png"
                height={"40px"}
                style={{ objectFit: "contain" }}
              />
            </div>
          </Carousel>
        </Grid> */}
        <Grid container alignItems={"center"} justifyContent={"center"} xs={3}>
          <img
            src="https://i.imgur.com/JWXZ65G.png"
            height={"50px"}
            style={{ objectFit: "contain" }}
          />
        </Grid>
        <Grid container alignItems={"center"} justifyContent={"center"} xs={3}>
          <img
            src="https://i.imgur.com/c8ffCXb.png"
            height={"50px"}
            style={{ objectFit: "contain" }}
          />
        </Grid>
        <Grid container alignItems={"center"} justifyContent={"center"} xs={3}>
          <img
            src="https://i.imgur.com/c8ffCXb.png"
            height={"50px"}
            style={{ objectFit: "contain" }}
          />
        </Grid>
        <div style={{ marginBottom: "25px" }}></div>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent={"center"}
        alignItems={"center"}
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Grid>
            <Text
              color={Colors.light.texts}
              weigth={"900"}
              uppercase
              align="center"
              component={"h2"}
              size="40px"
            >
              <span
                style={{
                  marginTop: "10px",
                  wordWrap: "break-word",
                  backgroundImage:
                    "linear-gradient(90deg, rgb(255, 184, 117), rgb(255, 184, 117))",
                  backgroundSize: "17.5rem 1rem, 100% 0.1rem",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: "90%",
                }}
              >
                Contact us
              </span>
            </Text>
          </Grid>
          <div style={{ marginBottom: "25px" }}></div>
          <Grid container>
            <Grid item xs={5}>
              <TextField
                id="filled-basic"
                label="Firstname"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
              <TextField
                id="outlined-basic"
                label="Lastname"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <div style={{ marginBottom: "25px" }}></div>
          <TextField
            id="outlined-basic"
            label="Email address"
            variant="outlined"
            fullWidth
          />
          <div style={{ marginBottom: "25px" }}></div>
          <Grid container>
            <Grid item xs={5}>
              <TextField
                id="outlined-basic"
                label="Company name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Who are you ?
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={whoAreYou}
                  label="Who are you"
                  onChange={(e) => setWhoAreYou(e.target.value)}
                >
                  <MenuItem value={"0"}>Select an option...</MenuItem>
                  <MenuItem value={"1"}>A journalist</MenuItem>
                  <MenuItem value={"2"}>A company</MenuItem>
                  <MenuItem value={"3"}>A regular user</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <div style={{ marginBottom: "25px" }}></div>
          <TextField
            id="outlined-basic"
            label="Your message..."
            variant="outlined"
            fullWidth
            multiline
            rows={10}
          />
          <div style={{ marginBottom: "25px" }}></div>
          <Grid container>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <Button variant="contained" size="large" centerRipple fullWidth>
                <Text
                  color={Colors.dark.texts}
                  weigth={"normal"}
                  uppercase
                  align="center"
                  component={"h2"}
                  size="18px"
                >
                  Send message
                </Text>
              </Button>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};
