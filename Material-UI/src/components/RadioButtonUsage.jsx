import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";

export default function RadioButtonUsage() {
    const [value, setValue] = useState("1")
    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <>
            <Box>
                <p>{value}</p>
                <FormControl>
                    <FormLabel>Eğitiminiz</FormLabel>
                    <RadioGroup row name="egitim" value={value} onChange={handleChange}>
                        <FormControlLabel control={<Radio size="small" color="secondary" />} label="Lise" value="0" />

                        <FormControlLabel control={<Radio size="medium" color="danger" />} label="üniversite" value="1" />

                        <FormControlLabel control={<Radio size="large" color="error" />} label="Yüksek Lisans" value="2" />

                    </RadioGroup>
                </FormControl>
            </Box>
        </>


    );
}