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
                            <Home/>
                        </StyledLink>

                        <StyledLink to={"/accueil"}>
                            <Work/>
                        </StyledLink>

                        <StyledLink to={"/accueil"}>
                            <AppShortcut/>
                        </StyledLink>

                        <StyledLink to={"/accueil"}>
                            <Groups/>
                        </StyledLink>

                        <StyledLink to={"/accueil"}>
                            <Book/>
                        </StyledLink>

                        <StyledLink to={"/accueil"}>
                            <Devices/>
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