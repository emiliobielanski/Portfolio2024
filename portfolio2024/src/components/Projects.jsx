import { Box, Grid2, Typography } from "@mui/material";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import { ProjectsCard } from "./ProjectsCard";
import brokenRecords from "../assets/picture/brokenRecords.png";
import omdbapi from "../assets/picture/omdbapi.png"
import codeMobileChat from "../assets/picture/codeMobileChat.png"
import TitleBreak from "./TitleBreak";

const iconsData = [
  { icon: <FaHtml5 size={"60"} />, label: "HTML5" },
  { icon: <IoLogoCss3 size={"60"} />, label: "CSS" },
  { icon: <IoLogoJavascript size={"60"} />, label: "JavaScript" },
  { icon: <SiTypescript size={"55"} />, label: "TypeScript" },
  { icon: <FaReact size={"60"} />, label: "React" },
];

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
     <TitleBreak title="Projects"/>

      {/* Skill Icons with Framer Motion */}
      <Grid2 container gap={5} alignItems={"center"} textAlign={"center"} marginTop={2} marginBottom={5}>
        {iconsData.map(({ icon, label }, index) => (
          <Grid2 item key={index}>
            <motion.div
              whileHover="hover" // Trigger hover effect on both icon and text
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Icon with scaling effect */}
              <motion.div
                initial={{ scale: 1 }}
                variants={{
                  hover: { scale: 1.2 },
                }}
              >
                {icon}
              </motion.div>

              {/* Corresponding Text with fade-in effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                variants={{
                  hover: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                style={{ marginTop: "10px" }}
              >
                <Typography fontFamily={"nunito"} fontWeight={700}>
                  {label}
                </Typography>
              </motion.div>
            </motion.div>
          </Grid2>
        ))}
      </Grid2>

      <Grid2 container gap={6}>
        <ProjectsCard title="Broken Records" description="A mock e-shop marketplace for vinyl records" link="https://brokenrecords-vwsy.vercel.app/" image={brokenRecords}/>
        <ProjectsCard title="omdbAPI Movie Search" description="Search up your favorite movies using the omdbAPI" link="https://omdb-api-website.vercel.app/" image={omdbapi}/>
        <ProjectsCard title="Mobile Chat App Repo" description="Github repo for a mobile chat app developed using Expo Go" link="https://github.com/emiliobielanski/Chat-App" image={codeMobileChat}/>
      </Grid2>
    </Box>
  );
};
