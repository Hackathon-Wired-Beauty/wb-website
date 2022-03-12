import * as React from "react";
import "../App.css";
import { useTranslation } from "react-i18next";
import { Colors } from "../utils/Colors";
import { Text } from "../components/Text";
import {
  Alert,
  Button,
  Card,
  Grid,
  MenuItem,
  Select,
  Snackbar,
  SnackbarCloseReason,
  TextField,
} from "@mui/material";
import { ErrorLoginResponse, login, LoginResponse } from "../api/login";
import { Navigate } from "react-router-dom";
import { getUser } from "../utils/getUser";
import { register } from "../api/register";
import { getUsers, UsersResponse } from "../api/getUsers";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CSVReader, { IFileInfo } from "react-csv-reader";
import { CSVInterface } from "../utils/interfaces";
import { addReport } from "../api/addReport";

interface AdminProps {}

export const AdminScreen: React.FunctionComponent<AdminProps> = () => {
  const { t } = useTranslation();

  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [error, setError] = React.useState("");
  const [redirectTo, setRedirectTo] = React.useState("");

  const [users, setUsers] = React.useState<UsersResponse[]>([]);

  interface SnackBar {
    open: boolean;
    message: string;
    type: "success" | "info" | "warning" | "error";
  }
  const [open, setOpen] = React.useState(false);
  const [snackBar, setSnackBar] = React.useState<SnackBar>({
    open: false,
    message: "",
    type: "success",
  });

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateAccount = () => {
    (async () => {
      const registerRes = await register(
        firstname,
        lastname,
        email,
        password,
        passwordConfirm
      );

      if (registerRes.hasOwnProperty("title")) {
        const error: ErrorLoginResponse = registerRes;
        setError(error.message);
      } else {
        setSnackBar({
          open: true,
          message:
            "The user has been created successfully! You can now give the credentials to the client",
          type: "success",
        });
      }

      console.log(registerRes);
    })();
  };

  const papaparseOptions = {
    header: false,
    dynamicTyping: true,
    skipEmptyLines: true,
  };

  const [companyName, setCompanyName] = React.useState("");
  const [client, setClient] = React.useState(-1);
  const [csvLoaded, setCsvLoaded] = React.useState(false);
  const [csvData, setCsvData] = React.useState<CSVInterface[]>([]);

  const getDataFromCSV = (
    data: any[],
    fileInfo: IFileInfo,
    originalFile?: File | undefined
  ) => {
    setSnackBar({
      open: true,
      message: "The CSV file has been loaded successfully!",
      type: "success",
    });
    setCsvLoaded(true);
    console.log(data);
    setCsvData(data);
  };
  const getErrorFromCSV = () => {};

  const handleGenerateReport = () => {
    const reportData = {
      companyName: companyName,
      client: users[client - 1],
      data: csvData,
    };

    (async () => {
      const reportRes = await addReport(
        reportData.client.id,
        JSON.stringify(reportData)
      );

      if (reportRes !== undefined) {
        if (reportRes.title === "report_created") {
          setSnackBar({
            open: true,
            message: "The report has been created successfully!",
            type: "success",
          });
        } else {
          setSnackBar({
            open: true,
            message: reportRes.message,
            type: "error",
          });
        }
      }
    })();
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setRedirectTo("/login");
  };

  React.useEffect(() => {
    const user = getUser();
    if (user === null) {
      setRedirectTo("/login");
    } else if (user.role !== "ADMIN") {
      setRedirectTo("/dashboard");
    } else {
      // Get users
      (async () => {
        const users = await getUsers();
        setUsers(users);
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
          onClose={handleClose}
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
            <Grid item xs={6}>
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
                  Generate report
                </Text>
                <div style={{ margin: "10px" }}></div>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={client}
                  label="Client"
                  fullWidth
                  onChange={(e) => setClient(e.target.value as number)}
                >
                  <MenuItem value={-1}>Select the client...</MenuItem>
                  {users.map((user) => (
                    <MenuItem
                      key={user.id}
                      value={user.id}
                    >{`${user.firstname} ${user.lastname} (${user.email})`}</MenuItem>
                  ))}
                </Select>
                <div style={{ margin: "10px" }}></div>
                <TextField
                  id="entreprise-name"
                  label="Company name"
                  variant="outlined"
                  type={"text"}
                  fullWidth
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <div style={{ margin: "10px" }}></div>
                <CSVReader
                  cssClass="csv-reader-input"
                  onFileLoaded={getDataFromCSV}
                  onError={getErrorFromCSV}
                  parserOptions={papaparseOptions}
                  inputId="ObiWan"
                  inputName="ObiWan"
                  inputStyle={{ color: "red" }}
                />
                <div style={{ margin: "20px" }}></div>
                {csvLoaded && companyName !== "" && client !== -1 && (
                  <Button
                    variant="contained"
                    onClick={() => handleGenerateReport()}
                  >
                    Create the report for {companyName}
                  </Button>
                )}
              </Card>
            </Grid>
            <Grid item xs={6}>
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
                  Create client account
                </Text>
                <div style={{ margin: "10px" }}></div>
                <TextField
                  id="firstname"
                  label="Firstname"
                  variant="outlined"
                  fullWidth
                  type={"text"}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <div style={{ margin: "10px" }}></div>
                <TextField
                  id="lastname"
                  label="Lastname"
                  variant="outlined"
                  type={"text"}
                  fullWidth
                  onChange={(e) => setLastname(e.target.value)}
                />
                <div style={{ margin: "10px" }}></div>
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  type={"email"}
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
                <TextField
                  id="password-confirm"
                  label="Confirm password"
                  variant="outlined"
                  type={"password"}
                  fullWidth
                  onChange={(e) => setPasswordConfirm(e.target.value)}
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
                <Button
                  variant="contained"
                  onClick={() => handleCreateAccount()}
                >
                  Create the account
                </Button>
              </Card>
            </Grid>
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
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Firstname</TableCell>
                        <TableCell>Lastname</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>UUID</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users.map((row) => (
                        <TableRow
                          key={row.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.id}
                          </TableCell>{" "}
                          <TableCell component="th" scope="row">
                            {row.firstname}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.lastname}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.email}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.role}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.uuid}
                          </TableCell>
                        </TableRow>
                      ))}
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
