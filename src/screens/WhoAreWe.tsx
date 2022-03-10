import * as React from "react";
import "../App.css";
import {NavbarScreen} from "./Navbar.screen";
import {SidebarScreen} from "./Sidebar.screen";
import { useTranslation } from "react-i18next";
import { Text } from "../components/Text";
import { MouseScroll } from "../components/MouseScoll";
import { Colors } from "../utils/Colors";
import { Card, Grid } from "@mui/material";
import CurrencyExchangeRoundedIcon from "@mui/icons-material/CurrencyExchangeRounded";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import BiotechRoundedIcon from "@mui/icons-material/BiotechRounded";
import { borderRadius } from "@mui/system";

interface WhoAreWeProps {}

export const WhoAreWeScreen: React.FunctionComponent<WhoAreWeProps> = () => {
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
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1501644898242-cfea317d7faf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
          style={{
            width: "100%",
            height: "80vh",
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
            Who are we
          </Text>
          <div style={{ margin: "30px" }}></div>

          <div data-aos="fade-up" data-aos-duration="1000">
            <MouseScroll />
          </div>
        </div>
      </div>
      <div style={{ margin: "50px" }}></div>
      {/* OUR HISTORY */}
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        style={{
          paddingLeft: "20%",
          paddingRight: "20%",
        }}
      >
        <Text
          size="45px"
          color={Colors.light.texts}
          component="h1"
          data-aos="fade-up"
          weigth="900"
          uppercase
          align="center"
        >
          Our history
        </Text>
        <div style={{ margin: "30px" }}></div>
        <Text
          size="18px"
          color={Colors.light.texts}
          component="p"
          data-aos="fade-up"
          weigth="300"
          align="justify"
        >
          Wired Beauty as of today is a saas based start-up co-founded by
          Stanislas and Sophie, two beauty experts who become friends while
          working toghether at l’Oréal.
        </Text>
        <div style={{ margin: "15px" }}></div>
        <Text
          size="18px"
          color={Colors.light.texts}
          component="p"
          data-aos="fade-up"
          weigth="300"
          align="justify"
        >
          Stanislas initiated the scientific research on electrochemistry and
          antiox measurement to develop a skincare prescription tool, and
          launched a first B2C sun prevention tool (mapo solar).
        </Text>
        <div style={{ margin: "15px" }}></div>
        <Text
          size="18px"
          color={Colors.light.texts}
          component="p"
          data-aos="fade-up"
          weigth="300"
          align="justify"
        >
          In 2021, , considering the blue ocean of cosmetic market research and
          the latest demands of consumer on efficiency proofs especially in
          Asia, the two of them decided to pivot to a 100% B2B Saas company,
          convinced by the potential of this technology.
        </Text>
        <div style={{ margin: "15px" }}></div>
        <Text
          size="18px"
          color={Colors.light.texts}
          component="p"
          data-aos="fade-up"
          weigth="300"
          align="justify"
        >
          As of today, Wired Beauty Technologies has invested 1.3M€ in research
          on their exclusive IOT, mobile app, algorithand scientific exposome
          and suncare knowledge partnering with a top-notch consortium.
        </Text>
      </Grid>
      <div style={{ margin: "50px" }}></div>
      {/* END OUR HISTORY */}
      {/* MARKET INSIGHT */}
      <Grid container direction={"column"}>
        <Grid container>
          <Grid item xs={4}>
            <img
              src="https://i.imgur.com/wPVmdyx.jpg"
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
              Market insight
            </Text>
            <Text
              size="15px"
              color={Colors.dark.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="center"
            >
              <b>Consumer demand transparency on formulae performance</b>. In
              their eyes, clinical tests done on samples of 30/40 people are
              <b>not good enough</b>! This is the reason why <b>peer-to-peer</b>{" "}
              recommendation and non-scientific influencers info gain share of
              voice . Brands need to recover credibility.
            </Text>
            <Text
              size="15px"
              color={Colors.dark.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="center"
            >
              Consumer and brands demand seek for <b>personalized</b> solutions
              that only big data can understand.
            </Text>
            <Text
              size="15px"
              color={Colors.dark.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="center"
            >
              <b>Data</b> helps discover of new frontiers and claims, especially
              in the exposome field where human skin self-defends against
              aggressions and naturally produces NMF or antioxidants.{" "}
              <b>
                Can cosmetic beat natural skin self-defense ? Yes! but how much
                ?
              </b>
            </Text>
            <Text
              size="15px"
              color={Colors.dark.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="center"
            >
              Trends like clean beauty or legislation (Reach especially) impose
              frequent and costly <b>ingredient changes</b>.{" "}
              <b>
                Can we know up-front which will perform best ? At what dosage ?
              </b>
            </Text>
          </Grid>
        </Grid>
      </Grid>
      {/* END MARKET INSIGHT */}
      <div style={{ margin: "100px" }}></div>
      {/* OUR BELIEFS */}
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
          xs={4}
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
                padding: "50px",
                height: "100px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <CurrencyExchangeRoundedIcon
                style={{
                  color: Colors.light.texts,
                  fontSize: "75px",
                  marginBottom: "15px",
                }}
              />
              <Text
                size="15px"
                color={Colors.light.texts}
                component="p"
                data-aos="fade-up"
                weigth="300"
                align="center"
              >
                IOT can <b>save R&D money</b> and speed-up product launch tempo
              </Text>
            </Card>
          </div>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            paddingLeft: "2.5%",
            paddingRight: "2.5%",
          }}
        >
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <Card
              variant="elevation"
              raised
              style={{
                padding: "50px",
                height: "100px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <AutoGraphRoundedIcon
                style={{
                  color: Colors.light.texts,
                  fontSize: "75px",
                  marginBottom: "15px",
                }}
              />
              <Text
                size="15px"
                color={Colors.light.texts}
                component="p"
                data-aos="fade-up"
                weigth="300"
                align="center"
              >
                Repeatability of protocols increases{" "}
                <b>reliability of results</b>
              </Text>
            </Card>
          </div>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            paddingLeft: "2.5%",
            paddingRight: "2.5%",
          }}
        >
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <Card
              variant="elevation"
              raised
              style={{
                padding: "50px",
                height: "100px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <BiotechRoundedIcon
                style={{
                  color: Colors.light.texts,
                  fontSize: "75px",
                  marginBottom: "15px",
                }}
              />
              <Text
                size="15px"
                color={Colors.light.texts}
                component="p"
                data-aos="fade-up"
                weigth="300"
                align="center"
              >
                Data Science <b>can help</b> cosmetic scientists
              </Text>
            </Card>
          </div>
        </Grid>
      </Grid>
      {/* END OUR BELIEFS */}
      <div style={{ margin: "100px" }}></div>
      {/* OUR TEAM & SCIENTIFIC CONSORTIUM */}
      <Grid container direction={"column"}>
        <Grid container>
          <Grid
            container
            xs={8}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            direction={"column"}
            style={{
              height: "400px",
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
              OUR TEAM & SCIENTIFIC CONSORTIUM
            </Text>
            <Text
              size="15px"
              color={Colors.dark.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="center"
            >
              Wired Beaty Technologies is a <b>three-sided French tech team</b>
              combining the intelligence of two seasoned cosmetic professionals
              lien vers bio sophie et Stan , the electro chemistry knowledge of
              our{" "}
              <a href="https://www.qima.com/" target={"_blank"}>
                CRO partner in Toulouse
              </a>{" "}
              and the scientific skin expertise of a renowned dermatologist Mrs
              Tu-ahn DUONG lien vers BIO of the{" "}
              <a href="https://aphp.fr/" target={"_blank"}>
                Henri Mondor Hospital
              </a>{" "}
              in Paris.
            </Text>
            <Text
              size="15px"
              color={Colors.dark.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="center"
            >
              It is the quality of our employees and partners that build the
              trust we seek.
            </Text>
            <Text
              size="15px"
              color={Colors.dark.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="center"
            >
              Because of their singular competences and contagious energy, they
              help our clients improve and simplify skincare research data.
            </Text>
          </Grid>
          <Grid item xs={4}>
            <img
              src="https://media.istockphoto.com/photos/scientists-smiling-together-in-lab-picture-id130404794"
              alt="img"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* END OUR TEAM & SCIENTIFIC CONSORTIUM */}
      <div style={{ margin: "50px" }}></div>
      {/* OUR TEAM */}
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          <Grid
            container
            xs={6}
            direction={"column"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            style={{
              paddingLeft: "10%",
              paddingRight: "10%",
            }}
          >
            <img
              src={"https://i.imgur.com/OqvDzTz.png"}
              alt="SOPHIE-LE-TANNEUR"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "500px",
              }}
            />
            <Text
              size="25px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="800"
              align="center"
              uppercase
            >
              Sophie Le Taneur
            </Text>
            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="justify"
            >
              An FMCG corporate life of over 20 years at Colgate-Palmolive &
              L’Oréal in marketing and general management positions in Europe.
            </Text>
            <div style={{ margin: "10px" }}></div>

            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="justify"
            >
              An entrepreneurial life with turn-arounds of a luxury brands
              backed by Private equity funds for followed by 7 years of
              consulting @Lucinda which she founded. lien linked in
            </Text>
            <div style={{ margin: "10px" }}></div>

            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="left"
            >
              A passion for entrepreneurship as an impact investor and mentor (
              <a href="https://www.50partners.fr/">@ 50 Partners</a>)
            </Text>
          </Grid>
          <Grid
            container
            xs={6}
            direction={"column"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            style={{
              paddingLeft: "10%",
              paddingRight: "10%",
            }}
          >
            <img
              src={"https://i.imgur.com/DyMcaLL.png"}
              alt="STANISLAS-VANDIER"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "500px",
              }}
            />
            <Text
              size="25px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="800"
              align="center"
              uppercase
            >
              STANISLAS VANDIER
            </Text>
            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="justify"
            >
              10 years at L’Oréal in marketing and general management positions
              in Europe.
            </Text>
            <div style={{ margin: "10px" }}></div>

            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="justify"
            >
              An entrepreneurial life in Europe and Asia in dermo-cosmetics
              (product development and alternative retail models) and data / AI.
            </Text>
            <div style={{ margin: "10px" }}></div>

            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="left"
            >
              A passion for innovation and team ventures.
            </Text>
          </Grid>
        </Grid>
        <div style={{ margin: "25px" }}></div>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          <Grid
            container
            xs={6}
            direction={"column"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            style={{
              paddingLeft: "10%",
              paddingRight: "10%",
            }}
          >
            <img
              src={"https://i.imgur.com/6i3CgPv.png"}
              alt="NICOLAS-AMALRIC"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "500px",
              }}
            />
            <Text
              size="25px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="800"
              align="center"
              uppercase
            >
              NICOLAS AMALRIC
            </Text>
            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="justify"
            >
              Scientific Director of QIMA Life Sciences and former CEO of
              Synelvia
            </Text>
            <div style={{ margin: "10px" }}></div>

            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="justify"
            >
              QIMA Life Sciences (formerly Bioalternatives & Synelvia) offers
              analysis services adapted to skin biology. The range of tests
              extends from virtual in silico screening to the bioanalysis of
              non-invasive clinical samples, including in vitro and ex vivo
              tests. QIMA Life Sciences helps the marketing and research and
              development departments of major European and American cosmetics
              and pharmaceutical groups to innovate in the conceptualization of
              their projects and to substantiate and support their product
              claims.
            </Text>
            <div style={{ margin: "10px" }}></div>

            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="left"
            >
              A passion for innovation in skin science.
            </Text>
          </Grid>
          <Grid
            container
            xs={6}
            direction={"column"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            style={{
              paddingLeft: "10%",
              paddingRight: "10%",
            }}
          >
            <img
              src={"https://i.imgur.com/2X0eaB0.png"}
              alt="WILLIAM-RICHARD"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "500px",
              }}
            />
            <Text
              size="25px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="800"
              align="center"
              uppercase
            >
              WILLIAM RICHARD
            </Text>
            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="justify"
            >
              10 years at L’Oréal in marketing and general management positions
              in Europe.
            </Text>
            <div style={{ margin: "10px" }}></div>

            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="justify"
            >
              An entrepreneurial life in Europe and Asia in dermo-cosmetics
              (product development and alternative retail models) and data / AI.
            </Text>
            <div style={{ margin: "10px" }}></div>

            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="left"
            >
              A passion for innovation and team ventures.
            </Text>
          </Grid>
        </Grid>
        <div style={{ margin: "25px" }}></div>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          <Grid
            container
            xs={6}
            direction={"column"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            style={{
              paddingLeft: "10%",
              paddingRight: "10%",
            }}
          >
            <img
              src={"https://i.imgur.com/oVjdCJj.png"}
              alt="TU-ANH-DUONG"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "500px",
              }}
            />
            <Text
              size="25px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="800"
              align="center"
              uppercase
            >
              TU-ANH DUONG
            </Text>
            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="justify"
            >
              Dermatologist, APHP, Hôpital Henri Mondor
            </Text>
            <div style={{ margin: "10px" }}></div>

            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="justify"
            >
              TELDERM
            </Text>
            <div style={{ margin: "10px" }}></div>

            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="justify"
            >
              Ecole Centrale Paris , Interne des hopitaux de Paris, PhD
            </Text>
            <div style={{ margin: "10px" }}></div>

            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="left"
            >
              A passion for trans-disciplinary innovation
            </Text>
          </Grid>
          <Grid
            container
            xs={6}
            direction={"column"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            style={{
              paddingLeft: "10%",
              paddingRight: "10%",
            }}
          >
            <img
              src={"https://i.imgur.com/CygVdQA.png"}
              alt="MELISSA-EVEILLARD"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "500px",
              }}
            />
            <Text
              size="25px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="800"
              align="center"
              uppercase
            >
              MELISSA EVEILLARD
            </Text>
            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="justify"
            >
              Trainee at APHP (May’ 21) as a data scientist for the Wired beauty
              project and SKINBIOSENSE clinical trial and efficiency vs
              chromatography.
            </Text>
            <div style={{ margin: "10px" }}></div>

            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="justify"
            >
              Master in Engineering, Mathematics, and Biostatistics track @
              Paris Universty.
            </Text>
            <div style={{ margin: "10px" }}></div>

            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="left"
            >
              A passion for new technologies, data exploration and communication
              based on deep analysis.
            </Text>
          </Grid>
        </Grid>
      </Grid>
      {/* END OUR TEAM */}
      <div style={{ margin: "50px" }}></div>
      {/* INTERVIEW */}
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingTop: "50px",
          paddingBottom: "50px",
          backgroundColor: Colors.dark.background,
        }}
      >
        <Grid xs={4}>
          <Text
            size="25px"
            color={Colors.dark.texts}
            component="p"
            weigth="800"
            align="center"
            uppercase
          >
            ❝ YOU CO FOUNDED Wired Beauty, HOW DO YOU SPLIT RESPONSABILITIES ? ❞
          </Text>
        </Grid>
        <Grid xs={8}>
          <Text
            size="15px"
            color={Colors.dark.texts}
            component="p"
            weigth="300"
            align="justify"
          >
            ❝ Stanislas and I know each other well as we each spent over 15
            years at L’Oréal in marketing development and general management
            positions. We are strong because we are different ! We definitely
            share vision and created together this new fact-based hybrid way to
            do clinical trials and consumer studies thanks to technology. In our
            day-to-day practice, we share the same office and exchange all the
            time our vital decision : client approach, image, scientific studies
            and partnerships. I, as the CEO, take care of the convenient
            application and relationships with investors. Stanislas, as the
            President, is responsible of the scientific approach of the lab
            device. ❞, <b>Sophie Le Taneur</b>
          </Text>
          <div style={{ margin: "20px" }}></div>
          <Text
            size="15px"
            color={Colors.dark.texts}
            component="p"
            weigth="300"
            align="justify"
          >
            ❝ Sophie and I are convinced that a new innovation cycle is going to
            take place combining lab grade data and large scale panels in real
            life. Our ambition is to contribute to this new frontier with our
            clients and help them discover new, more personalized solutions for
            their clients. Strategic domains, in order to innovate through a
            better and renewed skin knowledge and understanding, such as
            oxidative stress, skin barrier, skin hydration are our priorities.
            All this is where we get our motivation from; this is where we
            invest and fully dedicate ourselves. ❞, <b>Stanislas Vandier</b>
          </Text>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingTop: "50px",
          paddingBottom: "50px",
          backgroundColor: Colors.light.background,
        }}
      >
        <Grid xs={8}>
          <Text
            size="15px"
            color={Colors.light.texts}
            component="p"
            weigth="300"
            align="justify"
          >
            ❝ One never knows, one can only work hard and hope to win the trust
            of new labs and and cosmetic brands! But we are convinced that
            betting that consumer will NOT carry on believing claims based on 40
            people. Plus, as a former NPD developer , working closely with my
            R&D collegues, I se that in this market speed is of the essence: we
            aim to reduce the R&D cost and tempo. ❞, <b>Sophie Le Taneur</b>
          </Text>
          <div style={{ margin: "20px" }}></div>
          <Text
            size="15px"
            color={Colors.light.texts}
            component="p"
            weigth="300"
            align="justify"
          >
            ❝ I have spent over 5 years working with our partners on the
            reliability of electrochemistry measures of skin vitality. I know it
            works. It would be a shame to miss this true innovation. Other than
            that, as an ex-L’Oréal, I know how to work easily on large samples
            all over the world in order to achieve better and more personalized
            products and solutions. That is our « secret receipe » ! ❞,{" "}
            <b>Stanislas Vandier</b>
          </Text>
        </Grid>
        <Grid xs={4}>
          <Text
            size="25px"
            color={Colors.light.texts}
            component="p"
            weigth="800"
            align="center"
            uppercase
          >
            ❝ WHY SHOULD WIRED BEAUTY WORK? ❞
          </Text>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingTop: "50px",
          paddingBottom: "50px",
          backgroundColor: Colors.dark.background,
        }}
      >
        <Grid xs={4}>
          <Text
            size="25px"
            color={Colors.dark.texts}
            component="p"
            weigth="800"
            align="center"
            uppercase
          >
            ❝ what is your ambition? ❞
          </Text>
        </Grid>
        <Grid xs={8}>
          <Text
            size="15px"
            color={Colors.dark.texts}
            component="p"
            weigth="300"
            align="justify"
          >
            ❝ We want to redefine the standard of skincare tests, helping labs
            and marketing teams reduce the development leadtimes and base their
            claims on repeatable fact-based protocols. My motivations lie in the
            impact that this can have for the industry : working quicker,
            stopping at an early stage less efficient formulae, accumulating
            data to better understand how the skin naturally defends itself to
            aggression, combining this intelligence with life style data. We
            want to build a smart, enthousiastic, sustainable consulting firm
            that can save money and time to their clients. We want to be the
            best partner of skincare firms. ❞, <b>Sophie Le Taneur</b>
          </Text>
          <div style={{ margin: "20px" }}></div>
          <Text
            size="15px"
            color={Colors.dark.texts}
            component="p"
            weigth="300"
            align="justify"
          >
            ❝ In highly competitive business environments, we anticipated a new
            innovation cycle, combining lab grade data and large scale panels in
            real life. Our ambition is to help our clients discover new, more
            personalized solutions for their clients. Wired Beauty allows a more
            agile development process, more reliable claims and efficacy proofs
            and more personalized, differentiating launch strategies. Strategic
            domains, in order to innovate through a better and renewed skin
            knowledge and understanding, such as oxidative stress, skin barrier,
            skin hydration are the priorities we have worked on in our
            consortium together with Qima and Henri Mondor Hospital. All this is
            where we get our motivation from; this is where we invest and fully
            dedicate ourselves. ❞, <b>Stanislas Vandier</b>
          </Text>
        </Grid>
      </Grid>
      {/* END INTERVIEW */}
      <div style={{ margin: "50px" }}></div>
      {/* VALUE AND SPIRIT */}
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
          VALUES AND SPIRIT
        </Text>
        <Text
          size="18px"
          color={Colors.light.texts}
          component="p"
          data-aos="fade-up"
          weigth="300"
          align="center"
        >
          Since the beginning, Wired Beauty has had 1 mission : bring
          evidence-based results to their clients rather than administer
          classical surveys.
        </Text>
        <Text
          size="18px"
          color={Colors.light.texts}
          component="p"
          data-aos="fade-up"
          weigth="300"
          align="center"
        >
          Hence the digitally enabled solutions.
        </Text>
        <Text
          size="18px"
          color={Colors.light.texts}
          component="p"
          data-aos="fade-up"
          weigth="300"
          align="center"
        >
          We have a strong entrepreneurial culture and constantly innovate to
          find new claims , data, new proofs and{" "}
          <b>reduce the R&D cost and tempo</b>.
        </Text>
        <Text
          size="18px"
          color={Colors.light.texts}
          component="p"
          data-aos="fade-up"
          weigth="300"
          align="center"
        >
          We aim to have a real impact on how consumers see brand performance.
        </Text>
        <Text
          size="18px"
          color={Colors.light.texts}
          component="p"
          data-aos="fade-up"
          weigth="300"
          align="center"
        >
          To help our clients, we establish new norms of excellence in cosmetic
          research.
        </Text>
        <div style={{ margin: "25px" }}></div>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          rowSpacing={8}
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
                  height: "175px",
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
                  We focus on results with professionalism and constantly
                  respect ethical codes. We listen, we deliver. We help our
                  clients succeed.
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
                  height: "175px",
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
                  We say things as they are and research new frontiers
                  open-mindedly.
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
                  height: "175px",
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
                  We use technology to better understand consumer needs and life
                  style as well as skin reactions. We taylor our research to
                  client objectives. In tubo, in vitro, in vivo. We make it
                  simple and save people time.
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
                  height: "175px",
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
                  We team up with labs, and their CROs all over the worlds from
                  the concept development or for improved formulae. It feels
                  different to work with us because our pêople are unlike any
                  other. We bring new perspectives: mutual trust and speed.
                </Text>
              </Card>
            </div>
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              paddingLeft: "2.5%",
              paddingRight: "2.5%",
            }}
          >
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1200"
            >
              <Card
                variant="elevation"
                raised
                style={{
                  padding: "20px",
                  height: "175px",
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
                  We respect the data regulations issued by the European Union
                  and even top their tight regulations about consent or right to
                  be forgotten. Our data is anonymized locally and analyzed and
                  stored in our data centers in Europe. We believe in people
                  development and encourage diversity of opinions.
                </Text>
              </Card>
            </div>
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              paddingLeft: "2.5%",
              paddingRight: "2.5%",
            }}
          >
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1200"
            >
              <Card
                variant="elevation"
                raised
                style={{
                  padding: "20px",
                  height: "175px",
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
                  We produce our devices from recycled materials and since the
                  developement have reduced the size of our IOT devive by 40% ,
                  thus impacting transport and packaging costs. We believe and
                  are committed for climate change and compensate our carbon
                  emission sustaining our friensd Matthiew in his venture for a
                  regenerative and low carbon agriculture in France.{" "}
                  <a href="https://www.terraterra.fr/">
                    Learn more about Terra Terra
                  </a>
                  .
                </Text>
              </Card>
            </div>
          </Grid>
        </Grid>
      </Grid>
      {/* END VALUE AND SPIRIT */}
      <div style={{ margin: "100px" }}></div>
      {/* INVESTOR AND BOARD */}
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text
          size="40px"
          color={Colors.light.texts}
          component="h2"
          data-aos="fade-up"
          weigth="800"
          align="center"
          uppercase
        >
          INVESTORS AND BOARDS
        </Text>
        <div style={{ margin: "15px" }}></div>
        <div
          style={{
            paddingLeft: "20%",
            paddingRight: "20%",
          }}
        >
          <Text
            size="20px"
            color={Colors.light.texts}
            component="p"
            data-aos="fade-up"
            weigth="300"
            align="center"
          >
            Wired beauty is privately held and backed by a college of 14
            business angels. Stanislas, as the founder and President, still own
            69,47% of the equity. Sophie, as co-founder and CEO owns 18%.
          </Text>
        </div>
        <div style={{ margin: "25px" }}></div>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          <Grid
            container
            xs={6}
            direction={"column"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            style={{
              paddingLeft: "10%",
              paddingRight: "10%",
            }}
          >
            <img
              src={"https://i.imgur.com/SSYz8Xa.png"}
              alt="Pierre François Le Louët"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "500px",
              }}
            />
            <Text
              size="25px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="800"
              align="center"
              uppercase
            >
              Pierre François Le Louët
            </Text>
            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="justify"
            >
              Advisory board | NellyRodi President – Trends research
            </Text>
          </Grid>
          <Grid
            container
            xs={6}
            direction={"column"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            style={{
              paddingLeft: "10%",
              paddingRight: "10%",
            }}
          >
            <img
              src={"https://i.imgur.com/Ctac6vm.png"}
              alt="Gilles GENAIN"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "500px",
              }}
            />
            <Text
              size="25px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="800"
              align="center"
              uppercase
            >
              Gilles GENAIN
            </Text>
            <Text
              size="15px"
              color={Colors.light.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="justify"
            >
              Advisory board | Former head of L’Oréal Product Development
            </Text>
          </Grid>
        </Grid>
        <div style={{ margin: "25px" }}></div>
      </Grid>
      {/* END INVESTOR AND BOARD */}
      <div style={{ margin: "50px" }}></div>
      {/* RECRUTING */}
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        style={{
          backgroundColor: Colors.dark.background,
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <Text
          size="40px"
          color={Colors.dark.texts}
          component="p"
          data-aos="fade-up"
          weigth="900"
          align="center"
          uppercase
        >
          We're recruting
        </Text>
        <div style={{ margin: "10px" }}></div>
        <Text
          size="20px"
          color={Colors.dark.texts}
          component="p"
          data-aos="fade-up"
          weigth="300"
          align="center"
        >
          We're currently recruting{" "}
          <b>
            <a href="">Data scientists</a>
          </b>
          ,{" "}
          <b>
            <a href="">Project manager</a>
          </b>{" "}
          and{" "}
          <b>
            <a href="">Head of studies and researches</a>
          </b>
          .
        </Text>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          style={{ marginTop: "25px" }}
        >
          <Grid
            container
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            xs={4}
            style={{ paddingLeft: "5%", paddingRight: "5%" }}
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
              We look for
            </Text>
            <Text
              size="15px"
              color={Colors.dark.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="justify"
            >
              Team players, deadline driven and organized professionals, verbal,
              quantitative and presentation communication skills, analytical
              mindsets, client minded, integrity : say it as it is, stay humble,
              keep it simple.
            </Text>
          </Grid>
          <Grid
            container
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            xs={4}
            style={{ paddingLeft: "5%", paddingRight: "5%" }}
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
              To apply
            </Text>
            <Text
              size="15px"
              color={Colors.dark.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="justify"
            >
              Team players, deadline driven and organized professionals, verbal,
              quantitative and presentation communication skills, analytical
              mindsets, client minded, integrity : say it as it is, stay humble,
              keep it simple.
            </Text>
          </Grid>
          <Grid
            container
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            xs={4}
            style={{ paddingLeft: "5%", paddingRight: "5%" }}
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
              Prepare your interview
            </Text>
            <Text
              size="15px"
              color={Colors.dark.texts}
              component="p"
              data-aos="fade-up"
              weigth="300"
              align="justify"
            >
              Why are you interested in WB? What experience are you most proud
              of? What would you do diffrently and how ? When did you last have
              to convince someone and how did you manage? You should expect to
              be questionned on your professionnal specific competencies ( data,
              sales etc) and your understanding of our business.
            </Text>
          </Grid>
        </Grid>
      </Grid>
      {/* END RECRUTING */}
    </div>
  );
};
