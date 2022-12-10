import { addNewFantasyTeam, setActiveFantasyTeam, setIsCreatingNewFantasyTeam, updateFantasyTeam } from "./fantasySlice"

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

        console.log(newFantasyTeamValues)
        dispatch( setIsCreatingNewFantasyTeam() )

        //Despachar
        dispatch( updateFantasyTeam({newFantasyTeamValues, id}) )


        //Actualizar local storage
        const  fantasyTeams  = getState().fantasy.fantasyTeams
        localStorage.setItem('fantasyTeams', JSON.stringify(fantasyTeams))

    }
}