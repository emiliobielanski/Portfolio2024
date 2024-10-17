import { Box, Link, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
export const ProjectsCard = ({title, description, link, image}) => {
  return (
    <Link href={link} underline="none">
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
          width: 300,
          height: 350,
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Box
          component="img"
          src={image}
          alt="Screenshot of the site this card leads to"
          sx={{
            width: "100%",
            height: "60%",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            padding: "16px",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" fontFamily={"nunito"} fontSize={24} gutterBottom>
            {title}
          </Typography>
          <Typography fontWeight={600} color="textSecondary" fontFamily={"nunito"} fontSize={16}>
          {description}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};
