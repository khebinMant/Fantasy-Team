import { addNewFantasyTeam, deletePlayerFromAligment, deletePlayerFromTeam, setActiveFantasyTeam, setIsCreatingNewFantasyTeam, setPlayerOnAligment, setPlayerOnFantasyTeam, updateFantasyTeam } from "./fantasySlice"

export const startFantasyTeam = (newFantasyTeam) =>{

    return async ( dispatch, getState )=>{

        dispatch( setIsCreatingNewFantasyTeam() )

        //Despachar 
        dispatch( addNewFantasyTeam( newFantasyTeam ) )
        dispatch( setActiveFantasyTeam(newFantasyTeam) )

        //Guadar en local storage
        const  fantasyTeams  = getState().fantasy.fantasyTeams

        localStorage.setItem('fantasyTeams', JSON.stringify(fantasyTeams))

    }

}

export const startUpdateFantasyTeam = (newFantasyTeamValues, id) =>{
    return async (dispatch, getState)=>{

        dispatch( setIsCreatingNewFantasyTeam() )

        //Despachar
        dispatch( updateFantasyTeam({newFantasyTeamValues, id}) )


        //Actualizar local storage
        const  fantasyTeams  = getState().fantasy.fantasyTeams
        localStorage.setItem('fantasyTeams', JSON.stringify(fantasyTeams))

    }
}


export const startSavePlayerToTeam = (newPlayer, id) =>{
    return async (dispatch, getState)=>{

        const fnTeams = getState().fantasy.fantasyTeams
        let top = Math.random() * (490 - 10) + 10;
        let left = Math.random() * (260 - 10) + 10;
        let newAligment = {}

        fnTeams.forEach(ft => {
            if(ft.id === id ){
                if(ft.alignment===null){
                    newAligment = {}
                }
                else{
                    newAligment = {...ft.alignment}
                }
            }
        });

        newAligment[newPlayer.strPlayer] = {
            top:top, left:left, title:newPlayer.strPlayer, img:newPlayer.strThumb
        }

        //Despachar
        dispatch( setPlayerOnFantasyTeam({newPlayer, id}) )
        dispatch( setPlayerOnAligment({ newAligment, id}) )

        //Actualizar local storage
        const  fantasyTeams  = getState().fantasy.fantasyTeams
        localStorage.setItem('fantasyTeams', JSON.stringify(fantasyTeams))

    }
}

export const startDeletePlayerFromTeam = (playerId, teamId, strPlayer) =>{
    return async (dispatch, getState)=>{

        const fnTeams = getState().fantasy.fantasyTeams
        let newAligment = {}

        fnTeams.forEach(ft => {
            if(ft.id === teamId ){
                newAligment = {...ft.alignment}
            }
        });

        delete newAligment[strPlayer]

        //Despachar
        dispatch( deletePlayerFromTeam({playerId, teamId}) )
        dispatch( deletePlayerFromAligment({newAligment, teamId}) )


        //Actualizar local storage
        const  fantasyTeams  = getState().fantasy.fantasyTeams
        localStorage.setItem('fantasyTeams', JSON.stringify(fantasyTeams))


    }
}