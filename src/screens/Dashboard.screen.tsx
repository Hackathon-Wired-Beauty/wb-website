import * as React from "react";
import "../App.css";
import { useTranslation } from "react-i18next";
import { Colors } from "../utils/Colors";
import { Text } from "../components/Text";
import { Alert, Button, Card, Grid, Snackbar } from "@mui/material";
import { Navigate } from "react-router-dom";
import { getUser } from "../utils/getUser";
import { UsersResponse } from "../api/getUsers";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getReports, ReportsResponse } from "../api/getReports";
import { ReportData } from "./Render.screen";

interface DashboardProps {}

export const DashboardScreen: React.FunctionComponent<DashboardProps> = () => {
  const { t } = useTranslation();

  const [redirectTo, setRedirectTo] = React.useState("");

  const [users, setUsers] = React.useState<UsersResponse[]>([]);
  const [reports, setReports] = React.useState<ReportsResponse[]>([]);

  interface SnackBar {
    open: boolean;
    message: string;
    type: "success" | "info" | "warning" | "error";
  }
  const [snackBar, setSnackBar] = React.useState<SnackBar>({
    open: false,
    message: "",
    type: "success",
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("reportData");
    setRedirectTo("/login");
  };

  const handleOpenReport = (json: string) => {
    localStorage.setItem("reportData", json);
    setRedirectTo("/render");
  };

  React.useEffect(() => {
    const user = getUser();
    if (user === null) {
      setRedirectTo("/login");
    } else if (user.role !== "USER") {
      setRedirectTo("/admin");
    } else {
      // Get users
      (async () => {
        const reports = await getReports();
        if (reports !== null) {
          if (reports.hasOwnProperty("title")) {
            setSnackBar({
              open: true,
              message: reports.error,
              type: "error",
            });
          } else {
            setReports(reports);
          }
        }
      })();
    }
  }, []);
  return (
    <div>
      {redirectTo !== "" && <Navigate replace to={redirectTo} />}
      <Snackbar
        open={snackBar.open}
        autoHideDuration={6000}
        onClose={() =>
          setSnackBar({
            open: false,
            message: "",
            type: "success",
          })
        }
      >
        <Alert
          onClose={() =>
            setSnackBar({
              open: false,
              message: "",
              type: "success",
            })
          }
          severity={snackBar.type}
          sx={{ width: "100%" }}
        >
          {snackBar.message}
        </Alert>
      </Snackbar>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        direction="row"
        style={{
          backgroundColor: Colors.light.main,
          padding: "1rem",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 3,
        }}
      >
        <Grid item xs={6}>
          <Text
            size="30px"
            color={Colors.dark.texts}
            component="p"
            data-aos="fade-up"
            weigth="300"
            align="center"
          >
            Hello <b>{getUser()?.firstname}</b> !
          </Text>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" fullWidth onClick={() => handleLogout()}>
            Logout
          </Button>
        </Grid>
      </Grid>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.light.background,
          marginTop: "75px",
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
            spacing={5}
          >
            <Grid item xs={12}>
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
                  size="40px"
                  color={Colors.light.texts}
                  component="h1"
                  data-aos="fade-up"
                  weigth="800"
                  align="center"
                >
                  Your reports
                </Text>
                <div style={{ margin: "20px" }}></div>

                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Id</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Company</TableCell>
                        <TableCell align="center">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {reports.map((r) => {
                        const reportJson: ReportData = JSON.parse(r.json);

                        return (
                          <TableRow
                            key={r.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell
                              align="center"
                              component="th"
                              scope="row"
                            >
                              {r.id}
                            </TableCell>{" "}
                            <TableCell
                              align="center"
                              component="th"
                              scope="row"
                            >
                              {new Date(r.createdAt).toUTCString()}
                            </TableCell>
                            <TableCell
                              align="center"
                              component="th"
                              scope="row"
                            >
                              {reportJson.companyName}
                            </TableCell>
                            <TableCell
                              align="center"
                              component="th"
                              scope="row"
                            >
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleOpenReport(r.json)}
                              >
                                Open the report
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
