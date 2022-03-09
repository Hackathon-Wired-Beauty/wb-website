/**container*/
import styled from "styled-components";
/**Components*/
import{NavBarText as NavText} from "../components/NavBarText";
import{ItemWrapper as NavItemWrapper} from "../components/ItemWrapper";
import{NavButton as NavButtonItem} from "../components/NavButton";

/**text nav*/
export const Text = styled(NavText)`
    color:${(props)=>props.color ? props.color :"#161616" };
    font-size: ${(props)=>props.fontSize ? props.fontSize  : ".9em"}; 
    font-family: "Neue Montreal Medium";
        &:hover{
        color: ${(props)=>props.color ? props.color :"#FFB673" };
    }  
`;

export const Wrapper = styled(NavItemWrapper)`
    display: flex;
    flex-direction: ${(props)=>props.flexDirection ?  props.flexDirection  : "column"};
    align-items:  ${(props)=>props.alignItems ? props.alignItems  : "flex-start"};
    padding: .1em;
    cursor:pointer;
     @media(max-width:300px){
        display: none;
    }
`;

export const ContainerDiv = styled.div`
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    color: white;
    background-color: FCFCFC;
`;

/**navbar vertical*/
export const ContainerDivVertical = styled.div`
    display: flex-row;
    width: 5%;
    height: 100%;
    position: fixed;
    justify-content:space-evenly;
    align-items: center;
    color: white;
    background-color: white;
`;

/** logo*/
export const Logo = styled.img`
    width: 3em;
    padding: .2em .1em;
`;

/**side bar logo*/
export const LogoSideBar = styled.img`
    width: 20px;
    height: 20px;
    padding: 10px;
`;

/**navbar button*/
export const NavbarButton = styled(NavButtonItem)`
  /* Adapt the colors based on primary prop */
  background-color: ${(props) => props.primary ? "white" : "#FFB673"};
  font-size: 1em;
  margin: 2px;
  padding: 1px;
  border: 2px solid #FFB673;
  border-radius: 3px;
`;