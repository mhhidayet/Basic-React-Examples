import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function TypographyUsage() {
    return (
        <Box sx={{ width: "100%", maxwidth: 800 }}>

            <Typography variant="h1" gutterBottom>Lorem ,ipsum dolor.</Typography>
            <Typography variant="h2" gutterBottom>Lorem ,ipsum dolor.</Typography>
            <Typography variant="h3" gutterBottom>Lorem ,ipsum dolor.</Typography>
            <Typography variant="h4" gutterBottom>Lorem ,ipsum dolor.</Typography>
            <Typography variant="h5" gutterBottom>Lorem ,ipsum dolor.</Typography>
            <Typography variant="h6" gutterBottom>Lorem ,ipsum dolor.</Typography>

            <Typography variant="subtitle1" gutterBottom>lorem sit amet </Typography>   {/*  Alt Başlık Ekleme */}

            <Typography variant="subtitle2" gutterBottom>lorem sit amet </Typography>   {/*  Alt Başlık Ekleme */}

            <Typography variant="body1" gutterBottom>lorem sit amet </Typography>   {/*  P etiketine karşılık gelir   */}

            <Typography variant="body22" gutterBottom>lorem sit amet </Typography>   {/*  P etiketine karşılık gelir */}










        </Box >
    );
} 