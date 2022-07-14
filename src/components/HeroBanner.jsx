import { Box, Typography } from "@mui/material";
import React from "react";

import HeroBannerImg from "../assets/images/banner.png";
function HeroBanner() {
  return (
    <Box sx={{ mt: { lg: "212px", xs: "70px" } }} p="20px" position="relative">
      <Typography color="#FF2625" fontWeight={600} fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile
        <br />
        And Repeat
      </Typography>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Check out the most effective exercises personalized to you
      </Typography>
      <a
        href="#exercies"
        style={{
          display: "inline-block",
          marginTop: "45px",
          textDecoration: "none",
          backgroundColor: "#FF2625",
          padding: "14px",
          borderRadius: "4px",
          color: "#fff",
          fontSize: "22px",
        }}
      >
        Explore Exercises
      </a>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "200px",
          color: "#FF2625",
          opacity: ".1",
          display: { xs: "none", lg: "block" },
        }}
      >
        Exercise
      </Typography>
      <img className="hero-banner-img" src={HeroBannerImg} alt="hero_banner" />
    </Box>
  );
}

export default HeroBanner;
