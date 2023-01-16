import { Box, useTheme, Grid } from '@mui/material'
import InfoSquare from 'components/InfoSquare'
import QuestionSquare from 'components/QuestionSquare';
import React, { useState } from 'react'
import HLButtons from 'components/HLButtons';
import { useGetDataQuery } from 'state/api';

const Home = () => {
    const theme = useTheme();
    // const [QuestionData, updateQuestionSquare] = useState()
    const { data, isLoading } = useGetDataQuery();
    console.log(data)
    return (
        <Grid container spacing={5}
            direction="row"
            justifyContent="space-around"
            padding="5"
        >
            {data ? (
                <>
                    <Grid item xs={6}>
                        <InfoSquare
                            data={data}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <QuestionSquare
                            title="Sea Shells sold by the sea shore"
                            backgroundImg="https://picsum.photos/800/?blur"
                        />
                    </Grid>
                    <HLButtons />
                </>) : <>Loading...</>}
        </Grid>
    )
}
export default Home