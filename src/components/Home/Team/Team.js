import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import TeamMember from "../TeamMember/TeamMember";
const Team = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("https://fastpro-cleaning-services.herokuapp.com/teams")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  return (
    <Box py={10} style={{ background: "#f8f8f8" }}>
      <Container>
        <Typography variant="h6" align="center">
          Team Member
        </Typography>
        <Typography align="center" variant="h4">
          We Have an Awesome <br /> Team Member
        </Typography>
        <Grid container spacing={4}>
          {teams.map((team) => (
            <TeamMember key={team._id} {...team} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;
