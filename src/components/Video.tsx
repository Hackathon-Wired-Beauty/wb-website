import * as React from "react";
import styled from "styled-components";
import { Colors } from "../utils/Colors";

export const VideoBg = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: ${Colors.dark.background};
  z-index: 0;
`;
