import * as React from "react";
import "../App.css";
/**navbar and sidebar*/
import {NavbarScreen} from "./Navbar.screen";
import {SidebarScreen} from "./Sidebar.screen";
import { useTranslation } from "react-i18next";
import imageSc1 from "../assets/images/scientific1.png";
import imageSc2 from "../assets/images/scinetific2.png";
import imageSc3 from "../assets/images/scientific3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { styled } from '@mui/material/styles';
import { Button, Box, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {ContainerDiv, ContainerDivVertical,Text, LogoSideBar, Wrapper, Logo, NavbarButton} from "../utils/styles";
interface ScientificValidProps {}

export const ScientificValidScreen: React.FunctionComponent<ScientificValidProps> = () => {
    const { t } = useTranslation();
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    return (


        <div>
            <div>
                <NavbarScreen/>
                <SidebarScreen/>
            </div>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>

            <div style={{ margin: "100px" }}>
                <div style={{ width: "100%",display:"flex", marginBottom:"10px", alignItems:"center"}}>
                    <h3 style={{marginLeft: "auto", marginRight:"auto", fontFamily:"Neue Montreal Medium"}}> SKIN CARE INTELLIGENCE: somme interesting articles </h3>
                </div>

                <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-around", height:"100%"}}>
                    <Card sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={imageSc1}
                                alt="scientific1"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" style={{fontFamily:"Neue Montreal Medium"}}>
                                    What is oxidative stress ?
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{fontFamily:"Neue Montreal Medium"}}>
                                    Oxidative stress is a rupture of cellular balance,
                                    producing a build-up of free radicals responsible for skin premature ageing.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <Text> learn more onoxidative stress: paper by Dr </Text>
                            </Button>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={imageSc3}
                                alt="scientific3"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary" style={{fontFamily:"Neue Montreal Medium"}}>
                                    WHAT ARE FREE RADICALS? <br />
                                    WHAT ARE SIGNS OF ANTIOXIDATIVE STRESS ON SKIN?
                                    Pollution, Sun radation,…
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <Text> learn more free radicals?: paper by Dr </Text>
                            </Button>
                            <Button size="small" color="primary">
                                <Text> learn more onoxidative signs: paper by Dr </Text>
                            </Button>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={imageSc2}
                                alt="scientific2"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" style={{fontFamily:"Neue Montreal Medium"}}>
                                    How can antioxidants protect the skin?
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{fontFamily:"Neue Montreal Medium"}}>
                                    One can distinguish two types of antioxidants : enzymatic (for instance : superoxide,
                                    catalase, peroxidase, dismutase, peroxidase glutathione)...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <Text> learn more on antioxidative type : paper Dr </Text>
                            </Button>
                        </CardActions>
                    </Card>
                </div>

                <div style={{marginTop:"10px", alignItems:"center", top:"50px"}}>
                    <Card sx={{ minWidth: 275, Height: 50}}>
                        <CardContent>
                            <Typography style={{fontFamily:"Neue Montreal Medium"}} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                YOU HAVE PUBLISHED RESEARCH ON THESE TOPICS?
                                PLEASE SUBMIT YOUR WORK AND CONTRIBUTE TO THE COMMUNITY
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><Text> DOWNLOAD HERE </Text></Button>
                        </CardActions>
                    </Card>
                </div>

            </div>

        </div>

    );
};
