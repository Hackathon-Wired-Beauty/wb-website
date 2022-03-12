import * as React from "react";
import "../App.css";
/**navbar and sidebar*/
import {NavbarScreen} from "./Navbar.screen";
import {SidebarScreen} from "./Sidebar.screen";
import { useTranslation } from "react-i18next";
import { Text  as TextComponent} from "../components/Text";
import imageSc1 from "../assets/images/P1250042.jpeg";
import imageSc2 from "../assets/images/graphSc.png";
import imageSccard1 from "../assets/images/scientific1.png";
import imageSccard2 from "../assets/images/scinetific2.png";
import imageSccard3 from "../assets/images/scientific3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Button, Box, CardActionArea, CardActions, Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {ContainerDiv, ContainerDivVertical,Text, LogoSideBar, Wrapper, Logo, NavbarButton} from "../utils/styles";
import {Colors} from "../utils/Colors";
import {FooterScreen} from "./Footer.screen";

interface ScientificValidProps {}
export const ScientificValidScreen: React.FunctionComponent<ScientificValidProps> = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div>
                <NavbarScreen/>
                <SidebarScreen/>
            </div>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>

            <div style={{ margin: "100px" }}>


                <div style={{ width: "100%",display:"flex", marginBottom:"10px", alignItems:"center"}}>
                    <h3 style={{marginLeft: "auto", marginRight:"auto"}}> Scientific validations</h3>
                </div>

                <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-around", height:"100%"}}>

                    <div style={{marginTop:"40px", marginRight:"5px", alignItems:"center", top:"50px"}}>
                        <Card sx={{ minWidth: 250, maxWidth:700, Height: 50}}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    WIRED BEAUTY SCIENTIFIC PARTNERS ?
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    The Wired Beauty technology is the fruit of a scientific consortium uniting the founders of Wired Beauty, the APHP (Assistance Publique – Hôpitaux de Paris www.APHP.fr - <a target="_blank" href="https://www.APHP.fr"><Text color={"red"}>➢ learn more a rediger </Text></a>) and the French Contract Research Organization (CRO), QIMA www.qima.fr (<a target="_blank" href="https://www.qima.fr"><Text color={"red"}>➢ learn more a rediger </Text></a> )
                                    <br/>
                                    <Typography gutterBottom variant="h6" component="div" >
                                        <br/>
                                        TOGETHER THEY HAVE :
                                    </Typography>
                                    1. Demonstrated the power of electrochemistry to decifer antioxydative performance on the skin <a target="_blank" href="https://www.APHP.fr"><Text color={"red"}>➢ see results a fournir </Text></a><br/>
                                    2. Proved that the Wired Beauty IOT nomadic lab can level with traditionnal chromatography test in less than 1 minute (90% correlation) <a target="_blank" href="https://www.APHP.fr"><Text color={"red"}>➢ see results  </Text></a> <br/>
                                    3. Found that the Wired Beauty IOT nomadic lab device can beat TWELL tests <a target="_blank" href="https://www.APHP.fr"><Text color={"red"}>➢ see results a fournir </Text></a> <br/>
                                    4. Miniaturized the Wired Beauty IOT nomadic device <br/>
                                    5. Developped the interpretation of the signal algorythm within minutes <a target="_blank" href="https://www.APHP.fr"><Text color={"red"}>➢ see results a fournir </Text></a>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>


                    <Card sx={{ maxWidth: 400, marginTop: "40px" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image={imageSc1}
                                alt="scientific2"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    One can distinguish two types of antioxidants : enzymatic (for instance : superoxide,
                                    catalase, peroxidase, dismutase, peroxidase glutathione)...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>



            </div>

            <div style={{ margin: "50px" }}></div>
            {/* fin first part */}


            {/* second part */}
            <Grid style={{margin:"40px"}} container direction={"column"}>
                <Grid container>
                    <Grid item xs={4}>
                        <img
                            src={imageSc2}
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
                        <TextComponent
                            size="24px"
                            color={Colors.dark.texts}
                            component="p"
                            data-aos="fade-up"
                            weigth="900"
                            align="center"
                            uppercase
                        >
                            
                            <span style={{ 
                                backgroundImage: "linear-gradient(90deg, rgb(254, 125, 5), rgb(254, 125, 5))",
                                backgroundSize: "60.5rem 0.5rem, 100% 0.1rem",
                                backgroundRepeat: "no-repeat",
                                backgroundPositionY: "90%",
                            }}>Some of Wired Beauty PAPERS</span>
                        </TextComponent>
                        <TextComponent
                            size="15px"
                            color={Colors.dark.texts}
                            component="p"
                            data-aos="fade-up"
                            weigth="300"
                            align="center"
                        >
                            APHP study December 2021 – 60 subjects <a target="_blank" href="https://www.APHP.fr"><Text color={"red"}>➢ see results a fournir </Text></a><br/>
                            TWELL vs wired beauty <a target="_blank" href="https://www.APHP.fr"><Text color={"red"}>➢ see results a fournir </Text></a><br/>
                            Chromatography vs. Wired Beauty <a target="_blank" href="https://www.APHP.fr"><Text color={"red"}>➢ see results a fournir </Text></a><br/>
                        </TextComponent>
                        <TextComponent
                            size="24px"
                            color={Colors.dark.texts}
                            component="p"
                            data-aos="fade-up"
                            weigth="900"
                            align="center"
                            uppercase
                        >
                            CIR ACCREDITATION
                        </TextComponent>
                        <TextComponent
                            size="15px"
                            color={Colors.dark.texts}
                            component="p"
                            data-aos="fade-up"
                            weigth="300"
                            align="center"
                        >
                            We are accredited Credit Impot Recherche in France.
                            Skin care research with Wired Beauty can be tax deducted. A verifier
                        </TextComponent>

                    </Grid>
                </Grid>
            </Grid>
            <div style={{ margin: "50px" }}></div>
            {/* fin second part */}

            {/* last part */}

            <div style={{ width: "100%",display:"flex", marginBottom:"10px", alignItems:"center"}}>
                <h3 style={{marginLeft: "auto", marginRight:"auto"}}> SKIN CARE INTELLIGENCE: somme interesting articles </h3>
            </div>
            <div style={{marginLeft:"50px", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-around", height:"100%"}}>
                <Card sx={{ maxWidth: 400, marginTop: "40px", Height:200, }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image={imageSccard2}
                            alt="scientific2"
                        />
                        <CardContent>
                            <Typography variant="h6" color="text.secondary" >
                                What is oxidative stress ?
                            </Typography>
                            <Typography variant="body2" color="text.secondary" >
                                Oxidative stress is a rupture of cellular balance, producing a build-up of free radicals responsible for skin premature ageing.
                                ➢ learn more onoxidative stress: paper by Dr
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>


                <Card sx={{ maxWidth: 400, maxHeight:400, marginTop: "40px" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image={imageSccard1}
                            alt="scientific2"
                        />
                        <CardContent>
                            <Typography variant="h6" color="text.secondary" >
                                How can antioxidants protect the skin ?
                            </Typography>
                            <Typography variant="body2" color="text.secondary" >
                                One can distinguish two types of antioxidants : enzymatic (for instance : superoxide, catalase,
                                peroxidase, dismutase, peroxidase glutathione)
                                and non enzymatic ones (such as ascorbic acid, glutathione, uric acid, vitamins A, E, C, etc.)
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>



                <Card sx={{ maxWidth: 400, maxHeight:400, marginTop: "40px" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image={imageSccard3}
                            alt="scientific2"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            WHAT ARE FREE RADICALS ? <br/>
                            WHAT ARE SIGNS OF ANTIOXIDATIVE STRESS ON SKIN? Pollution, Sun radation,.. <br/>
                            ➢ learn more onoxidative stress: paper by Dr <br/>
                            ➢ learn more onoxidative stress: paper by Dr <br/>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <div style={{ margin: "50px" }}></div>

            <div style={{marginLeft:"80px", marginRight:"40px", alignItems:"center"}}>
                <Card sx={{ minWidth: 250, Height: 50}}>
                    <CardContent>
                        <Typography  sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            YOU HAVE PUBLISHED RESEARCH ON THESE TOPICS? PLEASE SUBMIT YOUR WORK AND CONTRIBUTE TO THE COMMUNITY ? <a target="_blank" href="https://www.APHP.fr"><Text color={"red"}>➢ Download here </Text></a>
                            <br/>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div style={{ marginBottom: "10px" }}></div>
            <FooterScreen/>
        </div>

    );
};
