import React, { useState } from 'react'
import { Box, useTheme, List, ListItem, ListItemButton, ListItemText, Button, Divider } from '@mui/material'
import FlexBetween from './FlexBetween'

const HLButtons = () => {
    const [buttonClicked, setButtonClicked] = useState(null);
    const theme = useTheme();
    return (
        <Box position="absolute" bottom="2rem" right="2rem" sx={{
            borderBlockStyle: "solid",
            borderWidth: "3px",
        }}>
            <Box />
            <FlexBetween>
                <Button variant="text" onClick={() => {

                }}
                    sx={{
                        fontWeight: "bold",
                        fontSize: "5rem"
                    }}
                >HIGHER</Button>
                <Divider />
                <Button variant="text" onClick={() => {

                }}
                    sx={{
                        fontWeight: "bold",
                        fontSize: "5rem"
                    }}
                >LOWER</Button>
            </FlexBetween >
        </Box >
    )
}

export default HLButtons