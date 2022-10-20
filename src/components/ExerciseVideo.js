import {Box, Stack, Typography} from "@mui/material";

const ExerciseVideo = ({exerciseVideos, name}) => {

    if (!exerciseVideos.length) return 'Loading...'
    return (<Box sx={{marginTop: {lg: '100px', xs: '20px'}}} p="20px">
            <Typography variant="h4" mb="33px">
                Watch <span
                style={{color: '#0ca2ff', fontWeight: '500', textTransform: 'capitalize'}}>{name}</span> exercise videos
            </Typography>
            <Stack justifyContent="center" flexWrap="wrap" alignItems="center" sx={{
                flexDirection: {lg: 'row'}, gap: {lg: '30px', xs: '0'}
            }}>{exerciseVideos?.slice(0, 3).map((item, index) => (
                <a
                    key={index} className="exercise-video"
                    href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                    target="blank">
                    <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                    <Box>
                        <Typography variant="h5" textAlign="center" color="#0ca2ff" fontWeight="600">
                            {item.video.title}
                        </Typography>
                        <Typography variant="h6" textAlign="center" color="black" fontWeight="300">
                            {item.video.channelName}
                        </Typography>
                    </Box>

                </a>))}</Stack>
        </Box>

    )
}

export default ExerciseVideo