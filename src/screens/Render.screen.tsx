import * as React from "react";
import "../App.css";
import { useTranslation } from "react-i18next";
import { Colors } from "../utils/Colors";
import { Text } from "../components/Text";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Navigate } from "react-router-dom";
import { UsersResponse } from "../api/getUsers";
import { CSVInterface } from "../utils/interfaces";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BarChart, Bar, Cell, Legend } from "recharts";

interface RenderProps {}

interface ReportData {
  companyName: string;
  client: UsersResponse;
  data: CSVInterface[];
}

export const RenderScreen: React.FunctionComponent<RenderProps> = () => {
  const { t } = useTranslation();

  const [redirectTo, setRedirectTo] = React.useState<string>("");
  const [headers, setHeaders] = React.useState([]);
  const [rd, setRd] = React.useState<ReportData>();
  const [datas, setDatas] = React.useState<any>([]);

  React.useEffect(() => {
    const lsReportData = localStorage.getItem("reportData");

    if (lsReportData === null) {
      setRedirectTo("/");
    } else {
      const reportData: ReportData[] = JSON.parse(lsReportData);
      // @ts-ignore
      setRd(reportData);
      // @ts-ignore
      setHeaders(reportData.data[0]);
      // @ts-ignore
      setDatas(reportData.data.slice(1));

      console.log(headers);
    }
  }, []);
  return (
    <div>
      {redirectTo !== "" && <Navigate replace to={redirectTo} />}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <div
        style={{
          height: "25vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.dark.main,
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
              height: "25vh",
              width: "100vw",
            }}
          >
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Text
                size="45px"
                color={Colors.dark.texts}
                component="p"
                data-aos="fade-up"
                weigth="800"
                align="center"
                uppercase
              >
                Report for {rd?.companyName}
              </Text>
              <Text
                size="18px"
                color={Colors.dark.texts}
                component="p"
                data-aos="fade-up"
                weigth="200"
                align="center"
              >
                {`This report is addressed to ${rd?.client.firstname} ${rd?.client.lastname} (${rd?.client.email})`}
              </Text>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </div>
      </div>
      <img
        style={{
          marginTop: "-10px",
        }}
        src={require("../assets/images/wave.svg").default}
      />
      {/* @ts-ignore */}
      {datas?.length !== 0 &&
        datas.map((data: any, index: number) => {
          console.log(headers);

          return (
            <div key={index}>
              <Text
                size="24px"
                color={Colors.light.texts}
                component="p"
                data-aos="fade-up"
                weigth="300"
                align="center"
                uppercase
              >
                Datas for the user <b>{data[0]}</b>
              </Text>
              <div style={{ margin: "20px" }}></div>

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Date</TableCell>
                      <TableCell align="center">Session</TableCell>
                      <TableCell align="center">Product code</TableCell>
                      <TableCell align="center">Zone code</TableCell>
                      <TableCell align="center">Device S/N</TableCell>
                      <TableCell align="center">UV Index</TableCell>
                      <TableCell align="center">O-Level</TableCell>
                      <TableCell align="center">Lng/Lat</TableCell>
                      <TableCell align="center">Humidity</TableCell>
                      <TableCell align="center">Temperature</TableCell>
                      <TableCell align="center">Usual SP</TableCell>
                      <TableCell align="center">Product type</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableCell align="center">
                      {data[1].toString().substring(0, 4)}/
                      {data[1].toString().substring(4, 6)}/
                      {data[1].toString().substring(6, 8)}
                    </TableCell>
                    <TableCell align="center">
                      {data[2] === 1
                        ? "Before application"
                        : data[2] === 2
                        ? "After application"
                        : data[2] === 3
                        ? "7 days after"
                        : "14 days after"}
                    </TableCell>
                    <TableCell align="center">{data[14]}</TableCell>
                    <TableCell align="center">{data[15]}</TableCell>
                    <TableCell align="center">{data[16]}</TableCell>
                    <TableCell align="center">{data[21]}</TableCell>
                    <TableCell align="center">{data[22]}</TableCell>
                    <TableCell align="center">
                      {data[17]}/{data[18]}
                    </TableCell>
                    <TableCell align="center">{data[19]}</TableCell>
                    <TableCell align="center">
                      {data[20]}°C ({((data[20] * 9) / 5 + 32).toFixed(1)}°F)
                    </TableCell>
                    <TableCell align="center">{data[3]}</TableCell>
                    <TableCell align="center">{data[4]}</TableCell>
                  </TableBody>
                  <TableBody>
                    <TableCell align="center">
                      {data[23].toString().substring(0, 4)}/
                      {data[23].toString().substring(4, 6)}/
                      {data[23].toString().substring(6, 8)}
                    </TableCell>
                    <TableCell align="center">
                      {data[24] === 1
                        ? "Before application"
                        : data[24] === 2
                        ? "After application"
                        : data[24] === 3
                        ? "7 days after"
                        : "14 days after"}
                    </TableCell>
                    <TableCell align="center">{data[35]}</TableCell>
                    <TableCell align="center">{data[36]}</TableCell>
                    <TableCell align="center">{data[37]}</TableCell>
                    <TableCell align="center">{data[42]}</TableCell>
                    <TableCell align="center">{data[43]}</TableCell>
                    <TableCell align="center">
                      {data[38]}/{data[39]}
                    </TableCell>
                    <TableCell align="center">{data[40]}</TableCell>
                    <TableCell align="center">
                      {data[41]}°C ({((data[41] * 9) / 5 + 32).toFixed(1)}°F)
                    </TableCell>
                    <TableCell align="center">{data[25]}</TableCell>
                    <TableCell align="center">{data[26]}</TableCell>
                  </TableBody>
                  <TableBody>
                    <TableCell align="center">
                      {data[44].toString().substring(0, 4)}/
                      {data[44].toString().substring(4, 6)}/
                      {data[44].toString().substring(6, 8)}
                    </TableCell>
                    <TableCell align="center">
                      {data[45] === 1
                        ? "Before application"
                        : data[45] === 2
                        ? "After application"
                        : data[45] === 3
                        ? "7 days after"
                        : "14 days after"}
                    </TableCell>
                    <TableCell align="center">{data[56]}</TableCell>
                    <TableCell align="center">{data[57]}</TableCell>
                    <TableCell align="center">{data[58]}</TableCell>
                    <TableCell align="center">{data[63]}</TableCell>
                    <TableCell align="center">{data[64]}</TableCell>
                    <TableCell align="center">
                      {data[59]}/{data[60]}
                    </TableCell>
                    <TableCell align="center">{data[61]}</TableCell>
                    <TableCell align="center">
                      {data[62]}°C ({((data[62] * 9) / 5 + 32).toFixed(1)}°F)
                    </TableCell>
                    <TableCell align="center">{data[46]}</TableCell>
                    <TableCell align="center">{data[47]}</TableCell>
                  </TableBody>
                  <TableBody>
                    <TableCell align="center">
                      {data[65].toString().substring(0, 4)}/
                      {data[65].toString().substring(4, 6)}/
                      {data[65].toString().substring(6, 8)}
                    </TableCell>
                    <TableCell align="center">
                      {data[66] === 1
                        ? "Before application"
                        : data[66] === 2
                        ? "After application"
                        : data[66] === 3
                        ? "7 days after"
                        : "14 days after"}
                    </TableCell>
                    <TableCell align="center">{data[78]}</TableCell>
                    <TableCell align="center">{data[79]}</TableCell>
                    <TableCell align="center">{data[80]}</TableCell>
                    <TableCell align="center">{data[85]}</TableCell>
                    <TableCell align="center">{data[86]}</TableCell>
                    <TableCell align="center">
                      {data[81]}/{data[82]}
                    </TableCell>
                    <TableCell align="center">{data[83]}</TableCell>
                    <TableCell align="center">
                      {data[84]}°C ({((data[84] * 9) / 5 + 32).toFixed(1)}°F)
                    </TableCell>
                    <TableCell align="center">{data[67]}</TableCell>
                    <TableCell align="center">{data[68]}</TableCell>
                  </TableBody>
                </Table>
              </TableContainer>
              <div style={{ margin: "20px" }}></div>
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                direction={"row"}
                rowSpacing={10}
              >
                <Grid
                  item
                  xs={6}
                  style={{
                    height: "400px",
                  }}
                >
                  <Text
                    size="18px"
                    color={Colors.light.texts}
                    component="p"
                    data-aos="fade-up"
                    weigth="500"
                    align="center"
                  >
                    The product irritates my skin ? (1 = Strongly agree to 5 =
                    Strongly disagree)
                  </Text>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      width={500}
                      height={300}
                      data={[
                        {
                          name: "Before",
                          response: data[6],
                        },
                        {
                          name: "After",
                          response: data[28],
                        },
                        {
                          name: "D+7",
                          response: data[49],
                        },
                        {
                          name: "D+14",
                          response: data[70],
                        },
                      ]}
                      margin={{
                        top: 5,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="response" fill={Colors.dark.accent} />
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{
                    height: "400px",
                  }}
                >
                  <Text
                    size="18px"
                    color={Colors.light.texts}
                    component="p"
                    data-aos="fade-up"
                    weigth="500"
                    align="center"
                  >
                    The product is effective ? (1 = Strongly agree to 5 =
                    Strongly disagree)
                  </Text>
                  <ResponsiveContainer width="100%" height={"100%"}>
                    <BarChart
                      width={500}
                      height={300}
                      data={[
                        {
                          name: "Before",
                          response: data[5],
                        },
                        {
                          name: "After",
                          response: data[27],
                        },
                        {
                          name: "D+7",
                          response: data[48],
                        },
                        {
                          name: "D+14",
                          response: data[69],
                        },
                      ]}
                      margin={{
                        top: 5,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="response" fill={Colors.dark.main} />
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>

                <Grid
                  item
                  xs={6}
                  style={{
                    height: "400px",
                  }}
                >
                  <Text
                    size="18px"
                    color={Colors.light.texts}
                    component="p"
                    data-aos="fade-up"
                    weigth="500"
                    align="center"
                  >
                    My skin Is comfortable ? (1 = Strongly agree to 5 = Strongly
                    disagree)
                  </Text>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      width={500}
                      height={300}
                      data={[
                        {
                          name: "Before",
                          response: data[7],
                        },
                        {
                          name: "After",
                          response: data[29],
                        },
                        {
                          name: "D+7",
                          response: data[50],
                        },
                        {
                          name: "D+14",
                          response: data[71],
                        },
                      ]}
                      margin={{
                        top: 5,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="response" fill={Colors.dark.accent} />
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{
                    height: "400px",
                  }}
                >
                  <Text
                    size="18px"
                    color={Colors.light.texts}
                    component="p"
                    data-aos="fade-up"
                    weigth="500"
                    align="center"
                  >
                    Instant hydration ? (1 = Strongly agree to 5 = Strongly
                    disagree)
                  </Text>
                  <ResponsiveContainer width="100%" height={"100%"}>
                    <BarChart
                      width={500}
                      height={300}
                      data={[
                        {
                          name: "Before",
                          response: data[8],
                        },
                        {
                          name: "After",
                          response: data[30],
                        },
                        {
                          name: "D+7",
                          response: data[51],
                        },
                        {
                          name: "D+14",
                          response: data[72],
                        },
                      ]}
                      margin={{
                        top: 5,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="response" fill={Colors.dark.main} />
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>

                <Grid
                  item
                  xs={6}
                  style={{
                    height: "400px",
                  }}
                >
                  <Text
                    size="18px"
                    color={Colors.light.texts}
                    component="p"
                    data-aos="fade-up"
                    weigth="500"
                    align="center"
                  >
                    Instant anti-dullness ? (1 = Strongly agree to 5 = Strongly
                    disagree)
                  </Text>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      width={500}
                      height={300}
                      data={[
                        {
                          name: "Before",
                          response: data[9],
                        },
                        {
                          name: "After",
                          response: data[31],
                        },
                        {
                          name: "D+7",
                          response: data[52],
                        },
                        {
                          name: "D+14",
                          response: data[73],
                        },
                      ]}
                      margin={{
                        top: 5,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="response" fill={Colors.dark.accent} />
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{
                    height: "400px",
                  }}
                >
                  <Text
                    size="18px"
                    color={Colors.light.texts}
                    component="p"
                    data-aos="fade-up"
                    weigth="500"
                    align="center"
                  >
                    Instant plump skin ? (1 = Strongly agree to 5 = Strongly
                    disagree)
                  </Text>
                  <ResponsiveContainer width="100%" height={"100%"}>
                    <BarChart
                      width={500}
                      height={300}
                      data={[
                        {
                          name: "Before",
                          response: data[10],
                        },
                        {
                          name: "After",
                          response: data[32],
                        },
                        {
                          name: "D+7",
                          response: data[53],
                        },
                        {
                          name: "D+14",
                          response: data[74],
                        },
                      ]}
                      margin={{
                        top: 5,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="response" fill={Colors.dark.main} />
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>

                <Grid
                  item
                  xs={6}
                  style={{
                    height: "400px",
                  }}
                >
                  <Text
                    size="18px"
                    color={Colors.light.texts}
                    component="p"
                    data-aos="fade-up"
                    weigth="500"
                    align="center"
                  >
                    Instant not greasy ? (1 = Strongly agree to 5 = Strongly
                    disagree)
                  </Text>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      width={500}
                      height={300}
                      data={[
                        {
                          name: "Before",
                          response: data[11],
                        },
                        {
                          name: "After",
                          response: data[33],
                        },
                        {
                          name: "D+7",
                          response: data[54],
                        },
                        {
                          name: "D+14",
                          response: data[75],
                        },
                      ]}
                      margin={{
                        top: 5,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="response" fill={Colors.dark.accent} />
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{
                    height: "400px",
                  }}
                >
                  <Text
                    size="18px"
                    color={Colors.light.texts}
                    component="p"
                    data-aos="fade-up"
                    weigth="500"
                    align="center"
                  >
                    Compared to the other half of your face, do you feel anti-OX
                    effect from this product in this day? ? (1 = Strongly agree
                    to 5 = Strongly disagree)
                  </Text>
                  <ResponsiveContainer width="100%" height={"100%"}>
                    <BarChart
                      width={500}
                      height={300}
                      data={[
                        {
                          name: "Before",
                          response: data[12],
                        },
                        {
                          name: "After",
                          response: data[34],
                        },
                        {
                          name: "D+7",
                          response: data[55],
                        },
                        {
                          name: "D+14",
                          response: data[76],
                        },
                      ]}
                      margin={{
                        top: 5,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="response" fill={Colors.dark.main} />
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>
              </Grid>
              <div style={{ margin: "100px" }}></div>
            </div>
          );
        })}

      <img
        style={{
          marginTop: "-10px",
        }}
        src={require("../assets/images/wave_2.svg").default}
      />
    </div>
  );
};
