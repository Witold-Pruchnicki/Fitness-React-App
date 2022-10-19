import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";
import {Box} from "@mui/material";

const Home = ()=>{
    return (
        <Box>
            <HeroBanner/>
            <SearchExercises/>
            <Exercises />
        </Box>
    )
}
export default Home