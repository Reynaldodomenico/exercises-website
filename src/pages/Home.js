import React, {useState} from "react";
import {Box} from '@mui/material';

import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import HorizontalScrollBar from "../components/HorizontalScrollBar";

const Home = () => {
  const [bodyPart, setBodyPart] = useState([]);
  const [exercises, setExercises] = useState([]);

  return (
  <Box>
    <HeroBanner/>
    <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart}/>
  </Box>
  );
};

export default Home;
