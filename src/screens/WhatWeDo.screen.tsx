import * as React from "react";
import "../App.css";
import {NavbarScreen} from "./Navbar.screen";
import {SidebarScreen} from "./Sidebar.screen";
import { useTranslation } from "react-i18next";
import { Text } from "../components/Text";
import { Colors } from "../utils/Colors";
import Grid from "@mui/material/Grid/Grid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { MouseScroll } from "../components/MouseScoll";
import Card from "@mui/material/Card";

interface WhatWeDoProps {}

export const WhatWeDoScreen: React.FunctionComponent<WhatWeDoProps> = () => {
  const { t } = useTranslation();

  React.useEffect(() => {}, []);
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
        <div>
            <NavbarScreen/>
            <SidebarScreen/>
        </div>
      <div
        style={{
          height: "75vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://i.imgur.com/WqpXWSR.jpg"
          style={{
            width: "100%",
            height: "75vh",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <div
          style={{
            zIndex: 2,
          }}
        >
          <Text
            size="72px"
            color={Colors.dark.texts}
            component="h1"
            data-aos="fade-up"
            weigth="900"
            uppercase
            align="center"
          >
            {"What are we doing"}
          </Text>
          <div style={{ margin: "30px" }}></div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <MouseScroll />
          </div>
        </div>
      </div>
      <div style={{ margin: "50px" }}></div>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        <Text
          size="40px"
          color={Colors.light.texts}
          component="h2"
          data-aos="fade-up"
          weigth="900"
          uppercase
          align="center"
        >
          {"BeautyTech ✖ Skincare"}
        </Text>
        <Text
          size="18px"
          color={Colors.light.texts}
          component="p"
          data-aos="fade-up"
          weigth="300"
          align="center"
        >
          WIRED BEAUTY is a new datadriven market research company dedicated to
          cosmetic laboratories.
        </Text>
        <Text
          size="18px"
          color={Colors.light.texts}
          component="p"
          data-aos="fade-up"
          weigth="300"
          align="center"
        >
          We help our clients evaluate and develop skincare formulae by
          comparing cosmetics on statistically viable samples of men & women on
          1000 people
        </Text>
        <div style={{ margin: "25px" }}></div>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          style={{
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
        >
          <Grid
            item
            xs={3}
            style={{
              paddingLeft: "2.5%",
              paddingRight: "2.5%",
            }}
          >
            <div data-aos="fade-up" data-aos-duration="1000">
              <Card
                variant="elevation"
                raised
                style={{
                  padding: "20px",
                  height: "100px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  size="15px"
                  color={Colors.light.texts}
                  component="p"
                  data-aos="fade-up"
                  weigth="600"
                  align="center"
                >
                  Antioxydative and moisterizing effect of formulae in vivo and
                  in vitro
                </Text>
              </Card>
            </div>
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              paddingLeft: "2.5%",
              paddingRight: "2.5%",
            }}
          >
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <Card
                variant="elevation"
                raised
                style={{
                  padding: "20px",
                  height: "100px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  size="15px"
                  color={Colors.light.texts}
                  component="p"
                  data-aos="fade-up"
                  weigth="600"
                  align="center"
                >
                  We're taking care of onsumer feedback after product use
                </Text>
              </Card>
            </div>
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              paddingLeft: "2.5%",
              paddingRight: "2.5%",
            }}
          >
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <Card
                variant="elevation"
                raised
                style={{
                  padding: "20px",
                  height: "100px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  size="15px"
                  color={Colors.light.texts}
                  component="p"
                  data-aos="fade-up"
                  weigth="600"
                  align="center"
                >
                  Environmental conditions (UV pollution) surrouding the
                  consumer’s lifestyle
                </Text>
              </Card>
            </div>
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              paddingLeft: "2.5%",
              paddingRight: "2.5%",
            }}
          >
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="900"
            >
              <Card
                variant="elevation"
                raised
                style={{
                  padding: "20px",
                  height: "100px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  size="15px"
                  color={Colors.light.texts}
                  component="p"
                  data-aos="fade-up"
                  weigth="600"
                  align="center"
                >
                  Skincare performance after 1 day – 8 days – 15 days - X days
                </Text>
              </Card>
            </div>
          </Grid>
        </Grid>
        <div style={{ margin: "50px" }}></div>
        <Grid container direction={"column"}>
          <Grid container>
            <Grid item xs={4}>
              <img
                src="https://i.imgur.com/fdPTkhW.jpg"
                alt="img"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                }}
              />
            </Grid>
            <Grid
              container
              xs={8}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              direction={"column"}
              style={{
                height: "400px",
                backgroundColor: Colors.dark.background,
              }}
            >
              <Text
                size="24px"
                color={Colors.dark.texts}
                component="p"
                data-aos="fade-up"
                weigth="900"
                align="center"
                uppercase
              >
                We rely on data and techology
              </Text>
              <Text
                size="15px"
                color={Colors.dark.texts}
                component="p"
                data-aos="fade-up"
                weigth="800"
                align="center"
              >
                ❝Proprietary nomadic lab device & patented skin patches to
                decipher skin reactions and ingredient presence❞
              </Text>
              <Text
                size="15px"
                color={Colors.dark.texts}
                component="p"
                data-aos="fade-up"
                weigth="800"
                align="center"
              >
                ❝Easy multi-lingual smartphone app and customer feedback❞
              </Text>
              <Text
                size="15px"
                color={Colors.dark.texts}
                component="p"
                data-aos="fade-up"
                weigth="800"
                align="center"
              >
                ❝Geolocalisation and exposome data (UV - pollution -
                temperature)❞
              </Text>
              <Text
                size="15px"
                color={Colors.dark.texts}
                component="p"
                data-aos="fade-up"
                weigth="800"
                align="center"
              >
                ❝Repeatability of protocols in real life conditions (ie
                bathrooms)❞
              </Text>
              <Text
                size="15px"
                color={Colors.dark.texts}
                component="p"
                data-aos="fade-up"
                weigth="800"
                align="center"
              >
                ❝Large cohorts it needed❞
              </Text>
              <Text
                size="15px"
                color={Colors.dark.texts}
                component="p"
                data-aos="fade-up"
                weigth="800"
                align="center"
              >
                ❝Saas and European data center❞
              </Text>
            </Grid>
          </Grid>
        </Grid>
        <div style={{ margin: "50px" }}></div>
        <Text
          size="40px"
          color={Colors.light.texts}
          component="h2"
          data-aos="fade-up"
          weigth="900"
          uppercase
          align="center"
        >
          WE WORK FOR LABS AND MARKETING TEAMS
        </Text>
        <div style={{ margin: "15px" }}></div>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <Text
              size="20px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="400"
              align="center"
            >
              Combining efforts with countries usual CRO’s
            </Text>
          </Grid>
          <Grid item xs={5}>
            <Text
              size="20px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="400"
              align="center"
            >
              In all countries, even in China where anonymized data is key
            </Text>
          </Grid>
          <Grid item xs={1}></Grid>
          <div style={{ margin: "25px" }}></div>
          <Grid
            container
            direction={"row"}
            justifyContent="space-evenly"
            alignItems={"center"}
          >
            <img
              src="https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png"
              alt="country-fr"
              data-aos="fade-up"
              style={{
                width: "100px",
                height: "70px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <img
              src="https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png"
              alt="country-en"
              data-aos-delay="300"
              data-aos="fade-up"
              style={{
                width: "100px",
                height: "70px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <img
              src="https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png"
              alt="country-de"
              data-aos-delay="600"
              data-aos="fade-up"
              style={{
                width: "100px",
                height: "70px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <img
              src="https://www.countryflags.com/wp-content/uploads/china-flag-png-large.png"
              alt="country-ch"
              data-aos="fade-up"
              data-aos-delay="900"
              style={{
                width: "100px",
                height: "70px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Grid>
          <div style={{ margin: "50px" }}></div>
          <Grid
            container
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            style={{
              backgroundColor: Colors.dark.background,
            }}
          >
            <div style={{ margin: "25px" }}></div>
            <Text
              size="40px"
              color={Colors.dark.texts}
              component="h2"
              data-aos="fade-up"
              weigth="900"
              uppercase
              align="center"
            >
              WE HELP
            </Text>
            <div style={{ margin: "25px" }}></div>
            <Grid container direction={"row"} spacing={3}>
              <Grid item xs={6}>
                <Text
                  size="20px"
                  color={Colors.dark.texts}
                  component="p"
                  data-aos="fade-up"
                  weigth="400"
                  align="center"
                >
                  <b>Discover</b> new claims on large skin type cohorts
                </Text>
              </Grid>
              <Grid item xs={6}>
                <Text
                  size="20px"
                  color={Colors.dark.texts}
                  component="p"
                  data-aos="fade-up"
                  weigth="400"
                  align="center"
                >
                  <b>Prove</b> claims through large data intelligence
                </Text>
              </Grid>
              <Grid item xs={6}>
                <Text
                  size="20px"
                  color={Colors.dark.texts}
                  component="p"
                  data-aos="fade-up"
                  weigth="400"
                  align="center"
                >
                  <b>Truly understand</b> skin reactions in absence of product
                </Text>
              </Grid>
              <Grid item xs={6}>
                <Text
                  size="20px"
                  color={Colors.dark.texts}
                  component="p"
                  data-aos="fade-up"
                  weigth="400"
                  align="center"
                >
                  <b>Compare</b> performance on a long-term basis (Cohorts
                  follow-up)
                </Text>
              </Grid>
              <Grid item xs={6}>
                <Text
                  size="20px"
                  color={Colors.dark.texts}
                  component="p"
                  data-aos="fade-up"
                  weigth="400"
                  align="center"
                >
                  <b>Understand</b> exposome and skin
                </Text>
              </Grid>
              <Grid item xs={6}>
                <Text
                  size="20px"
                  color={Colors.dark.texts}
                  component="p"
                  data-aos="fade-up"
                  weigth="400"
                  align="center"
                >
                  <b>Save time</b> vs chromatography and <b>improve</b> results
                  vs TWEL.
                </Text>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <div style={{ margin: "30px" }}></div>

              <Text
                size="20px"
                color={Colors.dark.texts}
                component="p"
                data-aos="fade-up"
                weigth="400"
                align="center"
              >
                <b>Read simultanously</b> skin response & consumer feed-back
              </Text>
            </Grid>
            <div style={{ margin: "25px" }}></div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
