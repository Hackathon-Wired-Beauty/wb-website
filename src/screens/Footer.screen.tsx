import * as React from "react";
import { useTranslation } from "react-i18next";
import {TextField} from "@mui/material";
import { Text  as TextComponent} from "../components/Text";
/*import { BrowserRouter as Router, Link } from "react-router-dom";**/
import {Facebook, Twitter, LinkedIn, Home, Work, AppShortcut, Groups, Book, Devices} from '@mui/icons-material';
/**styles and components*/
import {
    ContainerDiv,
    ContainerDivVertical,
    Text,
    LogoSideBar,
    Wrapper,
    Logo,
    NavbarButton,
    WrapperSideBar
} from "../utils/styles";
import logo from "../assets/images/Logo_Wired_BeautyFULL_BLACK.png";
/**routes*/
import { WhatWeDoScreen } from "./WhatWeDo.screen";
import {AccueilScreen} from "./Accueil.screen";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import StyledLink from "../components/StyledLink";
import {Colors} from "../utils/Colors";
import Button from "@mui/material/Button";

interface FooterProps {}

export const FooterScreen:React.FC = (FooterProps) => {
    /**traduction*/
    const { t } = useTranslation();
    return (

        <div style={{flexDirection:"column", position:"relative"}}>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"
            />


            <div style={{display: "flex", justifyContent:"space-evenly", alignItems: "center", marginLeft:"50px", borderTop:"2px solid black"}} >
                <Wrapper flexDirection="Column" alignItems="center">
                    <div style={{width:"400px", height:"50px"}}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" color="black">
                                {t("Wired Beauty Corporation")}
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                WB Technologies, société par actions simplifiée au capital de 219 572,96 € <br/>
                                1. Immatriculation RCS : 79815185800015 <br/>
                                2. N° TVA : FR13798151858 <br/>
                                3. Le directeur de la publication : Stanislas Vandier <br/>
                                4. L’hébergeur: Squarespace Inc., 225 Varick Street, 12th Floor, New York, NY 10014 <br/>                              </Typography>
                        </CardContent>
                    </div>
                </Wrapper>

                <Wrapper flexDirection="column">
                    <div style={{width:"400px", height:"50px"}}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" color="black">
                                {t("Address")}
                            </Typography>
                            <Typography sx={{ fontSize: 16 }} color="black" gutterBottom>
                                Siége social <br/>
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                4 Rue Michelet, 75006 Paris<br/>
                            </Typography>
                            <Typography sx={{ fontSize: 16 }} color="Black" gutterBottom>
                                Venez nous rencontrez à l'usine IO <br/>
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                181-183 Rue du Chevaleret, 75013 Paris<br/>
                            </Typography>
                        </CardContent>
                    </div>
                </Wrapper>

                <Wrapper flexDirection="Column" alignItems="center">
                    <div style={{width:"400px", height:"50px"}}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" color="black">
                                {t("Contact us")}
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <a color={"black"} className="mailto" href="mailto:beauty-fablab@wired-beauty.com">beauty-fablab@wired-beauty.com</a><br/>
                                Tel : Stanislas Vandier - +33 7 68 49 44 63<br/>
                            </Typography>
                        </CardContent>
                    </div>
                </Wrapper>
                <Logo src={logo}/>
            </div>
            <div style={{ display:"flex", alignItems:"center", flexDirection:"row", marginLeft: "60px", marginTop: "170px", width:"1000px", height:"50px" , justifyContent:"space-evenly"}}>
                <div style={{alignItems:"center"}}>

                        <TextField
                            id="outlined-basic"
                            label="Email address for news letters"
                            variant="outlined"
                            style = {{width:"500px", marginRight:"10px"}}
                        />
                    <StyledLink to={""}>
                        <Button variant="contained" style={{marginTop:"10px", width:"100px", height:"30px"}} centerRipple>
                            <TextComponent
                                color={Colors.dark.texts}
                                uppercase
                                weigth={"normal"}
                                align="center"
                                component={"h2"}
                                size="14px"
                                style={{margin:"10px"}}
                            >Subscribe</TextComponent>
                        </Button>
                    </StyledLink>
                </div>
                <div>
                    <Wrapper>
                        <Text>Follow us</Text>
                    </Wrapper>
                    <Wrapper flexDirection="row" alignItems="center">
                        <StyledLink to={""}>
                            <Text>
                                <Facebook/>
                            </Text>
                        </StyledLink>

                        <StyledLink to={""}>
                            <Text fontSize={"20px"}>
                                <Twitter/>
                            </Text>
                        </StyledLink>

                        <StyledLink to={""}>
                            <Text fontSize={"20px"}>
                                <LinkedIn/>
                            </Text>
                        </StyledLink>

                    </Wrapper>

                </div>
            </div>
            <div style={{ marginBottom: "25px" }}></div>
        </div>

    )
};
