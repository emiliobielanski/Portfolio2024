import { Grid2, Button } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const SocialLinks = () => {
  return (
    <Grid2 justifyContent={"center"} alignItems={"center"}>
      <Button href="https://www.linkedin.com/in/emilio-bielanski-345499273/">
        <LinkedInIcon style={{ fill: "white" }} />
      </Button>

      <Button href="https://github.com/emiliobielanski">
        <GitHubIcon style={{ fill: "white"}} />
      </Button>
    </Grid2>
  );
};

export default SocialLinks;
