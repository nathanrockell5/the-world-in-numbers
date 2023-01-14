import React from 'react'
import {
    LightModeOutlined,
    DarkModeOutlined,
} from '@mui/icons-material'
import FlexBetween from 'components/FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import { AppBar, IconButton, Toolbar, Typography, useTheme } from '@mui/material';


const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    return <AppBar
        sx={{
            position: "static",
            background: "none",
            boxShadow: "none",
        }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
            {/*Left Side*/}
            <FlexBetween>
                <Typography>I believe this is the left hand side</Typography>
            </FlexBetween>
            {/*Right Side*/}
            <FlexBetween gap="1.5rem">
                <IconButton onClick={() => dispatch(setMode())}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlined sx={{ fontSize: "25px" }} />
                    ) : (
                        <LightModeOutlined sx={{ fontSize: "25px" }} />
                    )}
                </IconButton>
                <FlexBetween>
                    <Typography>Going to put the about stuff here</Typography>
                </FlexBetween>
            </FlexBetween>
        </Toolbar>
    </AppBar>
}

export default Navbar