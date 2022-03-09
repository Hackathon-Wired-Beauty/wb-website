import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
import React from "react";
import { Colors } from "../utils/Colors";
import MouseRounded from "@mui/icons-material/MouseRounded";

interface MouseScrollProps {}

const pulseAnim = keyframes`${pulse}`;

const StyledMouseScroll = styled.div`
  animation: 1s ${pulseAnim} infinite;
`;

export const MouseScroll: React.FunctionComponent<MouseScrollProps> = () => {
  return (
    <StyledMouseScroll>
      <MouseRounded
        style={{
          width: "100%",
          textAlign: "center",
          color: Colors.dark.texts,
          fontSize: "40px",
        }}
      />
    </StyledMouseScroll>
  );
};
