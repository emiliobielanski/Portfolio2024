import { Typography, Box } from "@mui/material";


// eslint-disable-next-line react/prop-types
const TitleBreak = ({title}) => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "32px", md: "50px" },
          fontFamily: "Nunito",
          marginBottom: "0.2rem",
          textAlign: "center",
          marginTop: "5rem"
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: "60%",
          height: "2px",
          background:
            "linear-gradient(to right, transparent, #424242, transparent)",
          margin: "0 auto",
          marginBottom: "3rem",
        }}
      ></Box>
    </>
  );
};

export default TitleBreak;
