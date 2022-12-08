import { CircularProgress, Grid } from '@mui/material'
import React from 'react'

export const CheckingAuth = () => {
    return (
        <Grid
        container
        spacing={ 0 }
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' , backgroundColor: 'primary.main', padding: 4 }}
        >

            <Grid   
                container 
                direction='row'
                justifyContent='center'
                alignItems='center'
                item
                sx={{  width: { sm: 450 }}}>
                <CircularProgress color='warning'/>
            </Grid>
        </Grid>
    )
}
