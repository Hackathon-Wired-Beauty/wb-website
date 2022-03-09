import * as React from "react";
import styled from "styled-components";
import { Colors } from "../utils/Colors";

const StyledScreenFilter = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: ${Colors.dark.background};
  z-index: 0;
`;

interface ScreenFilterProps {
  color?: string;
  opacity?: number;
}

export const ScreenFilter = ({ color, opacity }: ScreenFilterProps) => (
  <StyledScreenFilter
    style={{
      backgroundColor: color ?? "#000",
      opacity: opacity ?? 0.5,
      zIndex: 1,
    }}
  />
);
