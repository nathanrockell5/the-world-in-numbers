import React from 'react'
import { Box, Button, Typography, useTheme } from '@mui/material'
import FlexBetween from './FlexBetween';

const InfoSquare = ({ title, measurement, value, source, backgroundImg }) => {
    const theme = useTheme();
    return (
        <Box
            gridColumn="span 1"
            gridRow="span 1"
            display="flex"
            flexDirection="column"
            alignContent="center"
            alignItems="center"
            height="80vh"
            justifyContent="space-evenly"
            sx={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: "multiply",
                backgroundColor: theme.palette.mode === 'dark' ? (
                    theme.palette.primary[100]
                ) : (
                    theme.palette.primary[900]
                ),
                Opacity: 0.5,
            }}>
            <FlexBetween>
                <Typography variant='h1'>{title}</Typography>
            </FlexBetween>
            <Typography variant='h2'>{value} {measurement}</Typography>
            <a href={source}><Button variant='h3'>Source</Button></a>
        </Box >
    )
}

export default InfoSquare