import * as React from "react";
import "../App.css";

import { useTranslation } from "react-i18next";
import { Text } from "../components/Text";
import { Colors } from "../utils/Colors";
import { Card, CardMedia, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CardActions, Button, CardContent } from "@mui/material";
import MapoBackground from "../assets/images/P1250012.jpg";

import InsightsIcon from '@mui/icons-material/Insights';
import BiotechIcon from '@mui/icons-material/Biotech';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ScienceIcon from '@mui/icons-material/Science';
import HealingIcon from '@mui/icons-material/Healing';
import MultilineChartIcon from '@mui/icons-material/MultilineChart';
import CompareIcon from '@mui/icons-material/Compare';
import {NavbarScreen} from "./Navbar.screen";
import {SidebarScreen} from "./Sidebar.screen";
import {FooterScreen} from "./Footer.screen";

interface RangeOfServiceProps {}

export const RangeOfServiceScreen: React.FunctionComponent<RangeOfServiceProps> = () => {
  const { t } = useTranslation();
  
  React.useEffect(() => {}, []);
  return (
    <div>
        <div>
            <NavbarScreen/>
            <SidebarScreen/>
        </div>
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
        />
      <div
        style={{
          height: "75vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://i.imgur.com/fAtqEZS.jpg"
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
            {"Studies and services"}
          </Text>
        </div>
      </div>
      <Grid
        container
        xs={12}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        style={{
          height: "300px",
          backgroundColor: Colors.light.background,
        }}
      >
        <Text
          size="24px"
          color={Colors.light.texts}
          component="p"
          weigth="bold"
          align="center"
          uppercase
        >
          <span style={{ 
            backgroundImage: "linear-gradient(90deg, rgb(255, 184, 117), rgb(255, 184, 117))",
            backgroundSize: "35.5rem 0.5rem, 100% 0.1rem",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "90%",
          }}>Similarities with medicament protocols</span>
          
        </Text>
        <Text
          size="18px"
          color={Colors.light.texts}
          component="p"
          weigth="normal"
          align="center"
          style={{ padding: "40px"}}
        >
          Skin care product testing often resembles the protocols of medicament testing. 
          It is a long sequencial process which aims to protect the voluntary testers, measure performance, record side-effects. 
          For the most serious cosmetic labs, it is not rare to spend over 18 months gathering and analyzing the results of the following stages. 
        </Text>
      </Grid>
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
              <Text
                color={Colors.light.texts}
                weigth={"900"}
                uppercase
                align="center"
                component={"p"}
                size="28px"
              >
                Step 1
              </Text>
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
                    <InsightsIcon
                      style={{
                        color: Colors.light.texts,
                        fontSize: "75px",
                        margin: "15px",
                      }}
                    />
                    <Text
                      size="15px"
                      color={Colors.light.texts}
                      component="p"
                      data-aos="fade-up"
                      weigth="normal"
                      align="center"
                    >
                      Scientific literature analysis, Molecule, Dosage, Application, Frequency 
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
              <div data-aos="fade-up" data-aos-duration="1000">
              <Text
                color={Colors.light.texts}
                weigth={"900"}
                uppercase
                align="center"
                component={"p"}
                size="28px"
              >
                Step 2
              </Text>
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
                    <BiotechIcon
                      style={{
                        color: Colors.light.texts,
                        fontSize: "75px",
                        margin: "15px",
                      }}
                    />
                    <Text
                      size="15px"
                      color={Colors.light.texts}
                      component="p"
                      data-aos="fade-up"
                      weigth="normal"
                      align="center"
                    >
                      Trials on reconstructed skin or explants or animal
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
              <div data-aos="fade-up" data-aos-duration="1000">
              <Text
                color={Colors.light.texts}
                weigth={"900"}
                uppercase
                align="center"
                component={"p"}
                size="28px"
              >
                Step 3
              </Text>
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
                    <HealthAndSafetyIcon
                      style={{
                        color: Colors.light.texts,
                        fontSize: "75px",
                        margin: "15px",
                      }}
                    />
                    <Text
                      size="15px"
                      color={Colors.light.texts}
                      component="p"
                      data-aos="fade-up"
                      weigth="normal"
                      align="center"
                    >
                      Clinical trials on healthy and affected testers (tolerance and efficiency)
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
              <div data-aos="fade-up" data-aos-duration="1000">
              <Text
                color={Colors.light.texts}
                weigth={"900"}
                uppercase
                align="center"
                component={"p"}
                size="28px"
              >
                Step 4
              </Text>
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
                    <VisibilityOffIcon
                      style={{
                        color: Colors.light.texts,
                        fontSize: "75px",
                        margin: "15px",
                      }}
                    />
                    <Text
                      size="15px"
                      color={Colors.light.texts}
                      component="p"
                      data-aos="fade-up"
                      weigth="normal"
                      align="center"
                    >
                      Double blind test on large basis vs placebo vs existing formula (side effects and performance)
                    </Text>
                </Card>
              </div>
            </Grid>
        </Grid>
      <div style={{ margin: "150px" }}></div>
      <Grid
        container
        xs={12}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        style={{
          height: "300px",
          backgroundColor: Colors.dark.background,
        }}
      >
        <Text
          size="24px"
          color={Colors.dark.texts}
          component="p"
          weigth="900"
          align="center"
          uppercase
        >
          
          <span style={{ 
            backgroundImage: "linear-gradient(90deg, #FE7D05, #FE7D05)",
            backgroundSize: "35.5rem 0.5rem, 100% 0.1rem",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "90%",
          }}>What makes Wired Beauty different ?</span>
        </Text>
        <Text
          size="18px"
          color={Colors.dark.texts}
          component="p"
          weigth="normal"
          align="center"
          style={{ padding: "40px"}}
        >
          Same metrics that matter : Antiox, Barrier fonction, Twell, NMF
        </Text>
      </Grid>
      <Grid
            container
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            style={{
              paddingLeft: "5%",
              paddingRight: "5%",
              backgroundColor: Colors.dark.background,
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
              <Text
                color={Colors.dark.texts}
                weigth={"900"}
                uppercase
                align="center"
                component={"p"}
                size="28px"
              >
                Step 1
              </Text>
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
                    <ScienceIcon
                      style={{
                        color: Colors.light.texts,
                        fontSize: "75px",
                        margin: "15px",
                      }}
                    />
                    <Text
                      size="15px"
                      color={Colors.light.texts}
                      component="p"
                      data-aos="fade-up"
                      weigth="normal"
                      align="center"
                    >
                      In tubo ingredient profiling and/or dosage (Batch of 10 ingredients comparison)
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
              <div data-aos="fade-up" data-aos-duration="1000">
              <Text
                color={Colors.dark.texts}
                weigth={"900"}
                uppercase
                align="center"
                component={"p"}
                size="28px"
              >
                Step 2
              </Text>
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
                    <HealingIcon
                      style={{
                        color: Colors.light.texts,
                        fontSize: "75px",
                        margin: "15px",
                      }}
                    />
                    <Text
                      size="15px"
                      color={Colors.light.texts}
                      component="p"
                      data-aos="fade-up"
                      weigth="normal"
                      align="center"
                    >
                      Trials on reconstructed skin or explants (comparison of 2 formulae or ingredients)
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
              <div data-aos="fade-up" data-aos-duration="1000">
              <Text
                color={Colors.dark.texts}
                weigth={"900"}
                uppercase
                align="center"
                component={"p"}
                size="28px"
              >
                Step 3
              </Text>
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
                    <MultilineChartIcon
                      style={{
                        color: Colors.light.texts,
                        fontSize: "75px",
                        margin: "15px",
                      }}
                    />
                    <Text
                      size="15px"
                      color={Colors.light.texts}
                      component="p"
                      data-aos="fade-up"
                      weigth="normal"
                      align="center"
                    >
                      Combined : Clinical/blind use tests. Objective measure, Skin markers, New formula vs Placebo, Subjective perception. 
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
              <div data-aos="fade-up" data-aos-duration="1000">
              <Text
                color={Colors.dark.texts}
                weigth={"900"}
                uppercase
                align="center"
                component={"p"}
                size="28px"
              >
                and Step 4
              </Text>
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
                    <CompareIcon
                      style={{
                        color: Colors.light.texts,
                        fontSize: "75px",
                        margin: "15px",
                      }}
                    />
                    <Text
                      size="15px"
                      color={Colors.light.texts}
                      component="p"
                      data-aos="fade-up"
                      weigth="normal"
                      align="center"
                    >
                      Comparison at T0, T+1 day, T+8 days, etc. Allows quick retrieval of inefficient or not tolerated products. Increases security and R&D tempo
                    </Text>
                </Card>
              </div>
            </Grid>
            <div style={{ margin: "25px" }}></div>
      </Grid>
      <div style={{ margin: "25px" }}></div>
      <Grid
        container
        xs={12}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        style={{
          height: "300px",
          backgroundColor: Colors.light.background,
        }}
      >
        <Text
          size="24px"
          color={Colors.light.texts}
          component="p"
          weigth="900"
          align="center"
          uppercase
        >
          
          <span style={{ 
            backgroundImage: "linear-gradient(90deg, #FE7D05, #FE7D05)",
            backgroundSize: "35.5rem 0.5rem, 100% 0.1rem",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "90%",
          }}>Studies and services
          </span>
        </Text>
        <Text
          size="18px"
          color={Colors.light.texts}
          component="p"
          weigth="normal"
          align="center"
          style={{ padding: "40px"}}
        >
          While Wired Beauty always adapts to its clients' specifications and does custom research, the digitally enabled methodology could in the future allow syndicated studies on very large cohorts.
          Nevertheless, using our IOT lab device and app, Wired Beauty easily managed the following :
        </Text>
      </Grid>
      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead
              data-aos="fade-right"
              data-aos-duration="1000"
              style={{
                backgroundColor: Colors.dark.background,
              }}
            >
              <TableRow>
                <TableCell >&nbsp;</TableCell>
                <TableCell style={{ fontSize: "18px", color: `${Colors.dark.texts}`, fontWeight: "bold", textTransform: "uppercase" }} align="center">Objectives</TableCell>
                <TableCell style={{ fontSize: "18px", color: `${Colors.dark.texts}`, fontWeight: "bold", textTransform: "uppercase" }} align="center">Batch</TableCell>
                <TableCell style={{ fontSize: "18px", color: `${Colors.dark.texts}`, fontWeight: "bold", textTransform: "uppercase" }} align="center"> Results in</TableCell>
                <TableCell style={{ fontSize: "18px", color: `${Colors.dark.texts}`, fontWeight: "bold", textTransform: "uppercase" }} align="center">Average cost</TableCell>
                <TableCell style={{ fontSize: "18px", color: `${Colors.dark.texts}`, fontWeight: "bold", textTransform: "uppercase" }} align="center">Partners</TableCell>
              </TableRow>
            </TableHead>
            <TableBody data-aos="fade-right" data-aos-duration="1000">
                <TableRow style={{ height: "50px" }}>
                    <TableCell align="center">IN TUBO</TableCell>
                    <TableCell align="center">Comparison of ingredients or dosage performance</TableCell>
                    <TableCell align="center">10 ingredients</TableCell>
                    <TableCell align="center">3 days</TableCell>
                    <TableCell align="center">$7k</TableCell>
                    <TableCell align="center">QIMA & WIRED BEAUTY</TableCell>
                </TableRow>
                <TableRow style={{ height: "50px" }}>
                    <TableCell align="center">EX VIVO EXPLANTS OR RECONSTRUCTED SKIN</TableCell>
                    <TableCell align="center">Comparison of ingredients or dosage performance</TableCell>
                    <TableCell align="center">10 ingredients</TableCell>
                    <TableCell align="center">10 days</TableCell>
                    <TableCell align="center">$10k + explant costs</TableCell>
                    <TableCell align="center">QIMA & WIRED BEAUTY</TableCell>
                </TableRow>
                <TableRow style={{ height: "50px" }}>
                    <TableCell align="center">EX VIVO IN SEVERE EXPOSOME CONDITIONS</TableCell>
                    <TableCell align="center">Comparison of ingredients or dosage performance. In standard exposome chamber</TableCell>
                    <TableCell align="center">2 formulae (new vs old or new vs placebo or new vs lab standard)</TableCell>
                    <TableCell align="center">10 days</TableCell>
                    <TableCell align="center">$30k + explant costs</TableCell>
                    <TableCell align="center">QIMA & WIRED BEAUTY</TableCell>
                </TableRow>
                <TableRow style={{ height: "50px" }}>
                    <TableCell align="center">Shanghai PROTOCOL</TableCell>
                    <TableCell align="center">Comparison of antioxidant power, NPD vs Vitamin C, NPD vs no product at T0, T1, T8, T15</TableCell>
                    <TableCell align="center">Formula antiox against standard Vitamin C lab formula</TableCell>
                    <TableCell align="center">1 month</TableCell>
                    <TableCell align="center">$100k + patches</TableCell>
                    <TableCell align="center">LOCAL CRO & WIRED BEAUTY & Qima</TableCell>
                </TableRow>
                <TableRow style={{ height: "50px" }}>
                    <TableCell align="center">COHORT PROTOCOL</TableCell>
                    <TableCell align="center">Self defences of skin – 200 people (all skin types) under heavy pollution</TableCell>
                    <TableCell align="center">No product</TableCell>
                    <TableCell align="center">1 to 5 months</TableCell>
                    <TableCell align="center">$100k + patches</TableCell>
                    <TableCell align="center">WIRED BEAUTY</TableCell>
                </TableRow>
            </TableBody>
          </Table>
      </TableContainer>
      <div style={{ margin: "25px" }}></div>
      <Grid
        container
        xs={12}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        style={{
          height: "650px",
          backgroundColor: Colors.dark.background,
        }}
      >
        <Text
          size="24px"
          color={Colors.dark.texts}
          component="p"
          weigth="900"
          align="center"
          uppercase
        >
          
          <span style={{ 
            backgroundImage: "linear-gradient(90deg, #FE7D05, #FE7D05)",
            backgroundSize: "35.5rem 0.5rem, 100% 0.1rem",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "90%",
          }}>Mapo Solaire
          </span>
        </Text>
        <Text
          size="18px"
          color={Colors.dark.texts}
          component="p"
          weigth="normal"
          align="center"
          style={{ padding: "40px"}}
        >
          MAPO Solaire was the first device developped by Wired Beauty. New insights : Read now an overwiew and define your own study on large fact-based data,
          <ul style={{ textAlign: "left" }}>
            <li>Study on 20 cases of atopic dermatitis  see detaillest protocol and order</li>
            <li>Study on 20 cases of reactions to exposome (uv, pollution dust) on explants see detailled protocol and order</li>
            <li>Study on 200 cases of skin’s natural reaction to polluted environnement see detailled protocol and order</li>
            <li>Study on impact of vitamin c formula compared to hydration formulae see detailled protocol and order</li>
          </ul>
        </Text>
        <Card
        data-aos="fade-up"
        data-aos-duration="1000"
        sx={{ maxWidth: 345 }}
        variant="elevation"
        raised
        style={{
          padding: "20px",
          height: "200px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.dark.background,
        }}
      >
        <CardContent>
         <CardMedia
          component="img"
          height="140"
          image={ MapoBackground }
          alt="Mapo"
        />
          <CardActions style={{justifyContent:"center"}}>
            <Button variant="contained" style={{ backgroundColor: Colors.light.main, fontSize:"18px", color: Colors.dark.texts, fontWeight: "bold"}}>Order now</Button>
          </CardActions>
          </CardContent>
        </Card>
      </Grid>
        <div style={{ marginBottom: "10px" }}></div>
        <FooterScreen/>
    </div>
  );
};
