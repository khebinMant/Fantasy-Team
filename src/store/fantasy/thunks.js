import { addNewFantasyTeam, setActiveFantasyTeam, setIsCreatingNewFantasyTeam } from "./fantasySlice"

export const startFantasyTeam = (newFantasyTeam) =>{

    return async ( dispatch, getState )=>{

        dispatch( setIsCreatingNewFantasyTeam() )

        //Guadar en local storage
        const  fantasyTeams  = getState().fantasy.fantasyTeams

        localStorage.setItem('fantasyTeams', JSON.stringify(fantasyTeams))

        //Despachar 
        dispatch( addNewFantasyTeam( newFantasyTeam ) )
        dispatch( setActiveFantasyTeam(newFantasyTeam) )

    }

}