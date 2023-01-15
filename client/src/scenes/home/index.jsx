import { Box, useTheme, Grid } from '@mui/material'
import InfoSquare from 'components/InfoSquare'
import QuestionSquare from 'components/QuestionSquare';
import React from 'react'

const Home = () => {
    const theme = useTheme();
    return (
        <Grid container spacing={5}
            direction="row"
            justifyContent="space-around"
            padding="5"
        >
            <Grid item xs={6}>
                <InfoSquare
                    title="Number of nuns a nun can a chuck"
                    value="1,000,000"
                    measurement="Nuns"
                    source="https://blinkcreativemedia.co.uk"
                    backgroundImg="https://picsum.photos/800/?blur"
                />
            </Grid>
            <Grid item xs={6}>
                <QuestionSquare
                    title="Sea Shells sold by the sea shore"
                    backgroundImg="https://picsum.photos/800/?blur"
                />
            </Grid>
        </Grid>

    )
}
export default Home