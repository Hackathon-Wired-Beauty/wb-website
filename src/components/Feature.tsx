import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { Colors } from "../utils/Colors";
import { Text } from "./Text";

interface FeatureProps {
  imagePosition: "left" | "right";
  image: string;
  title: string;
  children: string;
  animation: "from-left" | "from-right";
  padding?: string;
  spacing?: string;
}

export const Feature: React.FC<FeatureProps> = ({
  imagePosition,
  image,
  title,
  children,
  animation,
  padding,
  spacing,
}) => {
  return (
    <div
      data-aos={animation === "from-left" ? "fade-left" : "fade-right"}
      data-aos-duration="1000"
    >
      {imagePosition === "left" && (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{
            paddingLeft: padding ?? 0,
            paddingRight: padding ?? 0,
            marginTop: spacing ?? 0,
            marginBottom: spacing ?? 0,
          }}
        >
          <Grid item xs={2}>
            <Grid
              container
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid>
                <Avatar
                  alt="Remy Sharp"
                  src={image}
                  sx={{ width: 100, height: 100 }}
                />
              </Grid>
              <Grid>
                <Text
                  color={Colors.light.texts}
                  size="20px"
                  component={"p"}
                  weigth="600"
                  uppercase
                  style={{ marginTop: "10px" }}
                  align={"center"}
                >
                  {title}
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10} textAlign={"center"}>
            <Text
              color={Colors.light.texts}
              size="18px"
              component={"p"}
              weigth="200"
              align="right"
            >
              {children}
            </Text>
          </Grid>
        </Grid>
      )}

      {imagePosition === "right" && (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{
            paddingLeft: padding ?? 0,
            paddingRight: padding ?? 0,
            marginTop: spacing ?? 0,
            marginBottom: spacing ?? 0,
          }}
        >
          <Grid item xs={10} textAlign={"center"}>
            <Text
              color={Colors.light.texts}
              size="18px"
              component={"p"}
              weigth="200"
              align="left"
            >
              {children}
            </Text>
          </Grid>
          <Grid item xs={2}>
            <Grid
              container
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid>
                <Avatar
                  alt="Remy Sharp"
                  src={image}
                  sx={{ width: 100, height: 100 }}
                />
              </Grid>
              <Grid>
                <Text
                  color={Colors.light.texts}
                  size="20px"
                  component={"p"}
                  weigth="600"
                  uppercase
                  style={{ marginTop: "10px" }}
                  align="center"
                >
                  {title}
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
};
