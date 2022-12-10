import { sportDBApi } from "../api/sportDBApi"

export const getTeamsByLeague = async (leagueId)=>{
    try{

        const resp = await sportDBApi.get(`/lookup_all_teams.php?id=${leagueId}`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}