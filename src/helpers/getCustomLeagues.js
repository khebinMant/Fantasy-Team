import { sportDBApi } from "../api/sportDBApi"

export const getCustomLeagues = async (leagueId)=>{
    try{

        const resp = await sportDBApi.get(`/lookupleague.php?id=${leagueId}`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}