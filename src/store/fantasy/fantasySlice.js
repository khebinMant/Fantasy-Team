import { createSlice } from '@reduxjs/toolkit';

export const fantasySlice = createSlice({
    name: 'fantasy',
    initialState: {
        isSaving: false, //permite determinar si esta en modo de creacion
        fantasyTeams:[
            {
                name:null,
                creationDate:null,
                players:[
                    // {
                    //     player_key:'',//id
                    //     player_name:'',
                    //     player_number:'',//numero de camiseta
                    //     player_country:'',//pais
                    //     player_age:'',//edad
                    //     player_injured:'',//lesionado
                    //     player_image:''//url de la imagne del jugador
                    // }
                ],
                captain:null,//id del jugador ,
                rating:null,
                image:null
            }
        ],
        activeFantasyTeam:null//obejto del fantasy team actual seleccionado
    },
    reducers: {
        setIsCreatingNewFantasyTeam: ( state ) => {
            state.isSaving = true;
        },
        setActiveFantasyTeam: ( state, action ) => {
            state.activeFantasyTeam = action.payload
        },
        setUserInfo:( state, action) => {
            state = action.payload
        },
        addNewFantasyTeam: ( state, action ) => {
            state.fantasyTeams.push(action.payload);
            state.isSaving = false
        },
        updateFantasyTeam: (state, action ) => {
            state.isSaving = false;
            state.fantasyTeams = state.fantasyTeams.map(fanteam =>{
                if(action.payload.id === fanteam.id){
                    return action.payload
                }
                return fanteam
            })
        },
        deleteFantasyTeam:(state, action)=>{
            state.fantasyTeams.splice(state.fantasyTeams.findIndex(fanteam => fanteam.id === action.payload),1)
        }

    }
});
// Action creators are generated for each case reducer function
export const { setIsCreatingNewFantasyTeam, setActiveFantasyTeam, setUserInfo, addNewFantasyTeam, updateFantasyTeam, deleteFantasyTeam   } = fantasySlice.actions;