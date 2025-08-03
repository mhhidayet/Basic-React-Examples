import { Box, Card, CardActions, CardContent, Typography, Button, CardMedia } from "@mui/material";

export default function CardUsage() {
    return (
        <Box width="300px">
            <Card>
                <CardMedia component="img" height="150" image="https://picsum.photos/500" alt="image" >
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h2" component="div">Lorem, ipsum.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum tenetur dicta officiis temporibus esse neque numquam, aut maiores facere accusantium suscipit consequatur aliquam provident natus sapiente accusamus architecto quas corporis!</Typography>
                </CardContent>
                <CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Box>
    );
}