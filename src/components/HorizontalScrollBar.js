import {Box, Typography} from "@mui/material";
import BodyPart from "./BodyPart";
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import {useContext} from "react";
import RightArrowIcon from '../assets/right-arrow.png';
import LeftArrowIcon from '../assets/left-arrow.png';

const LeftArrow = () => {
    const {scrollPrev, isFirstItemVisible} = useContext(VisibilityContext);

    return (
        <Typography disabled={isFirstItemVisible} onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="left-arrow"/>
        </Typography>
    );
};

const RightArrow = () => {
    const {scrollNext} = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow"/>
        </Typography>
    );
};

const HorizontalScrollbar = ({data, bodyPart, setBodyPart, bodyParts}) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map(item =>
            <Box key={item.id || item}
                 // itemId={item.id || item}
                 title={item.id || item} m="0 40px">
                {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart}/> : ''}
            </Box>)}
    </ScrollMenu>


)
export default HorizontalScrollbar