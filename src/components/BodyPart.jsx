import { Stack, Typography } from "@mui/material";
import React from "react";

import gymIcon from "../assets/icons/body-part.png";

function BodyPart({ item, bodyPart, setBodyPart }) {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: item === bodyPart ? "4px solid #ff2625" : "",
        width: "270px",
        height: "282px",
        cursor: "pointer",
        background: "#fff",
        borderBottomLeftRadius: "20px",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, behavior: "smooth" });
      }}
    >
      <img
        src={gymIcon}
        alt="dumbble"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontWeight="bold"
        fontSize="24px"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
}

export default BodyPart;
