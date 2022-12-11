import { sportDBApi } from "../api/sportDBApi"

export const getTeamByName = async (teamName)=>{
    try{

        const resp = await sportDBApi.get(`/searchteams.php?t=${teamName}`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}