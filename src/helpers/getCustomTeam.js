import { sportDBApi } from "../api/sportDBApi"

export const getCustomTeams = async (teamId)=>{
    try{

        const resp = await sportDBApi.get(`/lookupteam.php?id=${teamId}`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}