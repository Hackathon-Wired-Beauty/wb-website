import * as React from "react";
import "../App.css";
import { useTranslation } from "react-i18next";
import { Colors } from "../utils/Colors";
import { Text } from "../components/Text";
import { Button, Card, Grid, TextField } from "@mui/material";
import { ErrorLoginResponse, login, LoginResponse } from "../api/login";
import { Navigate } from "react-router-dom";

interface LoginProps {}

export const LoginScreen: React.FunctionComponent<LoginProps> = () => {
  const { t } = useTranslation();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [redirectTo, setRedirectTo] = React.useState("");

  const handleLogin = () => {
    (async () => {
      const loginRes = await login(email, password);
      if (loginRes.hasOwnProperty("title")) {
        const error: ErrorLoginResponse = loginRes;
        setError(error.message);
      } else {
        setError("");
        const success: LoginResponse = loginRes;
        localStorage.setItem("user", JSON.stringify(success));
        if (success.role === "ADMIN") {
          setRedirectTo("/admin");
        } else {
          setRedirectTo("/dashboard");
        }
      }

      console.log(loginRes);
    })();
  };

  React.useEffect(() => {}, []);
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.light.main,
        }}
      >
        <div
          style={{
            zIndex: 2,
          }}
        >
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            style={{
              height: "100vh",
              width: "100vw",
            }}
          >
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <Card
                variant="elevation"
                raised
                style={{
                  padding: "20px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Text
                  size="30px"
                  color={Colors.light.texts}
                  component="p"
                  data-aos="fade-up"
                  weigth="800"
                  align="center"
                  uppercase
                >
                  Login
                </Text>
                <div style={{ margin: "10px" }}></div>
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div style={{ margin: "10px" }}></div>
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  type={"password"}
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div style={{ margin: "10px" }}></div>
                {error !== "" && (
                  <Text
                    size="12px"
                    color={"red"}
                    component="p"
                    data-aos="fade-up"
                    weigth="300"
                    align="center"
                  >
                    {error}
                  </Text>
                )}
                <div style={{ margin: "20px" }}></div>
                <Button variant="contained" onClick={() => handleLogin()}>
                  Login
                </Button>
                {redirectTo !== "" && <Navigate replace to={redirectTo} />}
              </Card>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
