import { InputAdornment, Stack, TextField } from '@mui/material';

export default function TextFieldUsage() {
    return (
        <Stack spacing="3">
            <Stack direction="row" spacing={3}>
                <TextField label="name" variant="outlined" />
                <TextField label="name" variant="filled" />
                <TextField label="name" variant="standard" />
            </Stack>

            <Stack direction="row" spacing={3}>
                <TextField label="name" size='small' color='secondary' variant="outlined" />
                <TextField label="name" required />
                <TextField type="password" label="password" required />
            </Stack>

            <Stack direction="row" spacing={3}>
                <TextField
                    label="name"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">$</InputAdornment>
                            ),
                        },
                    }}
                />
                <TextField
                    label="name"
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">KG</InputAdornment>
                            ),
                        },
                    }}
                />
            </Stack>
            <Stack direction="row" spacing={3}>
                <TextField label="name" helperText="inconnet" error />
            </Stack>
        </Stack>
    )

}
