import React, { useState } from 'react'
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from 'react-router-dom';
import NavBar from "components/Navbar";
import HLButtons from 'components/HLButtons';

const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    return (
        <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
            <Box flexGrow={1}>
                <NavBar />
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;