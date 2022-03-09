import * as React from "react";
import { useTranslation } from "react-i18next";
/*import { BrowserRouter as Router, Link } from "react-router-dom";**/
import StyledLink from "../components/StyledLink";
/**styles and components*/
import {ContainerDiv, ContainerDivVertical,Text, LogoSideBar, Wrapper, Logo, NavbarButton} from "../utils/styles";
import logo from "../assets/images/Logo_Wired_BeautyFULL_BLACK.png";
interface NavbarProps {}

export const NavbarScreen:React.FC = (NavbarProps) => {
    /**traduction*/
    const { t } = useTranslation();
    return (
        <>
            <ContainerDiv>
                <Logo src={logo}/>
                <Wrapper flexDirection="row" alignItems="center">
                    <Wrapper >
                        <StyledLink to="/accueil">
                            <Text >{t("Homepage")}</Text>
                        </StyledLink>
                    </Wrapper>
                </Wrapper>

                <Wrapper>
                    <StyledLink to={"/accueil"}>
                        <Text >{t("What we do")}</Text>
                    </StyledLink>
                </Wrapper>

                <Wrapper>
                    <StyledLink to={"/accueil"}>
                        <Text >{t("New nomadic labgrade App")}</Text>
                    </StyledLink>
                </Wrapper>

                <Wrapper flexDirection="row" alignItems="center">
                    <StyledLink to={"/accueil"}>
                        <Text>{t("About us")}</Text>
                    </StyledLink>
                </Wrapper>

                <Wrapper flexDirection="row" alignItems="center">
                    <StyledLink to={"/accueil"}>
                        <Text>{t("Scientific validation")}</Text>
                    </StyledLink>
                </Wrapper>

                <Wrapper flexDirection="row" alignItems="center">
                    <StyledLink to={"/accueil"}>
                        <Text>{t("Studies and Devices")}</Text>
                    </StyledLink>
                </Wrapper>

                <Wrapper flexDirection="column" alignItems="center">
                        <StyledLink to={"/accueil"}>
                            <NavbarButton>
                                <Text color={"black"}>{t("Sign In")}</Text>
                            </NavbarButton>
                        </StyledLink>
                        <StyledLink to={"/accueil"}>
                            <NavbarButton >
                                <Text color={"black"}>{t("Being Panaliste")}</Text>
                            </NavbarButton>
                        </StyledLink>
                </Wrapper>
            </ContainerDiv>

          <ContainerDivVertical>
              <Wrapper flexDirection="column" alignItems="start">
                  <StyledLink to={"/accueil"}>
                        <LogoSideBar src={logo}/>
                  </StyledLink>
                  <StyledLink to={"/accueil"}>
                       <LogoSideBar src={logo}/>
                  </StyledLink>
              </Wrapper>
          </ContainerDivVertical>
        </>
    )
};

/**lint test*/
function accueil() {
    return <h2>About</h2>;
}