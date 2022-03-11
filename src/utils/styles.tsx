/**container*/
import styled from "styled-components";
import { Colors } from "../utils/Colors";
/**Components*/
import{NavBarText as NavText} from "../components/NavBarText";
import{ItemWrapper as NavItemWrapper} from "../components/ItemWrapper";
import{NavButton as NavButtonItem} from "../components/NavButton";

/**text nav*/
export const Text = styled(NavText)`
    color:${(props)=>props.color ? props.color :"#161616" };
    font-size: ${(props)=>props.fontSize ? props.fontSize  : ".9em"}; 
        &:hover{
        color: ${(props)=>props.color ? props.color :"#FFB673" };
    }  
`;

export const Wrapper = styled(NavItemWrapper)`
    display: flex;
    flex-direction: ${(props)=>props.flexDirection ?  props.flexDirection  : "row"};
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
    background-color: #FCFCFC;
    position: fixed;
    width: 100%;
    Z-INDEX: 1000;
    top: 0;
`;

/**navbar vertical*/
export const ContainerDivVertical = styled.div`
    width: 80px;
    height: 100%;
    margin-top:60px;
    position: fixed;
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    background-color: #FCFCFC;
    position: fixed;
    Z-INDEX: 1000;
    top: 0;
`;
export const WrapperSideBar = styled(NavItemWrapper)`
    display: flex;
    flex-direction: ${(props)=>props.flexDirection ?  props.flexDirection  : "row"};
    align-items:  ${(props)=>props.alignItems ? props.alignItems  : "flex-start"};
    height:100%;
    justify-content: space-evenly;
    cursor:pointer;
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
  background-color: ${(props) => props.primary ? Colors.light.main : "#FFB673"};
  font-size: 1em;
  margin: 2px;
  padding: 1px;
  border: ${(props) => props.border ? props.border : "2px solid #FFB673"};
  border-radius: 3px;
`;