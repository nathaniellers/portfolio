import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const WorkCard = ({ companyName, title, description }) => {
  return (
    <>
        {/* <Card
        sx={{
            textAlign: "center",
            padding: "10px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            borderRadius: "12px",
            transition: "0.3s",
            "&:hover": {
            boxShadow: "0 15px 30px#353434",
            },
        }}
        > */}
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom:"0", color:"#000"}}>
            {companyName}
        </Typography>
        <CardContent sx={{paddingTop:"0"}}>
            <Typography variant="body2" sx={{ fontWeight: "bold", color:"#353434"}}>
            {title}
            </Typography>
            <Typography>
            </Typography>
            <Typography variant="body2" color="textSecondary">
            {description.split("<br>").map((line, index) => (
                <span key={index}>
                    {line.trim()}
                    <br />
                </span>
            ))}
            </Typography>
        </CardContent>
        {/* </Card> */}
    </>
  );
};

export default WorkCard;
