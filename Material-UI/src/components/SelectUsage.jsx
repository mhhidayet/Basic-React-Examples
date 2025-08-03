import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

const cities = [
    { label: "Kocaeli ", value: "41" },
    { label: "Kayseri ", value: "38" },
    { label: "istanbul ", value: "34" },
    { label: "Adana ", value: "1" },

];

export default function SelectUsage() {
    const [city, setCity] = useState(41);
    function handleChange(e) {
        setCity(e.target.value)
    }
    console.log(city)
    return (
        <Box width="300px">
            <TextField label="Select City" value={city} onChange={handleChange} select fullWidth>
                {/* <MenuItem value="41">Kocaeli</MenuItem>
                <MenuItem value="1">Adana</MenuItem>
                <MenuItem value="34">İstanbul</MenuItem>
                <MenuItem value="38">Kayseri</MenuItem> */}

                {
                    cities.map(Option => <MenuItem key={Option.value} value={Option.value}>{Option.label}</MenuItem>)
                }

            </TextField>
        </Box>
    );
}