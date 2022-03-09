import React from "react";
import styled from "styled-components";
import { Colors } from "../utils/Colors";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  fullscreen?: boolean;
  backgroundColor?: string;
};
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  z-index: 1;
`;

const StyledFullHeightContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = ({
  children,
  fullscreen,
  backgroundColor,
  ...otherProps
}: ContainerProps) =>
  fullscreen ? (
    <StyledFullHeightContainer
      {...otherProps}
      style={{
        backgroundColor: backgroundColor ?? undefined,
      }}
    >
      {children}
    </StyledFullHeightContainer>
  ) : (
    <StyledContainer
      {...otherProps}
      style={{
        backgroundColor: backgroundColor ?? undefined,
      }}
    >
      {children}
    </StyledContainer>
  );
