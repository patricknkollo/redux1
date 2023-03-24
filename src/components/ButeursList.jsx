import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./Page.css";
import Rightbar from "./Rightbar";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setButeurs } from "../redux/actions/ApiButeursActionsFunctions";
import { setPays } from "../redux/actions/ApiPaysActionsFunctions";

const drawerWidth = 240;

function Buteurs(props) {
  //const [rows, setRows] = React.useState([]);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: (<theme className="palette action"></theme>).hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const myDispatch = useDispatch();

  const arrayqlq = useSelector((state) => state.arrayQlcq);
  const pays = useSelector((state) => state.pays);
  const buteurs = useSelector((state) => state.buteurs);

  React.useEffect(() => {
    console.log(arrayqlq);
  }, [arrayqlq]);

  React.useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get(
        "http://localhost:8080/api/buteur/controller/scorers"
      );
      myDispatch(setButeurs(response.data));
      console.log("ici les buteurs de l'etat");
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  React.useEffect(() => {
    async function fetchData2() {
      // You can await here
      const response = await axios.get(
        "http://localhost:8080/api/countries/controller/countries"
      );
      myDispatch(setPays(response.data));
    }
    fetchData2();
  }, []);

  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <Sidebar />
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            <Sidebar />
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar>
            <Typography sx={{ marginTop: 10, alignContent: "flex-start" }}>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <div>{pays?.length && pays[0]?.nom}</div>
            <div>{arrayqlq?.length ? arrayqlq[0]?.name : "-"}</div>
          </Toolbar>
          <Toolbar />
          <div className="page-heart">
            <div className="left-inside">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <TableCell>id</TableCell>
                      <TableCell align="right">joueurid&nbsp;(g)</TableCell>
                      <TableCell align="right">nom</TableCell>
                      <TableCell align="right">prenom</TableCell>
                      <TableCell align="right">buts</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {buteurs?.map((row) => (
                      <StyledTableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.buteurid}
                        </TableCell>

                        <TableCell align="right">{row.joueurid}</TableCell>
                        <TableCell align="right">{row.nom}</TableCell>
                        <TableCell align="right">{row.prenom}</TableCell>
                        <TableCell align="right">{row.buts}</TableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <Divider />
            <div className="right-inside">
              <Rightbar />
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}

Buteurs.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Buteurs;
