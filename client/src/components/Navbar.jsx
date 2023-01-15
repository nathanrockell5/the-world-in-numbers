import React, { useState } from 'react'
import {
    LightModeOutlined,
    DarkModeOutlined,
    ChevronRightOutlined
} from '@mui/icons-material'
import InfoIcon from '@mui/icons-material/Info';
import FlexBetween from 'components/FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import { AppBar, IconButton, Toolbar, Typography, useTheme, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const NavItems = [
    {
        text: "About",
        icon: <InfoIcon />
    }
]
const Navbar = () => {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const dispatch = useDispatch();
    const theme = useTheme();
    const navigate = useNavigate();
    return <AppBar
        sx={{
            position: "static",
            background: "none",
            boxShadow: "none",
        }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>


            {/*Left Side*/}
            <FlexBetween>
                <List>
                    <ListItem>
                        <ListItemButton onClick={() => {
                            navigate(`/home`);
                            setActive("home")
                        }}>
                            <ListItemText primary={"THE WORLD IN NUMBERS"} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </FlexBetween>


            {/*Right Side*/}
            <FlexBetween gap="1.5rem">
                <FlexBetween>
                    <List>
                        {NavItems.map(({ text, icon }) => {
                            const lcText = text.toLowerCase();
                            return (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton
                                        onClick={() => {
                                            navigate(`/${lcText}`);
                                            setActive(lcText)
                                        }}
                                        sx={{
                                            borderBlockStyle: active === lcText ? "solid" : "none",
                                            borderWidth: "3px",
                                            // color: active === lcText
                                            //     ? theme.palette.primary[900]
                                            //     : theme.palette.secondary[200]
                                        }
                                        }>
                                        {/* <ListItemIcon
                                            sx={{
                                                ml: "2rem",
                                                color: active === lcText
                                                    ? theme.palette.primary[600]
                                                    : theme.palette.secondary[200]
                                            }}>{icon}
                                        </ListItemIcon> */}
                                        <ListItemText primary={text.toUpperCase()} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                </FlexBetween>
                <IconButton onClick={() => dispatch(setMode())}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlined sx={{ fontSize: "25px" }} />
                    ) : (
                        <LightModeOutlined sx={{ fontSize: "25px" }} />
                    )}
                </IconButton>
            </FlexBetween>
        </Toolbar>
    </AppBar >
}

export default Navbar