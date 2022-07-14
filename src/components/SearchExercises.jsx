import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

function SearchExercises({ bodyPart, setBodyPart, setExercises }) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography
        fontWeight={700}
        fontSize={{ lg: "44px", xs: "30px" }}
        textAlign="center"
        mb="49px"
      >
        Awesome Exercises <br />
        You Should Know
      </Typography>
      <Stack direction="row" sx={{ width: { lg: "60vw", sm: "80vw" } }}>
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: "100%",
            backgroundColor: "#fff",
          }}
          type="text"
          placeholder="Search Excercises"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          style={{
            width: "173px",
            background: "#FF2625",
            color: "#fff",
            fontSize: { lg: "20px", xs: "14px" },
            fontWeight: "600",
            marginLeft: "-5px",
            borderRadius: "0 4px 4px 0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Stack>
      <Box sx={{ position: "relative", width: "100%", p: "20px", mt: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyPart={true}
        />
      </Box>
    </Stack>
  );
}

export default SearchExercises;
