import { addNewFantasyTeam, deletePlayerFromTeam, setActiveFantasyTeam, setIsCreatingNewFantasyTeam, setPlayerOnFantasyTeam, updateFantasyTeam } from "./fantasySlice"

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


        //Despachar
        dispatch( setPlayerOnFantasyTeam({newPlayer, id}) )


        //Actualizar local storage
        const  fantasyTeams  = getState().fantasy.fantasyTeams
        localStorage.setItem('fantasyTeams', JSON.stringify(fantasyTeams))

    }
}

export const startDeletePlayerFromTeam = (playerId, teamId) =>{
    return async (dispatch, getState)=>{

        //Despachar
        dispatch( deletePlayerFromTeam({playerId, teamId}) )


        //Actualizar local storage
        const  fantasyTeams  = getState().fantasy.fantasyTeams
        localStorage.setItem('fantasyTeams', JSON.stringify(fantasyTeams))


    }
}