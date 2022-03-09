/**container*/
import styled from "styled-components";
/**Components*/
import{NavBarText as NavText} from "../components/NavBarText";
import{ItemWrapper as NavItemWrapper} from "../components/ItemWrapper";

/**text nav*/
export const Text = styled(NavText)`
    color:${(props)=>props.color ? props.color :"#161616" };
    font-size: ${(props)=>props.fontSize ? props.fontSize  : ".9em"}; 
    font-family: "Neue Montreal Medium";   
`;

export const Wrapper = styled(NavItemWrapper)`
    display: flex;
    flex-direction: ${(props)=>props.flexDirection ?  props.flexDirection  : "column"};
    align-items:  ${(props)=>props.alignItems ? props.alignItems  : "flex-start"};
    padding: .1em;
    cursor:pointer;
    &:hover{
        border:1px solid #FFB673;
        border-radius: .2em;
    }
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
    width: 20%;
    height: 100%;
    position: fixed;
    justify-content:space-evenly;
    align-items: flex-start;
    color: white;
    background-color: FCFCFC;
`;

/** logo*/
export const Logo = styled.img`
    width: 3em;
    padding: .2em .1em;
`;

/**navbar button*/
export const NavbarButton = styled.button`
    
`;