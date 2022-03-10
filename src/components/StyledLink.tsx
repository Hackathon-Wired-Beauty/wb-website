import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus, &:hover{
        color:white;
    }, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default (props: any) => <StyledLink {...props} />;