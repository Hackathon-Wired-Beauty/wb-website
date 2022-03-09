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
          <Grid
            item xs={4}
          >
            <Grid>
              <Grid>
                <Avatar
                  alt="Remy Sharp"
                  src={image}
                  sx={{ width: 150, height: 150, marginLeft: "30%" }}
                />
              </Grid>  
              <Grid>
                <Text
                  color={Colors.light.texts}
                  size="48px"
                  component={"p"}
                  weigth="bold"
                  uppercase
                  style={{ 
                    marginTop: "10px", wordWrap: "break-word",
                  }}
                  align={"center"}
                >
                  {title}
                </Text>
              </Grid>
            </Grid>
          </Grid>
          
          <Grid item xs={8}>
            <Text
              color={Colors.light.texts}
              size="24px"
              component={"p"}
              weigth="200"
              align="right"
              style={{ marginLeft: "130px"}}
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
          <Grid item xs={8}>
            <Text
              color={Colors.light.texts}
              size="24px"
              component={"p"}
              weigth="200"
              align="left"
              style={{ marginRight: "130px"}}
            >
              {children}
            </Text>
          </Grid>
          <Grid
            item xs={4}>
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
                  sx={{ width: 150, height: 150, marginRight: "30%" }}
                />
              </Grid>
              <Grid>
                <Text
                  color={Colors.light.texts}
                  size="48px"
                  component={"p"}
                  weigth="600"
                  uppercase
                  style={{ 
                    marginTop: "10px", wordWrap: "break-word",
                  }}
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
