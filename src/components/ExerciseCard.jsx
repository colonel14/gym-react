import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function ExerciseCard({ exercise }) {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            fontSize: "14px",
            color: "#fff",
            background: "#ffa9a0",
            borderRadius: "20px ",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            fontSize: "14px",
            color: "#fff",
            background: "#FCC757",
            borderRadius: "20px ",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        fontSize="24px"
        fontWeight="bold"
        color="#000"
        textTransform="capitalize"
        mt="11px"
        pb="10px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
}

export default ExerciseCard;
