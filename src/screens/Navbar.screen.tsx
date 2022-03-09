import * as React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Link } from "react-router-dom";
import StyledLink from "../components/StyledLink";
/**styles and components*/
import {ContainerDiv, ContainerDivVertical, Text, Wrapper, Logo} from "../utils/styles";
import logo from "../images/Logo_Wired_BeautyFULL_BLACK.png";
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
                        <Text fontSize=".7em">{t("Accueil")}</Text>
                    </Wrapper>
                    <Link to="/accueil">Accueil</Link>
                </Wrapper>

                <Wrapper>
                    <Text fontSize=".7em">{t("Ce que nous faisons")}</Text>
                    <StyledLink to={"/accueil"}> Accueil</StyledLink>
                </Wrapper>

                <Wrapper>
                    <Text >{t("Nouvelle application")}</Text>
                </Wrapper>

                <Wrapper flexDirection="row" alignItems="center">
                    <Text>{t("Qui sommes nous")}</Text>
                </Wrapper>

                <Wrapper flexDirection="row" alignItems="center">
                    <Text>{t("Nos validations scientifiques")}</Text>
                </Wrapper>
            </ContainerDiv>
        </>
    )
};

function accueil() {
    return <h2>About</h2>;
}