import { sportDBApi } from "../api/sportDBApi"

export const getPlayersByTeam = async (teamId)=>{
    try{

        const resp = await sportDBApi.get(`/lookup_all_players.php?id=${teamId}`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}