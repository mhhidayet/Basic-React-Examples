import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from '@mui/material/ButtonGroup';

import { IconButton } from '@mui/material';




export default function ButtonUsage() {
    return (
        <>
            <Stack direction="row" spacing={2}>
                <Button variant="text" >Text</Button>
                <Button variant="contained">contained</Button>
                <Button variant="outlined">outlined</Button>
            </Stack>

            <div style={{ margin: "20px" }}>
                <Button variant="text" size='small'>Text</Button>
                <Button variant="contained" color='success' size='medium' startIcon={<SendIcon />}>contained</Button>
                <Button variant="outlined" size='large' endIcon={<SendIcon />}>outlined</Button>
            </div >

            <div style={{ margin: "20px" }}>
                <IconButton color="error">
                    <DeleteIcon />
                </IconButton>
            </div>

            <ButtonGroup color="error" variant="contained" size="large">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>

        </>
    );
}
