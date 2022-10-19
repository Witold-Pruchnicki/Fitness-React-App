import {Stack, Typography} from "@mui/material";
import Icon from '../assets/workout.png'

const BodyPart = ({item, bodyPart, setBodyPart}) => {
    return (
        <Stack type="button"
               alignItems="center"
               justifyContent="center"
               className="bodyPart-card"
               sx={{
                   borderTop: bodyPart === item ? '4px solid #0ca2ff' : '',
                   backgroundColor: 'white',
                   borderBottomLeftRadius: '20px',
                   width: '270px',
                   height: '280px',
                   cursor: 'pointer',
                   gap: '45px'
               }}
               onClick={() => {setBodyPart(item) ; window.scrollTo({top:1800, left:100, behavior:'smooth'})}}
        >
            <img src={Icon} alt="workicon" style={{width: '40px', height: '40px'}}/>
            <Typography fontSize="24px" fontWeight="bold" color="#0ca2ff" textTransform="capitalize">{item}</Typography>
        </Stack>
    )
}
export default BodyPart