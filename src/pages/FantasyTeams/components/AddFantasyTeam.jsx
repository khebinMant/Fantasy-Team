import { Card } from 'primereact/card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';
import anadir from '../../../assets/anadir.png'
import { Tooltip } from 'primereact/tooltip';
import { useState } from 'react';

export const AddFantasyTeam = () => {
    const navigation = useNavigate()
    const [saveBtnTooltipText, setSaveBtnTooltipText] = useState('Crear nuevo');

    const handleNavigate = () =>{
        navigation(`/create-fantasy`)
    }
    return (
        <Box >
            <Grid 
            xs={2} sm={4} md={2}
            onClick={handleNavigate}
            style={{gap:'15px'}}
            >
            <img placeholder='Agregar' 
                className='image-cover-add' 
                alt="cover" src={anadir} 
                tooltip={saveBtnTooltipText}
            />
        </Grid>
        </Box>
    )
}
