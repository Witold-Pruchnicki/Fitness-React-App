import {Button, Stack, Typography} from "@mui/material";
import BodyPartImage from "../assets/muscles.png";
import TargetImage from '../assets/exercise.png';
import EquipmentImage from '../assets/gym.png'
const Detail = ({exerciseDetail}) => {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },


    ]
    return (
        <Stack gap="60px" sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>
            <img src={gifUrl} alt={name} loading="lazy" className="detail-image"/>
            <Stack sx={{gap: {lg: '35px', xs: '20px'}}}>
                <Typography variant="h3">
                    {name}
                </Typography>
                <Typography variant="h6">
                    {`Exercises keep you strong. ${name} make you muscel stronger and more visible`}
                </Typography>
                {extraDetail.map((item) => (
                    <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                        <Button sx={{background: 'rgba(12,162,255,0.16)', borderRadius: '50', width: '100px', height: '100px'}}><img
                            src={item.icon} alt={bodyPart} width="50px"/> </Button>
                        <Typography variant="h5" textTransform='capitalize'>{item.name}</Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>


    )
}

export default Detail