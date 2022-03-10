import * as React from "react";
import "../App.css";

import { useTranslation } from "react-i18next";
import { Text } from "../components/Text";
import { Colors } from "../utils/Colors";
import { Card, Grid, Avatar } from "@mui/material";

import InsightsIcon from '@mui/icons-material/Insights';
import BiotechIcon from '@mui/icons-material/Biotech';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


interface RangeOfServiceProps {}

export const RangeOfServiceScreen: React.FunctionComponent<RangeOfServiceProps> = () => {
  const { t } = useTranslation();
  React.useEffect(() => {}, []);
  return (
    <div>
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
              <div data-aos="fade-down" data-aos-duration="1000">
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
                      data-aos="fade-down"
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
              <div data-aos="fade-down" data-aos-duration="1000">
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
                      data-aos="fade-down"
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
              <div data-aos="fade-down" data-aos-duration="1000">
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
                      data-aos="fade-down"
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
              <div data-aos="fade-down" data-aos-duration="1000">
              <Text
                color={Colors.dark.texts}
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
                      data-aos="fade-down"
                      weigth="normal"
                      align="center"
                    >
                      Double blind test on large basis vs placebo vs existing formula (side effects and performance)
                    </Text>
                </Card>
              </div>
            </Grid>
        </Grid>
    </div>
  );
};
