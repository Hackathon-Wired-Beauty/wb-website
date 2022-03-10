import * as React from "react";
import { Text } from "../components/Text";
import { useTranslation } from "react-i18next";
import { MouseScroll } from "../components/MouseScoll";
import { Colors } from "../utils/Colors";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import {NavbarScreen} from "./Navbar.screen";
import {SidebarScreen} from "./Sidebar.screen";

interface NomadicAndAppProps {}

export const NomadicAndAppScreen: React.FunctionComponent<
  NomadicAndAppProps
> = () => {
  const { t } = useTranslation();
  React.useEffect(() => {}, []);
  return (
    <div
      style={{
        backgroundColor: Colors.light.background,
      }}
    >
        <div>
            <NavbarScreen/>
            <SidebarScreen/>
        </div>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      {/* FULLSCREEN */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://i.imgur.com/1ft2AsJ.jpg"
          style={{
            width: "100%",
            height: "100vh",
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
            Nomadic labgrade IOT
          </Text>
          <Text
            size="72px"
            color={Colors.dark.texts}
            component="h1"
            data-aos="fade-up"
            weigth="900"
            uppercase
            align="center"
          >
            device & smart app
          </Text>
          <div style={{ margin: "15px" }}></div>
          <Text
            size="20px"
            color={Colors.dark.texts}
            component="p"
            data-aos="fade-up"
            weigth="300"
            align="center"
            style={{
              paddingLeft: "20%",
              paddingRight: "20%",
              textAlign: "justify",
            }}
          >
            WIRED BEAUTY is a French beauty-tech market research company which
            invested 1,3M€ to develop a non invasive, portable lab connected
            device to deliver labgrade and real time measurements of skin
            markers to dermocosmetic lab as well as a smart app in order to also
            harvest consumer perception.
          </Text>
          <div style={{ margin: "30px" }}></div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <MouseScroll />
          </div>
        </div>
      </div>
      {/* END FULLSCREEN */}
      {/* CARDS */}
      <div style={{ margin: "100px" }}></div>
      <Grid
        container
        direction={"row"}
        alignItems="center"
        justifyContent={"center"}
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <Grid
          container
          xs={4}
          direction={"column"}
          justifyContent={"space-evenly"}
        >
          <Card
            variant="elevation"
            raised
            style={{
              padding: "20px",
              height: "200px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: "5%",
              marginRight: "5%",
            }}
          >
            <Text
              size="24px"
              color={Colors.light.texts}
              component="h2"
              weigth="800"
              uppercase
              align="center"
            >
              Wired Beauty is different
            </Text>
            <div style={{ margin: "10px" }}></div>
            <Text
              size="14px"
              color={Colors.light.texts}
              component="p"
              weigth="200"
              align="justify"
              style={{
                paddingLeft: "10%",
                paddingRight: "10%",
              }}
            >
              Proprietary IOT and Algorythm allowing decifering within minutes
              combined with a consumer app harvesting consumer opinions.
            </Text>
          </Card>
        </Grid>
        <Grid container xs={4} direction={"column"}>
          <Card
            variant="elevation"
            raised
            style={{
              padding: "20px",
              height: "200px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: "5%",
              marginRight: "5%",
            }}
          >
            <Text
              size="24px"
              color={Colors.light.texts}
              component="h2"
              weigth="800"
              uppercase
              align="center"
            >
              Wired Beauty is new
            </Text>
            <div style={{ margin: "10px" }}></div>
            <Text
              size="14px"
              color={Colors.light.texts}
              component="p"
              weigth="200"
              align="justify"
              style={{
                paddingLeft: "10%",
                paddingRight: "10%",
              }}
            >
              Real World Evidence (link with pollution, UV and lifestyle) of
              skincare efficiency on large statistical basis (e.g. 1000
              testers).
            </Text>
          </Card>
        </Grid>
        <Grid container xs={4} direction={"column"}>
          <Card
            variant="elevation"
            raised
            style={{
              padding: "20px",
              height: "200px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: "5%",
              marginRight: "5%",
            }}
          >
            <Text
              size="24px"
              color={Colors.light.texts}
              component="h2"
              weigth="800"
              uppercase
              align="center"
            >
              Wired Beauty is better
            </Text>
            <div style={{ margin: "10px" }}></div>
            <Text
              size="14px"
              color={Colors.light.texts}
              component="p"
              weigth="200"
              align="justify"
              style={{
                paddingLeft: "10%",
                paddingRight: "10%",
              }}
            >
              Hybrid studies combining objective clinical results measurements &
              consumer perception.
            </Text>
          </Card>
        </Grid>
      </Grid>
      <div style={{ margin: "100px" }}></div>
      {/* END CARDS */}
      {/*  SMART DATA X SKINCARE */}
      <Grid container direction={"column"}>
        <Grid container>
          <Grid item xs={4}>
            <img
              src="https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
              alt="img"
              style={{
                width: "100%",
                height: "350px",
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
              height: "350px",
              backgroundColor: Colors.dark.background,
              paddingLeft: "10%",
              paddingRight: "10%",
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
              SMART DATA ✖ SKINCARE
            </Text>
            <Text
              size="15px"
              color={Colors.dark.texts}
              component="p"
              data-aos="fade-up"
              weigth="800"
              align="justify"
            >
              Our measurements range from targeted markers such as Ascorbic
              acid, Alpha Tocopherol and squalen/sebum to, non targeted
              measurements of the barrier function or the antioxydative capacity
              of the skin.
            </Text>
            <Text
              size="15px"
              color={Colors.dark.texts}
              component="p"
              data-aos="fade-up"
              weigth="800"
              align="justify"
            >
              Our scientific partners ( APHP and CRO : lien en page scientific )
              have established that our measurement of TEWL is statistically
              correlated to that of chromatography which is the reference
              methodology as opposed to corneometry. Our technology is
              complementary to imagery.
            </Text>
          </Grid>
        </Grid>
      </Grid>
      {/*  END SMART DATA X SKINCARE */}

      {/*  OUR INSANELY FAST ALGORITHM */}
      <Grid
        container
        direction={"column"}
        style={{
          marginTop: "-4px",
        }}
      >
        <Grid container>
          <Grid
            container
            xs={8}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            direction={"column"}
            style={{
              height: "350px",
              backgroundColor: Colors.light.background,
              paddingLeft: "10%",
              paddingRight: "10%",
            }}
          >
            <Text
              size="24px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="900"
              align="center"
              uppercase
            >
              OUR INSANELY FAST ALGORITHM
            </Text>
            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="800"
              align="justify"
            >
              Thanks to its IOT, its mobile consumer app and its standardized
              single-use patches, Wired Beauty can decifer within seconds skin
              antioxydative and mosterizing reactions. Artificial intelligence
              improves repeatability of process.
            </Text>
            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="800"
              align="justify"
            >
              We're providing our mobile app with user feedback, our portable
              lab device Lab-Grade testing, some single-use patches and our IOT
              platform base in European Datacenter for European users and for
              our Chinese users, we're collecting anonymously data in Datacenter
              base in this said country.
            </Text>
          </Grid>
          <Grid item xs={4}>
            <img
              src="https://i.imgur.com/bGAWaTz.jpg"
              alt="img"
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      {/*  END OUR INSANELY FAST ALGORITHM */}
    </div>
  );
};
