import { Box, Grid2, Typography } from "@mui/material";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import Hexagon from "react-hexagon";

export const Projects = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "top",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" sx={{ fontSize: "50px", fontFamily: "Nunito" }}>
        Projects
      </Typography>
      <Box
        sx={{
          width: "60%",
          height: "2px",
          background:
            "linear-gradient(to right, transparent, #424242, transparent)",
        }}
      ></Box>
      <Grid2 container justifyContent={"center"} spacing={3} margin={"4rem"}>
        <Grid2 item>
          <Box textAlign={"center"}>
            <FaHtml5 size={"60"} />
            <Typography>HTML5</Typography>
          </Box>
        </Grid2>
        <Grid2 item>
          <Box sx={{ textAlign: "center" }}>
            <IoLogoCss3 size={"60"} />
            <Typography>CSS</Typography>
          </Box>
        </Grid2>
        <Grid2 item>
          <Box sx={{ textAlign: "center" }}>
            <IoLogoJavascript size={"60"} />
            <Typography>JavaScript</Typography>
          </Box>
        </Grid2>
        <Grid2 item>
          <Box sx={{ textAlign: "center" }}>
            <SiTypescript size={"60"} />
            <Typography>TypeScript</Typography>
          </Box>
        </Grid2>
        <Grid2 item>
          <Box sx={{ textAlign: "center" }}>
            <Hexagon className="hexagon">
              <FaReact size={"100%"} />
            </Hexagon>
            <Typography>React</Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};
