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
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"
            />
            <ContainerDivVertical>
                <WrapperSideBar flexDirection="column" alignItems="center">
                        <StyledLink to={"/"}>
                            <Text fontSize={"10px"}>
                                <Home/>
                                <p style={{ marginTop:"2px"}}>
                                    Home</p>
                            </Text>
                        </StyledLink>

                        <StyledLink to={"/what-we-do"}>
                            <Text fontSize={"10px"}>
                                <Work/>
                                <p>Work</p>
                            </Text>
                        </StyledLink>

                        <StyledLink to={"/nomadic-labgrade-device-and-app"}>
                            <Text fontSize={"10px"}>
                                <AppShortcut/>
                                <p>App</p>
                            </Text>
                        </StyledLink>

                        <StyledLink to={"/who-are-we"}>
                            <Text fontSize={"10px"}>
                                <Groups/>
                                <p>Groups</p>
                            </Text>
                        </StyledLink>

                        <StyledLink to={"/scientific-validation"}>
                            <Text fontSize={"10px"}>
                                <Book/>
                                <p>Rapport</p>
                            </Text>
                        </StyledLink>

                        <StyledLink to={"/range-of-service"}>
                            <Text fontSize={"10px"}>
                                <Devices/>
                                <p>Studies</p>
                                </Text>
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