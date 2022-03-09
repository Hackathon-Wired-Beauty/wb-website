import * as React from "react";
import { useTranslation } from "react-i18next";
import {Home, Work, AppShortcut, Groups,Book, Devices } from '@mui/icons-material';
/*import { BrowserRouter as Router, Link } from "react-router-dom";**/
import StyledLink from "../components/StyledLink";
/**styles and components*/
import {ContainerDivVertical,Text, LogoSideBar, WrapperSideBar, Logo, NavbarButton} from "../utils/styles";
interface SidebarProps {}

export const SidebarScreen:React.FC = (SidebarProps) => {
    /**traduction*/
    const { t } = useTranslation();
    return (
        <div>
            <ContainerDivVertical>
                <WrapperSideBar flexDirection="column" alignItems="center">

                        <StyledLink to={"/accueil"}>
                            <Text fontSize={"10px"}>Home <Home/></Text>
                        </StyledLink>

                        <StyledLink to={"/accueil"}>
                            <Text fontSize={"10px"}>Work <Work/></Text>
                        </StyledLink>

                        <StyledLink to={"/accueil"}>
                            <Text fontSize={"10px"}>App <AppShortcut/></Text>
                        </StyledLink>

                        <StyledLink to={"/accueil"}>
                            <Text fontSize={"10px"}>Groups <Groups/></Text>
                        </StyledLink>

                        <StyledLink to={"/accueil"}>
                            <Text fontSize={"10px"}>Rapport <Book/></Text>
                        </StyledLink>

                        <StyledLink to={"/accueil"}>
                            <Text fontSize={"10px"}>Studies <Devices/></Text>
                        </StyledLink>

                </WrapperSideBar>
            </ContainerDivVertical>
        </div>
    )
};

/**lint test*/
function accueil() {
    return <h2>About</h2>;
}