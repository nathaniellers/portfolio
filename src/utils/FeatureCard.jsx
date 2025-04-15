import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card
      sx={{
        textAlign: "center",
        padding: "10px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        borderRadius: "12px",
        transition: "0.3s",
        "&:hover": {
          boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
        },
      }}
    >
      <Box sx={{ fontSize: "50px", color: "#ff3b57" }}>
        {icon}
      </Box>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom:"10px"}}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
