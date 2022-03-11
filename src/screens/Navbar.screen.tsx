import * as React from "react";
import { useTranslation } from "react-i18next";
/*import { BrowserRouter as Router, Link } from "react-router-dom";**/
import StyledLink from "../components/StyledLink";
/**styles and components*/
import { Colors } from "../utils/Colors";
import {
  ContainerDiv,
  ContainerDivVertical,
  Text,
  LogoSideBar,
  Wrapper,
  Logo,
  NavbarButton,
} from "../utils/styles";
import logo from "../assets/images/Logo_Wired_BeautyFULL_BLACK.png";
/**routes*/
import { WhatWeDoScreen } from "./WhatWeDo.screen";
import { AccueilScreen } from "./Accueil.screen";

interface NavbarProps {}

export const NavbarScreen: React.FC = (NavbarProps) => {
  /**traduction*/
  const { t } = useTranslation();
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <ContainerDiv>
        <Logo src={logo} />
        <Wrapper flexDirection="row" alignItems="center">
          <Wrapper>
            <StyledLink to="/">
              <Text>{t("Homepage")}</Text>
            </StyledLink>
          </Wrapper>
        </Wrapper>

        <Wrapper>
          <StyledLink to={"/what-we-do"}>
            <Text>{t("What we do")}</Text>
          </StyledLink>
        </Wrapper>

        <Wrapper>
          <StyledLink to={"/nomadic-labgrade-device-and-app"}>
            <Text>{t("New nomadic labgrade App")}</Text>
          </StyledLink>
        </Wrapper>

        <Wrapper flexDirection="row" alignItems="center">
          <StyledLink to={"/who-are-we"}>
            <Text>{t("About us")}</Text>
          </StyledLink>
        </Wrapper>

        <Wrapper flexDirection="row" alignItems="center">
          <StyledLink to={"/scientific-validation"}>
            <Text>{t("Scientific validation")}</Text>
          </StyledLink>
        </Wrapper>

        <Wrapper flexDirection="row" alignItems="center">
          <StyledLink to={"/range-of-service"}>
            <Text>{t("Studies and Devices")}</Text>
          </StyledLink>
        </Wrapper>

        <Wrapper flexDirection="column" alignItems="center">
          <StyledLink to={"/login"}>
            <NavbarButton
              primary={Colors.light.main}
              border={Colors.light.main}
            >
              <Text color={Colors.light.texts}>{t("Log In")}</Text>
            </NavbarButton>
          </StyledLink>
        </Wrapper>
      </ContainerDiv>
    </div>
  );
};
