import * as React from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Toolbar from "@mui/material/Toolbar";

import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { Button, Stack } from "@mui/material";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";

import StadiumSharpIcon from "@mui/icons-material/StadiumSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import GroupsSharpIcon from "@mui/icons-material/GroupsSharp";
import SportsIcon from "@mui/icons-material/Sports";

function Sidebar(props) {
  const drawer = (
    <div>
      <Toolbar />

      <Divider />
      <List>
        <ListItem
          key={"Email"}
          disablePadding
          component="a"
          href="http://localhost:3000/buteurs"
          style={{ color: "initial" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <SportsSoccerIcon style={{ color: "#93C572" }} />
            </ListItemIcon>
            <ListItemText primary={"buteurs"} styled={{ color: "#000000" }} />
          </ListItemButton>
        </ListItem>
        <ListItem
          /* key={text} */ disablePadding
          component="a"
          href="http://localhost:3000/pays"
          style={{ color: "initial" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <LanguageSharpIcon style={{ color: "#FFEA00" }} />
            </ListItemIcon>
            <ListItemText primary="pays" />
          </ListItemButton>
        </ListItem>
        <ListItem
          /* key={text} */ disablePadding
          component="a"
          href="http://localhost:3000/referees"
          style={{ color: "initial" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <SportsIcon style={{ color: "#93C572" }} />
            </ListItemIcon>
            <ListItemText primary="referees" />
          </ListItemButton>
        </ListItem>

        <ListItem
          /* key={text} */ disablePadding
          component="a"
          href="http://localhost:3000/match"
          style={{ color: "initial" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <StadiumSharpIcon />
            </ListItemIcon>
            <ListItemText primary="matches" />
          </ListItemButton>
        </ListItem>
        {/* ))} */}
      </List>
      <Divider />
      <List>
        <ListItem
          key={"Email"}
          disablePadding
          component="a"
          href="http://localhost:3000/persons"
          style={{ color: "initial" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <PersonSharpIcon style={{ color: "#93C572" }} />
            </ListItemIcon>
            <ListItemText primary={"persons"} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"Email"}
          disablePadding
          component="a"
          href="http://localhost:3000/joueurs"
          style={{ color: "initial" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <PersonSharpIcon style={{ color: "#93C572" }} />
            </ListItemIcon>
            <ListItemText primary={"joueurs"} />
          </ListItemButton>
        </ListItem>
        <ListItem
          /* key={text} */ disablePadding
          component="a"
          href="http://localhost:3000/clubs"
          style={{ color: "initial" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <GroupsSharpIcon />
            </ListItemIcon>
            <ListItemText primary="clubs" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Stack
        direction="row"
        spacing={2}
        style={{ paddingTop: 35, paddingLeft: 10 }}
      >
        <Button
          href="http://localhost:8080/api/person/controller/person/report"
          variant="contained"
          color="success"
        >
          pdf
        </Button>
      </Stack>
    </div>
  );

  return <div>{drawer}</div>;
}

export default Sidebar;
